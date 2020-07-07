import React from 'react'
import { Link } from 'gatsby'
import MenuIcon from '../../assets/images/menu.inline.svg'
import Logo from '../../assets/images/logo.inline.svg'
import './Header.scss'
import Menu from './Menu'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <Logo />
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-btn">
          <MenuIcon />
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header
