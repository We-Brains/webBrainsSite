/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import SVG from '../../assets/images/chat.inline.svg'
import Timeline from './Timeline'
import PlayBtn from '../../assets/images/play.inline.svg'
import PauseBtn from '../../assets/images/pause.inline.svg'

import './MainPageTimeLineItems.scss'

const MainPageTimeLineItems = ({ items, currentItem, setCurrentItem, isCurrent }) => {
  const [isPlaying, changePlaying] = useState<bool>(isCurrent)
  useEffect(() => changePlaying(isCurrent), [isCurrent])
  return (
    <div className="timeline-marked">
      {items.map(({ title }, idx) => (
        <div
          className={`timeline-btn-item  ${currentItem === idx ? 'timeline-btn-item-active' : ''}`}
          onClick={() => {
            setCurrentItem(idx)
            changePlaying(idx === currentItem)
          }}
        >
          <div className="timeline-btn-item-svg">
            <SVG />
          </div>
          <h4 className="timeline-btn-item-header">{title}</h4>
          <button
            className={`timeline-btn ${currentItem === idx ? 'timeline-btn-active' : ''} ${idx === 0 &&
              (isPlaying ? 'timeline-btn-play' : 'timeline-btn-pause')}`}
            type="button"
            key={title}
            value={title}
          >
            {idx === 0 && <>{isPlaying ? <PlayBtn /> : <PauseBtn />}</>}
          </button>
        </div>
      ))}
      <Timeline changeItem={setCurrentItem} currentItem={currentItem} isPlaying={isPlaying} />
    </div>
  )
}

export default MainPageTimeLineItems
