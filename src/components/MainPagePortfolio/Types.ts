export interface IPortfolioScreenQuery {
  strapiPortfolioScreen: {
    title: string
    subtitle: string
    btnText: string
    portfolios: IPortfolio[]
  }
}
export interface IPortfolio {
  id: string
  className?: string
  title: string
  type?: string
  bg?: string
  link?: string
  logo?: IImage
  logoSvg?: string
  image: IImage
  caseImage: IImage
  onHover: () => void
}

export interface IPortfolioCarousel {
  portfolios: IPortfolio[]
}

export interface IPortfolioSingle {
  className?: string
  title: string
  type?: string
  bg?: string
  link?: string
  logo?: IImage
  logoSvg?: string
  image: IImage
  caseImage: IImage
  onHover: () => void
}
export interface IImage {
  childImageSharp: {
    fluid?: {
      src?: string
      srcWebp?: string
      srcSetWebp?: string
      srcSet?: string
    }
    original?: {
      src: string
    }
  }
  name?: string
}

export interface IMainPagePortfolioItemFull {
  link?: string
  changeShowCase: (arg0: boolean) => void
  caseImage: IImage
}
