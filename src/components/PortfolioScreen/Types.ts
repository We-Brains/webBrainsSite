import { IImage } from '../MainPagePortfolio/Types'

export interface IPortfolioScreenQuery {
  strapiPortfolioPageScreen: {
    title: string
    subtitle: string
  }
  allStrapiPortfolioTypes: {
    nodes: IPortNodes[]
  }
}

export interface IPortNodes {
  name: string
  id: string | number
  portfolios: IPortfoliosType[]
}

export interface IPortfoliosType {
  id?: string | number
  title: string
  type: string
  link?: string
  image: IImage
  caseImage?: IImage
}
