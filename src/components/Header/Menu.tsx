import React from 'react'
import { Link } from 'gatsby'
import './Menu.scss'

const LINKS = [{ title: 'Главная', ref: '/' }]

const Menu: React.FC = (): JSX.Element => {
  return (
    <div className="menu">
      {LINKS.map(({ title, ref }) => (
        <Link key={title} to={ref} activeClassName="current" className="menu-item">
          {title}
        </Link>
      ))}
    </div>
  )
}

export default Menu
