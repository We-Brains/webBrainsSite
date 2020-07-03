import React from 'react'
import './MainPageServiceScreen.scss'
import Services from '../Services/Services'

const MainPageServiceScreen: React.FC = (): JSX.Element => {
  return (
    <div className="main-page-service-container">
      <div>
        <h2 className="main-page-service-header">Услуги</h2>
        <h3 className="main-page-service-header-sub">Мы делаем проект с Вами, а не для Вас</h3>
      </div>
      <Services />
      <div className="main-page-service-container-btn yellow-btn">ВСЕ РАБОТЫ</div>
    </div>
  )
}

export default MainPageServiceScreen
