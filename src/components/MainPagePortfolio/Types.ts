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

export interface IPortfolioSingle {
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
