import React, { Suspense } from 'react'
import './Footer.scss'
import { graphql, useStaticQuery } from 'gatsby'
import FooterContacts from './FooterContacts'
import FooterContactBtn from './FooterContactBtn'
import FooterSocials from './FooterSocials'
import Form from '../Form/Form'
import { IFooterQuery } from './Types'

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

const Footer: React.FC = (): JSX.Element => {
  const {
    strapiFooterScreen: { copyright, socials, contacts }
  }: IFooterQuery = useStaticQuery(FOOTER_QUERY)
  return (
    <footer className="footer">
      <div className="default-container footer-container">
        <div className="footer-logo" />
        <div className="footer-grid">
          <FooterContacts contacts={contacts} />
          <div className="footer-column-2">
            <FooterContactBtn />
          </div>
          <FooterSocials socials={socials} />
          <div className="footer-copyright">{copyright}</div>
          {typeof window !== 'undefined' && window.innerWidth >= 1366 && (
            <div className="footer-column-3">
              <Form />
            </div>
          )}
        </div>
      </div>
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <Suspense fallback={<div />}>
          <FooterMap />
        </Suspense>
      )}
    </footer>
  )
}

export default Footer
