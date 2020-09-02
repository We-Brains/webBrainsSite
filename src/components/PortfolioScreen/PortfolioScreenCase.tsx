import React from 'react'

import ArrowIcon from '../../assets/images/arrow.long.inline.svg'
import { IPortfoliosType } from './Types'

const PortfolioScreenCase: React.FC<IPortfoliosType> = React.memo(
  ({ title, type, link, image }): JSX.Element => {
    const {
      childImageSharp: {
        fluid: { src }
      }
    } = image

    return (
      <div className="portfolio-screen-case">
        <p className="portfolio-filter">{type}</p>
        <h3 className="portfolio-name">{title}</h3>
        <a href={link} target="_blank" rel="noreferrer" className="portfolio-link">
          смотреть кейс
          <ArrowIcon />
        </a>
        <div className="portfolio-preview" style={{ backgroundImage: `url(${src})` }} />
      </div>
    )
  }
)

export default PortfolioScreenCase
