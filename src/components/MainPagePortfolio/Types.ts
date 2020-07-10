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
  title: string
  content: string
  image: IImage
}

export interface IPortfolioCarousel {
  portfolios: IPortfolio[]
}

export interface IPortfolioSingle {
  className?: string
  title: string
  content: string
  image: IImage
}
export interface IImage {
  childImageSharp: {
    fluid: {
      src: string
    }
  }
  name?: string
}
