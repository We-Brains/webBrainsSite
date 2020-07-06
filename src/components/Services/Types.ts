export interface IServiceItem {
  title: string
  isCurrent: boolean
  onClick: () => void
}

export interface IServiceItemFull {
  id: string | number
}

export interface IServices {
  allStrapiOfferTypes: { offerTypes: IOfferType[] }
}

export interface IOfferType {
  id: number | string
  title: string
  offers: IOffer[]
}

export interface IServiceContext {
  toForm: () => void
}

export interface IOffer {
  id: number | string
  title: string
  price: string
  terms: string
  content: string
  svg: string
}
