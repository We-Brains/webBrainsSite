import { IImage } from '../MainPagePortfolio/Types'

export interface IFirstScreenData {
  title: string
  btnText: string
  services: IService[]
  background: IImage
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
