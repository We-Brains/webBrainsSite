import { IImage } from '../MainPagePortfolio/Types'

export interface IMainPagePartnersQuery {
  title: string
  text: string
  background: IImage
  partners: IPartners[]
}

export interface IMainPagePartnersCarousel {
  partners: IPartners[]
}

export interface IPartners {
  id: string | number
  title?: string
  image: IImage
}

export interface IMainPagePartnerItem {
  srcSet: string
  srcSetWebp: string
}
