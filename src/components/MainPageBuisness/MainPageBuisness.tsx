import React from 'react'
import './MainPageBuisness.scss'
import { graphql, useStaticQuery } from 'gatsby'
import MainPageBuisnessCarousel from './MainPageBuisnessCarousel'
import { IMainPageBuisness } from './Types'

const BUSINESS_SCREEN_QUERY = graphql`
  query buissnessQuery {
    strapiBuisnessScreen {
      title
      text
      buissnesses {
        id
        title
        content
        svg
      }
      background {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`

const MainPageBuisness: React.FC = (): JSX.Element => {
  const {
    strapiBuisnessScreen: {
      title,
      text,
      buissnesses,
      background: {
        childImageSharp: {
          fluid: { src }
        }
      }
    }
  }: IMainPageBuisness = useStaticQuery(BUSINESS_SCREEN_QUERY)
  return (
    <div className="main-page-buissness-container">
      <div className="main-page-buissness-bg" style={{ backgroundImage: `url(${src})` }} />
      <div className="main-page-buissness">
        <div className="main-page-buissness-headers">
          <h2 className="default-header">{title}</h2>
          <h4 className="default-header-sub">Создайте качественный продукт вместе с нами</h4>
        </div>
        <div className="main-page-buissness-text" dangerouslySetInnerHTML={{ __html: text }} />
        <div>
          <MainPageBuisnessCarousel buissnesses={buissnesses} />
        </div>
      </div>
    </div>
  )
}

export default MainPageBuisness
