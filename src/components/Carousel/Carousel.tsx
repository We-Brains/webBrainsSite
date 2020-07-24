/* eslint-disable react/no-array-index-key */
import React, { useState, useRef, useLayoutEffect } from 'react'
import { ICarousel } from './Types'
import './Carousel.scss'

const TRANSITION = 200

const Carousel: React.FC<ICarousel> = ({ children, infinity = true, buttonPrev, buttonNext, withDots }): JSX.Element => {
  const carousel = useRef<any>()
  const [slide, setSlide] = useState(0)

  const handleNextSlide = () => {
    if (slide + 1 < children.length) setSlide(slide + 1)
    else if (infinity) {
      setSlide(slide + 1)
      setTimeout(() => {
        carousel.current.style.transition = 'none'
        setSlide(0)
        setTimeout(() => {
          carousel.current.style.transition = `transform ${TRANSITION}ms`
        }, 10)
      }, 200)
    }
  }

  const handlePrevSlide = () => {
    if (slide - 1 >= 0) {
      setSlide(slide - 1)
    } else if (infinity) {
      setSlide(slide - 1)
      setTimeout(() => {
        carousel.current.style.transition = 'none'
        setSlide(children.length - 1)
        setTimeout(() => {
          carousel.current.style.transition = `transform ${TRANSITION}ms`
        }, 10)
      }, 200)
    }
  }

  const handleTouch = () => {
    let startX = 0
    const handleTouchStart: React.TouchEventHandler = e => {
      const { screenX } = e.touches[0]
      startX = screenX
      carousel.current.style.transition = 'none'
    }

    const handleTouchMove: React.TouchEventHandler = e => {
      e.preventDefault()
      const { screenX } = e.changedTouches[0]
      const { offsetWidth } = carousel.current
      const delta = screenX - startX
      if (infinity || (!(slide === children.length - 1 && delta < 0) && !(slide === 0 && delta > 0)))
        carousel.current.style.transform = `translateX(${-offsetWidth * (slide + +infinity) + delta}px)`
    }

    const handleTouchEnd: React.TouchEventHandler = e => {
      const { screenX } = e.changedTouches[0]
      const delta = screenX - startX
      carousel.current.style.transition = `transform ${TRANSITION}ms`
      if (delta < -40) handleNextSlide()
      else if (delta > 40) handlePrevSlide()
      else carousel.current.style.transform = `translateX(-${100 * (slide + +infinity)}%)`
    }
    carousel.current.addEventListener('touchstart', handleTouchStart, { passive: true })
    carousel.current.addEventListener('touchmove', handleTouchMove, { passive: false })
    carousel.current.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      carousel.current.removeEventListener('touchstart', handleTouchStart)
      carousel.current.removeEventListener('touchmove', handleTouchMove)
      carousel.current.removeEventListener('touchend', handleTouchEnd)
    }
  }

  useLayoutEffect(() => {
    carousel.current.style.transform = `translateX(-${100 * (slide + +infinity)}%)`
    const touchcleanUp = handleTouch()
    return () => {
      touchcleanUp()
    }
  }, [slide])

  return (
    <div className="carousel">
      <div
        className="carousel-list"
        ref={carousel}
        style={{
          transition: `transform ${TRANSITION}ms`
        }}
      >
        {infinity && <div className="carousel-list-item">{children[children.length - 1]}</div>}
        {children.map((child, idx) => (
          <div key={idx} className={`carousel-list-item ${idx === slide ? 'carousel-list-item-current' : ''}`}>
            {child}
          </div>
        ))}
        {infinity && <div className="carousel-list-item">{children[0]}</div>}
      </div>
      <div className="carousel-buttons">
        <div onClick={handlePrevSlide}>{buttonPrev}</div>
        <div onClick={handleNextSlide}>{buttonNext}</div>
      </div>
      {withDots && (
        <div className="carousel-dots">
          {children.map((el, idx) => (
            <div
              key={idx}
              className={`carousel-dots-item ${idx === slide ? 'carousel-dots-item-current' : ''}`}
              onClick={() => setSlide(idx)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
