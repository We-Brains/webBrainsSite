import React from 'react'
import { IFooterSocials } from './Types'

const FooterSocials: React.FC<IFooterSocials> = ({ socials }): JSX.Element => {
  return (
    <div className="footer-socials">
      <h3 className="footer-header">ПОДПИСЫВАЙТЕСЬ НА НАС</h3>
      <ul className="footer-socials-list">
        {socials.map(({ id, title, href, svg }) => (
          <li key={id} className="footer-socials-list-item">
            <a href={href} title={title} dangerouslySetInnerHTML={{ __html: svg }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterSocials
