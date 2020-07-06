import React from 'react'
import { ITimelineItem } from './Types'
import './MainPageTimeLineItem.scss'

const MainPageTimeLineItem: React.FC<ITimelineItem> = ({ title, text, svg }): JSX.Element => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <h3 className="timeline-item-header">{title}</h3>
        <div className="timeline-item-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
      <p className="timeline-item-text">{text}</p>
    </div>
  )
}

export default MainPageTimeLineItem
