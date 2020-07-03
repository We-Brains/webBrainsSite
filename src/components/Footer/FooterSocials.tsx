import React from 'react'
import TelegramIcon from '../../assets/images/telegram.inline.svg'

const FooterSocials: React.FC = (): JSX.Element => {
  return (
    <div className="footer-socials">
      <h3 className="footer-header">ПОДПИСЫВАЙТЕСЬ НА НАС</h3>
      <ul className="footer-socials-list">
        <li className="footer-socials-list-item">
          <a href="https://web.telegram.org/">
            <TelegramIcon />
          </a>
        </li>
        <li className="footer-socials-list-item">
          <a href="https://web.telegram.org/">
            <TelegramIcon />
          </a>
        </li>
        <li className="footer-socials-list-item">
          <a href="https://web.telegram.org/">
            <TelegramIcon />
          </a>
        </li>
        <li className="footer-socials-list-item">
          <a href="https://web.telegram.org/">
            <TelegramIcon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FooterSocials
