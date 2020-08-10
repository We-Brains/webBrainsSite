import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Socials from '../DefaultComponents/Socials'
import ArrowIcon from '../../assets/images/arrow.long.inline.svg'
// Style
import './PortfolioScreen.scss'
import { IPortfolioScreenQuery } from './Types'

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
  const {
    strapiPortfolioPageScreen: { title, subtitle },
    allStrapiPortfolioTypes: { nodes }
  }: IPortfolioScreenQuery = useStaticQuery(PORTFOLIO_QUERY)

  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="portfolio">
      <div className="portfolio-headers">
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
        {nodes[activeCategory].portfolios.map(({ id, title: portTitle, link, image }) => {
          const {
            childImageSharp: {
              fluid: { src }
            }
          } = image
          const style = {
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%)'
          }
          return (
            <div key={id} className="portfolio-case">
              <p className="portfolio-filter">{nodes[activeCategory].name}</p>
              <h3 className="portfolio-name">{portTitle}</h3>
              <a href={link} target="_blank" rel="noreferrer" className="portfolio-link">
                смотреть кейс
                <ArrowIcon />
              </a>
              <div className="portfolio-preview" style={style} />
            </div>
          )
        })}
      </div>
      <Socials />
      <div className="default-socials-stick" />
    </div>
  )
}

export default PortfolioScreen
