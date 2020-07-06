import { IImage } from '../MainPagePortfolio/Types'
import { IIDSocial } from '../CommonTypes'

export interface IFirstScreenData {
  strapiFirstScreen: {
    title: string
    btnText: string
    services: IService[]
    socials: IIDSocial[]
    background: IImage
  }
}

export interface IMainPageFirstScreen {
  toForm: () => void
}

export interface IServiceCarousel {
  services: IService[]
}

export interface IService {
  id: string | number
  title: string
  svg: string
  content: string
}

export interface IServiceItem {
  title: string
  svg: string
  content: string
}

export interface IBackground {
  background: IImage
}
