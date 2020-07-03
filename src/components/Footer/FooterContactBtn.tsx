import React from 'react'
import CallSVG from '../../assets/images/call.inline.svg'

const FooterContactBtn: React.FC = (): JSX.Element => {
  return (
    <button className="footer-contact-btn" type="button">
      <div className="footer-contact-btn-svg">
        <CallSVG />
      </div>
      <span className="footer-contact-btn-text">СВЯЗАТЬСЯ С НАМИ</span>
    </button>
  )
}

export default FooterContactBtn
