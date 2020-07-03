import { IImage } from '../MainPagePortfolio/Types'

export interface IMainPageBuisness {
  strapiBuisnessScreen: {
    title: string
    text: string
    background: IImage
  }
}
/*
export interface IMainPageBuisnessCarousel {
  buisn
}
 */
export interface IIDBuisnessItem {
  id: number | string
  title: string
  content: string
  svg: string
}

export interface IBuisnessItem {
  title: string
  content: string
  svg: string
}
