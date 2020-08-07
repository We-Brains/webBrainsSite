import React from 'react'
import './TrustScreen.scss'
import { graphql, useStaticQuery } from 'gatsby'
import TrustCarousel from './TrustCarousel'
import { IPartners } from '../MainPagePartners/Types'
import { ITrustScreenQuery, ITrustScreen } from './Types'

const TRUST_SCREEN_QUERY = graphql`
  query trustSreenQuery {
    strapiTrustScreen {
      title
      subtitile
      text
      partners {
        id
        title
        image {
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

const TrustScreen: React.FC<ITrustScreen> = ({ changeScreen }): JSX.Element => {
  const {
    strapiTrustScreen: { title, subtitile, text, partners }
  }: ITrustScreenQuery = useStaticQuery(TRUST_SCREEN_QUERY)
  return (
    <div className="default-container trust-container">
      <div className="trust-container-bg" />
      <div>
        <h2 className="default-header">{title}</h2>
        <h4 className="default-header-sub">{subtitile}</h4>
      </div>
      <p className="trust-text" dangerouslySetInnerHTML={{ __html: text }} />
      <button className="yellow-btn" type="button" onClick={changeScreen}>
        СТАТЬ КЛИЕНТОМ
      </button>
      <TrustCarousel partners={partners} />
    </div>
  )
}

export default TrustScreen
