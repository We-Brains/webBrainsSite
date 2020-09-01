import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import MenuIcon from '../../assets/images/menu.inline.svg'
import Logo from '../../assets/images/logo.inline.svg'
import LogoWhite from '../../assets/images/logo.white.inline.svg'

import './Header.scss'
import Menu from './Menu'
import { IHeader } from './Types'

const Header: React.FC<IHeader> = ({ isBlack = false, currentScreen, changeScreen }): JSX.Element => {
  const [isOpen, changeOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
    const body = document.getElementsByTagName('body')[0]
    if (isOpen) body.classList.add('fixed')
    else body.classList.remove('fixed')
  }, [isOpen])

  useEffect(() => {
    changeOpen(false)
  }, [currentScreen])

  return (
    <header className={`header ${isBlack ? 'header-black' : ''}`}>
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <Logo className="header-logo-link-svg-black" />
          <LogoWhite className="header-logo-link-svg-white" />
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-btn" onClick={() => changeOpen(!isOpen)}>
          <MenuIcon className={`${isOpen ? 'menu-btn-cross' : ''}`} />
        </div>
        <Menu isOpen={isOpen} changeScreen={changeScreen} />
      </div>
    </header>
  )
}

export default Header
