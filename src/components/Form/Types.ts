export interface IKeyDown {
  code: string
  key: string
  preventDefault: () => void
  target: {
    value: string
  }
}
