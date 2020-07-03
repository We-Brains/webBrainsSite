export interface IServiceItem {
  title: string
  isCurrent: bool
  onClick: () => void
}

export interface IServiceItemFull {
  id: string | number
}
