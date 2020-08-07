export interface IHeader {
  isBlack?: boolean
  currentScreen?: number
  changeScreen?: () => void
}

export interface IMenu {
  isOpen: boolean
  changeScreen?: () => void
}
