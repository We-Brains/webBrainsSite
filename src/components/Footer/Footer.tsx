import React, { Suspense } from 'react'
import './Footer.scss'
import FooterContacts from './FooterContacts'
import FooterContactBtn from './FooterContactBtn'
import FooterSocials from './FooterSocials'
import Form from '../Form/Form'

const FooterMap = React.lazy(() => import('./FooterMap.tsx'))

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="default-container footer-container">
        <div className="footer-logo" />
        <div className="footer-grid">
          <FooterContacts />
          <div className="footer-column-2">
            <FooterContactBtn />
          </div>
          <FooterSocials />
          <div className="footer-copyright">© Copyright - Все права защищены 2020. THECUBESTUDIO</div>
          <div className="footer-column-3">
            <Form />
          </div>
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
