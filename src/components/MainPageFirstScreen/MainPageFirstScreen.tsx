import React, { Suspense } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './MainPageFirstScreen.scss'
import { IFirstScreenData, IMainPageFirstScreen } from './Types'
import ServiceCarousel from './ServiceCarousel'

const Background = React.lazy(() => import('./Background'))

const FIRST_SCREEN_QUERY = graphql`
  query firstScreenQuery {
    strapiFirstScreen {
      title
      btnText
      background {
        childImageSharp {
          original {
            src
          }
        }
      }
      services {
        id
        svg
        title
        content
      }
      socials {
        id
        title
        href
        svg
      }
    }
  }
`

const MainPageFirstScreen: React.FC<IMainPageFirstScreen> = ({ toForm }): JSX.Element => {
  const {
    strapiFirstScreen: { title, btnText, services, background, socials }
  }: IFirstScreenData = useStaticQuery(FIRST_SCREEN_QUERY)
  return (
    <>
      {typeof window !== 'undefined' && (
        <Suspense fallback={<div className="bg" />}>
          <Background background={background} />
        </Suspense>
      )}
      <div className="main-page">
        <div className="main-page-content">
          <h1 className="main-page-content-title" dangerouslySetInnerHTML={{ __html: title }} />
          <button type="button" className="main-page-content-button" onClick={toForm}>
            {btnText}
          </button>
          <div className="main-page-content-social">
            {socials.map(({ id, title: linkTitle, href, svg }) => (
              <a
                key={id}
                className="main-page-content-social-link"
                href={href}
                title={linkTitle}
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            ))}
          </div>
        </div>
        <ServiceCarousel services={services} />
      </div>
    </>
  )
}

export default MainPageFirstScreen
