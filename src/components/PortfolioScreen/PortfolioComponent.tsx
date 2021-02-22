import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
// Types
import { IPortfolioScreenQuery } from './Types'
// Styles
import './PortfolioScreen.scss'
import PortfolioItem from './PortfolioItem'
import Socials from '../DefaultComponents/Socials'

const PORTFOLIO_QUERY = graphql`
  query myQueryAndMyQuery {
    strapiPortfolioPageScreen {
      title
      subtitle
    }
    allStrapiPortfolios(sort: { fields: order }) {
      edges {
        node {
          id
          content
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          firstColor
          title
          secondColor
          link
          caseImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const PortfolioComponent = () => {
  const {
    strapiPortfolioPageScreen: { title, subtitle },
    allStrapiPortfolios: { edges }
  }: IPortfolioScreenQuery = useStaticQuery(PORTFOLIO_QUERY)

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h2 className="default-header">{title}</h2>
        <h4 className="default-header-sub">{subtitle}</h4>
      </div>
      <div className="portfolio-items">
        {edges.map(({ node }) => (
          <PortfolioItem node={node} />
        ))}
      </div>
      <Socials />
      <div className="default-socials-stick" />
    </div>
  )
}

export default PortfolioComponent
