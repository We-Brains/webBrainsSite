import React from 'react'
import './MainPagePortfolio.scss'
import { graphql, Link, useStaticQuery } from 'gatsby'
import MainPagePortfolioCarousel from './MainPagePortfolioCarousel'
import { IPortfolioScreenQuery } from './Types'

const PORTFOLIO_SCREEN_QUERY = graphql`
  query portfolioScreenQuery {
    strapiPortfolioScreen {
      title
      subtitle
      btnText
      portfolios {
        link
        id
        title
        mainPageBg
        logo {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`

const MainPagePortfolio: React.FC = (): JSX.Element => {
  const {
    strapiPortfolioScreen: { title, subtitle, btnText, portfolios }
  }: IPortfolioScreenQuery = useStaticQuery(PORTFOLIO_SCREEN_QUERY)
  console.log(portfolios)

  return (
    <div className="main-page-portfolio-container">
      <div className="main-page-portfolio-headers  default-container">
        <div>
          <h2 className="default-header">{title}</h2>
          <h3 className="default-header-sub">{subtitle}</h3>
        </div>
      </div>
      <Link className="yellow-btn" to="/portfolio/">
        {btnText}
      </Link>
      <MainPagePortfolioCarousel portfolios={portfolios} />
    </div>
  )
}

export default MainPagePortfolio
