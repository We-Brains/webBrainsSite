import React from 'react'

const FooterContacts: React.FC = (): JSX.Element => {
  return (
    <div className="footer-contacts">
      <h3 className="footer-header">Контакты</h3>
      <ul className="footer-contacts-list">
        <li className="footer-contacts-list-item footer-contacts-list-item-phone">
          <a href="tel:+380 (96) 977 64 62">+380 (96) 977 64 62</a>
        </li>
        <li className="footer-contacts-list-item footer-contacts-list-item-email">
          <a href="mailto:team@thecube.studio">team@thecube.studio</a>
        </li>
        <li className="footer-contacts-list-item footer-contacts-list-item-address">г.Киев, Коломийский переулок 20</li>
      </ul>
    </div>
  )
}

export default FooterContacts
