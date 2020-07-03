import React from 'react'
import './MainPagePartners.scss'
import { graphql, useStaticQuery } from 'gatsby'
import MainPagePartnersCarousel from './MainPagePartnersCarousel'

const PARTNERTS_SCREEN_QUERY = graphql`
  query partnersScreenQuery {
    strapiPartnersScreen {
      title
      text
      background {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      partners {
        id
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
`

const MainPagePartners: React.FC = (): JSX.Element => {
  const {
    strapiPartnersScreen: {
      title,
      text,
      background: {
        childImageSharp: {
          fluid: { src }
        }
      },
      partners
    }
  } = useStaticQuery(PARTNERTS_SCREEN_QUERY)
  return (
    <div className="partners-screen">
      <div className="partners-container" style={{ backgroundImage: `url(${src})` }}>
        <div className="partners-container-shadow" />
        <h2 className="partners-container-header">{title}</h2>
        <h4 className="partners-container-subheader">С кем мы работаем</h4>
        <p className="partners-container-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <MainPagePartnersCarousel partners={partners} />
    </div>
  )
}

export default MainPagePartners
