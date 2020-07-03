import React, { useState } from 'react'
import './MainPageTimeline.scss'
import timelineItems from './data.ts'
import MainPageTimeLineItems from './MainPageTimeLineItems'
import MainPageTimeLineItem from './MainPageTimeLineItem'

const MainPageTimeline: React.FC = ({ isCurrent }): JSX.Element => {
  const [currentItem, setCurrentItem] = useState(0)
  return (
    <div className="default-container timeline">
      <div className="timeline-headers">
        <h2 className="default-header">Как мы работаем.</h2>
        <h3 className="default-header-sub timeline-subheader">Посмотрите как происходит процесс работы</h3>
      </div>
      <MainPageTimeLineItems items={timelineItems} currentItem={currentItem} setCurrentItem={setCurrentItem} isCurrent={isCurrent} />
      {typeof timelineItems[currentItem] !== 'undefined' && (
        <MainPageTimeLineItem title={timelineItems[currentItem].title} text={timelineItems[currentItem].content} />
      )}
    </div>
  )
}

export default MainPageTimeline
