/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import Timeline from './Timeline'
import PlayBtn from '../../assets/images/play.inline.svg'
import PauseBtn from '../../assets/images/pause.inline.svg'
import { IMainPageTimeLineItems } from './Types'
import './MainPageTimeLineItems.scss'

const MainPageTimeLineItems: React.FC<IMainPageTimeLineItems> = ({ items, currentItem, setCurrentItem, isCurrent }): JSX.Element => {
  const [isPlaying, changePlaying] = useState<boolean>(isCurrent)
  useEffect(() => changePlaying(isCurrent), [isCurrent])
  return (
    <div className="timeline-marked">
      {items.map(({ id, title, svg }, idx) => (
        <div
          key={id}
          className={`timeline-btn-item  ${currentItem === idx ? 'timeline-btn-item-active' : ''}`}
          onClick={() => {
            setCurrentItem(idx)
            changePlaying(idx === currentItem)
          }}
        >
          <div className="timeline-btn-item-svg" dangerouslySetInnerHTML={{ __html: svg }} />
          <h4 className="timeline-btn-item-header">{title}</h4>
          <button
            className={`timeline-btn ${currentItem === idx ? 'timeline-btn-active' : ''} ${idx === 0 &&
              (isPlaying ? 'timeline-btn-pause' : 'timeline-btn-play')}`}
            type="button"
            key={title}
            value={title}
          >
            {idx === 0 && <>{isPlaying ? <PauseBtn /> : <PlayBtn />}</>}
          </button>
        </div>
      ))}
      <Timeline changeItem={setCurrentItem} currentItem={currentItem} isPlaying={isPlaying} />
    </div>
  )
}

export default MainPageTimeLineItems
