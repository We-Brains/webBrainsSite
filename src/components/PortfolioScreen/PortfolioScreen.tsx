import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Socials from '../DefaultComponents/Socials'
// Style
import './PortfolioScreen.scss'
import { IPortfolioScreenQuery } from './Types'
import PortfolioScreenCase from './PortfolioScreenCase'

const PORTFOLIO_QUERY = graphql`
  query MyQuery {
    strapiPortfolioPageScreen {
      title
      subtitle
    }
    allStrapiPortfolioTypes {
      nodes {
        name
        id
        portfolios {
          id
          title
          type
          link
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`

const PortfolioScreen: React.FC = (): JSX.Element => {
  // const {
  //   strapiPortfolioPageScreen: { title, subtitle },
  //   allStrapiPortfolioTypes: { nodes }
  // }: IPortfolioScreenQuery = useStaticQuery(PORTFOLIO_QUERY)

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="portfolio">
      <h1>Hello</h1>
      {/* <div className="portfolio-headers">
        <h2 className="default-header">{title}</h2>
        <h4 className="default-header-sub">{subtitle}</h4>
      </div>
      <div className="portfolio-categories">
        {nodes.map(({ name, id }, idx: number) => {
          return (
            <div
              onClick={() => setActiveCategory(idx)}
              className={`portfolio-category ${activeCategory === idx ? 'portfolio-category-active' : null}`}
              key={id}
            >
              {name}
            </div>
          )
        })}
      </div>

      <div className="portfolio-cases">
        {nodes[activeCategory].portfolios.map(({ id, title: portTitle, type, link, image }) => {
          return <PortfolioScreenCase key={id} title={portTitle} type={type} link={link} image={image} />
        })} */}
      {/* </div> */}
      <Socials />
      <div className="default-socials-stick" />
    </div>
  )
}

export default PortfolioScreen
