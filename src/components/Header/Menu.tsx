import React from 'react'
import { Link } from 'gatsby'
import './Menu.scss'
import { IMenu } from './Types'
import Socials from '../DefaultComponents/Socials'
import CallSVG from '../../assets/images/call.inline.svg'

const LINKS = [
  { title: 'Главная', ref: '/' },
  { title: 'О нас', ref: '/about/' },
  { title: 'Услуги', ref: '/services/' },
  { title: 'Контакты', ref: '/contacts/' }
]

const Menu: React.FC<IMenu> = ({ isOpen, changeScreen }): JSX.Element => {
  return (
    <div className={`menu ${isOpen ? 'menu-open' : ''}`}>
      {LINKS.map(({ title, ref }) => (
        <Link key={title} to={ref} activeClassName="current" className="menu-item">
          {title}
        </Link>
      ))}
      <button className="menu-contact-btn" type="button" onClick={changeScreen}>
        <div className="menu-contact-btn-svg">
          <CallSVG />
        </div>
        <span className="menu-contact-btn-text">СВЯЗАТЬСЯ С НАМИ</span>
      </button>
      <div className="menu-socials-container">
        <h5 className="menu-socials-title">ПОДПИСЫВАЙТЕСЬ НА НАС</h5>
        <Socials className="menu-socials" />
      </div>
    </div>
  )
}

export default Menu
