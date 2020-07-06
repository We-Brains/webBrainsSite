import React, { useContext } from 'react'
import './ServiceItemFull.scss'
import serviceContext from './ServiceContext'
import { IServiceContext } from './Types'
import { IServiceItemFull } from '../CommonTypes'

const ServiceItemFull: React.FC<IServiceItemFull> = ({ title, terms, price, content, svg }): JSX.Element => {
  const { toForm }: IServiceContext = useContext(serviceContext)

  return (
    <div className="service-full">
      <div className="service-full-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      <h3 className="service-full-title">{title}</h3>
      <span className="service-full-info">{terms}</span>
      <span className="service-full-info">{price}</span>
      <div className="service-full-text">{content}</div>
      <div className="service-full-buttons">
        <div className="service-full-buttons-item yellow-btn" onClick={toForm}>
          ЗАКАЗАТЬ САЙТ
        </div>
        <div className="service-full-buttons-item service-full-buttons-item-more">Подробнее</div>
      </div>
    </div>
  )
}

export default ServiceItemFull
