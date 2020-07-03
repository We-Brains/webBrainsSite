import React from 'react'
import Icon from '../../assets/images/buissness.second.inline.svg'
import './ServiceItemFull.scss'

const ServiceItemFull: React.FC = (): JSX.Element => {
  return (
    <div className="service-full">
      <Icon />
      <h3 className="service-full-title">Корпоративный сайт.</h3>
      <span className="service-full-info">от 3 недель</span>
      <span className="service-full-info">от 2 100 USD</span>
      <div className="service-full-text">
        Цель Корпоративного сайта - привлечь новых клиентов или партнеров, развить бизнес путем раскрытия преимуществ компании, подробного
        описания ее деятельности, услуг или товаров.
      </div>
      <div className="service-full-buttons">
        <div className="service-full-buttons-item yellow-btn">ЗАКАЗАТЬ САЙТ</div>
        <div className="service-full-buttons-item service-full-buttons-item-more">Подробнее</div>
      </div>
    </div>
  )
}

export default ServiceItemFull
