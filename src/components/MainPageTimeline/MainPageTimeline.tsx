import React, { useState } from 'react'
import './MainPageTimeline.scss'
import { graphql, useStaticQuery } from 'gatsby'
import MainPageTimeLineItems from './MainPageTimeLineItems'
import MainPageTimeLineItem from './MainPageTimeLineItem'
import { ITimelineQuery, IMainPageTimeLine } from './Types'

const TIMELINE_MAIN_PAGE_QUERY = graphql`
  query MainPageTimelineQuery {
    strapiTimelineScreen {
      title
      subtitle
      timelineItems: timeline_items {
        id
        title
        text: content
        svg
      }
    }
  }
`

const MainPageTimeline: React.FC<IMainPageTimeLine> = ({ isCurrent }): JSX.Element => {
  const [currentItem, setCurrentItem] = useState(0)
  const {
    strapiTimelineScreen: { title, subtitle, timelineItems }
  }: ITimelineQuery = useStaticQuery(TIMELINE_MAIN_PAGE_QUERY)
  return (
    <div className="default-container timeline">
      <div className="timeline-headers">
        <h2 className="default-header">{title}</h2>
        <h3 className="default-header-sub timeline-subheader">{subtitle}</h3>
      </div>
      <MainPageTimeLineItems items={timelineItems} currentItem={currentItem} setCurrentItem={setCurrentItem} isCurrent={isCurrent} />
      {typeof timelineItems[currentItem] !== 'undefined' && (
        <MainPageTimeLineItem
          title={timelineItems[currentItem].title}
          text={timelineItems[currentItem].text}
          svg={timelineItems[currentItem].svg}
        />
      )}
    </div>
  )
}

export default MainPageTimeline
