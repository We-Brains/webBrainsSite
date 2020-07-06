export interface IIDSocial {
  id: string | number
  title: string
  href: string
  svg: string
}

export interface ISocial {
  title: string
  href: string
  svg: string
}

export interface IServiceItemFull {
  title: string
  terms: string
  price: string
  content: string
  svg: string
}

export interface IScrollCallbackArgs {
  activeSection: number
}
