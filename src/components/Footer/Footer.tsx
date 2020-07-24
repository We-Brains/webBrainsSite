import React, { Suspense } from 'react'
import './Footer.scss'
import { graphql, useStaticQuery } from 'gatsby'
import FooterContacts from './FooterContacts'
import FooterContactBtn from './FooterContactBtn'
import FooterSocials from './FooterSocials'
import Form from '../Form/Form'
import { IFooterQuery, IFooter } from './Types'
import LogoSVG from '../../assets/images/logo.white.inline.svg'

const FooterMap = React.lazy(() => import('./FooterMap'))

const FOOTER_QUERY = graphql`
  query footerQuery {
    strapiFooterScreen {
      copyright
      socials {
        id
        title
        href
        svg
      }
      contacts {
        id
        title
        additionalClass
        href
      }
    }
  }
`

const Footer: React.FC<IFooter> = ({ isSingle = false }): JSX.Element => {
  const {
    strapiFooterScreen: { copyright, socials, contacts }
  }: IFooterQuery = useStaticQuery(FOOTER_QUERY)
  return (
    <footer className={`footer ${isSingle ? 'footer-single' : ''}`}>
      <div className="default-container footer-container">
        {!isSingle && (
          <div className="footer-svg">
            <LogoSVG />
          </div>
        )}
        <div className="footer-grid">
          {isSingle && (
            <div className="footer-headers">
              <h1 className="default-header">Контакты</h1>
              <h3 className="default-header-sub">свяжитесь с нами любым удобным способом</h3>
            </div>
          )}
          <FooterContacts contacts={contacts} />
          <div className="footer-column-2">
            <FooterContactBtn />
          </div>
          <FooterSocials socials={socials} />
          {!isSingle && <div className="footer-copyright">{copyright}</div>}
          <div className="footer-column-3">
            <Form />
          </div>
        </div>
      </div>
      {typeof window !== 'undefined' && window.innerWidth >= 768 && (
        <Suspense fallback={<div />}>
          <FooterMap />
        </Suspense>
      )}
    </footer>
  )
}

export default Footer
