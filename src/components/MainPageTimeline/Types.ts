export interface ITimelineQuery {
  strapiTimelineScreen: {
    title: string
    subtitle: string
    timelineItems: IIDTimelineItem[]
  }
}

export interface IMainPageTimeLine {
  isCurrent: boolean
}

export interface IMainPageTimeLineItems {
  items: IIDTimelineItem[]
  currentItem: number
  setCurrentItem: (arg0: number) => void
  isCurrent: boolean
}

export interface ITimeline {
  currentItem: number
  changeItem: (arg0: number) => void
  isPlaying: boolean
}

export interface IIDTimelineItem {
  id: number | string
  title: string
  text: string
  svg: string
}

export interface ITimelineItem {
  title: string
  text: string
  svg: string
}
