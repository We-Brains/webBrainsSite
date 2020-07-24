import React, { useRef, useState, useEffect, useLayoutEffect, WheelEventHandler, TouchEventHandler } from 'react'
import { IPageView } from '../index'

const TRANSITION = 600

const PageView: React.FC<IPageView> = ({ propPage, changePropPage, children = [] }): JSX.Element => {
  const pageViewElement = useRef<any>()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [height, setHeight] = useState<number>(Infinity)
  const [changing, setChanging] = useState<boolean>(false)

  const handleChange = (direction: number) => {
    setTimeout(() => {
      setChanging(false)
      setCurrentPage(direction > 1 ? currentPage + 1 : currentPage - 1)
    }, TRANSITION)
  }

  const handleScroll: WheelEventHandler = e => {
    const { deltaY } = e
    if (!changing) {
      if (deltaY > 1 && height * (currentPage + 1) < pageViewElement.current.scrollHeight) {
        setChanging(true)
        pageViewElement.current.style.transform = `translateY(-${height * (currentPage + 1)}px)`
        pageViewElement.current.removeEventListener('wheel', handleScroll)
        handleChange(deltaY)
      } else if (deltaY < -1 && currentPage > 0) {
        setChanging(true)
        pageViewElement.current.removeEventListener('wheel', handleScroll)
        pageViewElement.current.style.transform = `translateY(-${height * (currentPage - 1)}px)`
        handleChange(deltaY)
      }
    } else {
      e.stopPropagation()
    }
  }

  const handleResize = () => {
    setHeight(window.innerHeight)
  }

  const handleTouchEvents: () => VoidFunction = () => {
    let startY = 0

    const handleTouchStart: TouchEventHandler = e => {
      const { screenY } = e.touches[0]
      startY = screenY
      if (!changing) {
        pageViewElement.current.style.transition = `none`
      }
      e.stopPropagation()
    }

    const handleTouch: TouchEventHandler = e => {
      e.preventDefault()
      const { screenY } = e.touches[0]
      if (!changing) {
        const movementDifference = height * currentPage + startY - screenY
        if (movementDifference > 0 && height * (currentPage + 1) + startY - screenY < pageViewElement.current.scrollHeight)
          pageViewElement.current.style.transform = `translateY(-${movementDifference}px)`
      } else {
        startY = screenY
      }
      e.stopPropagation()
    }

    const handleTouchEnd: TouchEventHandler = e => {
      const { screenY } = e.changedTouches[0]
      if (!changing) {
        const delta = startY - screenY
        pageViewElement.current.style.transition = `ease-out transform ${TRANSITION}ms`
        if (delta > 100 && height * (currentPage + 1) < pageViewElement.current.scrollHeight) {
          setChanging(true)
          pageViewElement.current.style.transform = `translateY(-${height * (currentPage + 1)}px)`
          pageViewElement.current.removeEventListener('wheel', handleScroll)
          handleChange(delta)
        } else if (delta < -100 && currentPage > 0) {
          setChanging(true)
          pageViewElement.current.removeEventListener('touchstart', handleTouchStart)
          pageViewElement.current.removeEventListener('', handleTouchStart)
          pageViewElement.current.removeEventListener('touchstart', handleTouchStart)
          pageViewElement.current.style.transform = `translateY(-${height * (currentPage - 1)}px)`
          handleChange(delta)
        } else {
          setChanging(false)
          pageViewElement.current.style.transform = `translateY(-${height * currentPage}px)`
        }
      } else {
        startY = screenY
      }
      e.stopPropagation()
    }
    pageViewElement.current.addEventListener('touchstart', handleTouchStart, { passive: true, capture: false })
    pageViewElement.current.addEventListener('touchmove', handleTouch, { passive: false, capture: false })
    pageViewElement.current.addEventListener('touchend', handleTouchEnd, { passive: true, capture: false })
    return () => {
      pageViewElement.current.removeEventListener('touchstart', handleTouchStart)
      pageViewElement.current.removeEventListener('touchmove', handleTouch)
      pageViewElement.current.removeEventListener('touchend', handleTouchEnd)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      setHeight(window.innerHeight)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    pageViewElement.current.addEventListener('wheel', handleScroll, { passive: true, capture: false, once: false })
    const cleanupTouchEvents = handleTouchEvents()
    return () => {
      pageViewElement.current.removeEventListener('wheel', handleScroll)
      cleanupTouchEvents()
    }
  }, [currentPage, changing, pageViewElement.current])

  useLayoutEffect(() => {
    setCurrentPage(propPage)
    pageViewElement.current.style.transfrom = `translateY(-${height * propPage}px)`
  }, [propPage])
  useLayoutEffect(() => {
    changePropPage(currentPage)
  }, [currentPage])
  return (
    <div
      ref={pageViewElement}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflow: 'visible',
        transform: `translateY(-${height * currentPage}px)`,
        transition: `ease-out transform ${TRANSITION}ms`
      }}
    >
      {children}
    </div>
  )
}

export default PageView
