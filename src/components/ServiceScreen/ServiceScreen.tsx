import React from 'react'
import Services from '../Services/Services'
import './ServiceScreen.scss'
import Socials from '../DefaultComponents/Socials'

const ServiceScreen: React.FC = (): JSX.Element => {
  return (
    <div className="default-container service-screen">
      <div className="service-screen-headers">
        <h2 className="default-header">Услуги.</h2>
        <h4 className="default-header-sub">Мы делаем проект с Вами, а не для Вас</h4>
      </div>
      <Socials />
      <Services isMain={false} />
    </div>
  )
}

export default ServiceScreen
