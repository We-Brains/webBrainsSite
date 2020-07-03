export interface ITimeline {
  currentItem: number
  changeItem: () => void
  isPlaying: boolean
}

export interface ITimelineItem {
  title: string
  text: string
}
