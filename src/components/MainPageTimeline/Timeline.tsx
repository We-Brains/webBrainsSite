import React, { useState, useEffect } from 'react'
import './Timeline.scss'
import { ITimeline } from './Types'

const PERCENT_TIME = 20

const Timeline: React.FC<ITimeline> = ({ currentItem, changeItem, isPlaying }): JSX.Element => {
  const [progress, changeProgress] = useState<number>(0)
  const [timeout, changeTimeout] = useState<NodeJS.Timeout>()
  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  useEffect(() => {
    if (progress <= 100.5 && isPlaying) {
      changeTimeout(
        setTimeout(() => {
          changeProgress(progress + 0.1)
          if (Math.floor(progress / (100 / 6)) === currentItem + 1) changeItem(currentItem + 1)
          if (progress >= 100) changeItem(6)
        }, PERCENT_TIME)
      )
    }
  }, [progress, isPlaying])
  useEffect(() => {
    clearTimeout(timeout)
    changeProgress(currentItem * (100 / 6))
  }, [currentItem])

  useEffect(() => {
    if (!isPlaying) {
      clearTimeout(timeout)
      changeProgress(currentItem * (100 / 6))
    }
  }, [isPlaying])
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
    </div>
  )
}

export default Timeline
