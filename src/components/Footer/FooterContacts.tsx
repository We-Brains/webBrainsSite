import React from 'react'
import { IFooterContacts } from './Types'

const FooterContacts: React.FC<IFooterContacts> = ({ contacts }): JSX.Element => {
  return (
    <div className="footer-contacts">
      <h3 className="footer-header">Контакты</h3>
      <ul className="footer-contacts-list">
        {contacts.map(({ id, title, additionalClass, href }) => (
          <li key={id} className={`footer-contacts-list-item ${additionalClass && `footer-contacts-list-item-${additionalClass}`}`}>
            <a title={title} href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterContacts
