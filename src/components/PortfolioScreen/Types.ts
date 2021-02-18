import { IImage } from '../MainPagePortfolio/Types'

export interface IPortfolioScreenQuery {
  strapiPortfolioPageScreen: {
    title: string
    subtitle: string
  }
  allStrapiPortfolios: {
    edges: IPortNodes[]
  }
}

export interface IPortNodes {
  node: IPortfoliosType
}

export interface IPortfoliosType {
  id?: string | number
  title: string
  content: string
  firstColor?: string
  secondColor?: string
  link?: string
  image: IImage
  caseImage?: IImage
}
