import React from 'react'
import SVG from '../../assets/images/chat.inline.svg'
import { ITimelineItem } from './Types'
import './MainPageTimeLineItem.scss'

const MainPageTimeLineItem: React.FC<ITimelineItem> = ({ title, text }): JSX.Element => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <h3 className="timeline-item-header">{title}</h3>
        <SVG />
      </div>
      <p className="timeline-item-text">{text}</p>
    </div>
  )
}

export default MainPageTimeLineItem
