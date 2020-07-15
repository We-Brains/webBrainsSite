import React from 'react'
import './MainPagePortfolio.scss'
import { graphql, useStaticQuery } from 'gatsby'
import MainPagePortfolioCarousel from './MainPagePortfolioCarousel'
import { IPortfolioScreenQuery } from './Types'

const PORTFOLIO_SCREEN_QUERY = graphql`
  query portfolioScreenQuery {
    strapiPortfolioScreen {
      title
      subtitle
      btnText
      portfolios {
        id
        title
        content
        image {
          childImageSharp {
            fluid {
              src
              srcWebp
              srcSet
              srcSetWebp
            }
          }
          name
        }
      }
    }
  }
`

const MainPagePortfolio: React.FC = (): JSX.Element => {
  const {
    strapiPortfolioScreen: { title, subtitle, btnText, portfolios }
  }: IPortfolioScreenQuery = useStaticQuery(PORTFOLIO_SCREEN_QUERY)
  return (
    <div className="default-container main-page-portfolio-container">
      <div className="main-page-portfolio-headers">
        <h2 className="default-header">{title}</h2>
        <h3 className="default-header-sub">{subtitle}</h3>
      </div>
      <div className="yellow-btn">{btnText}</div>
      <MainPagePortfolioCarousel portfolios={portfolios} />
    </div>
  )
}

export default MainPagePortfolio
