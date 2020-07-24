import React from 'react'
import './ServiceItem.scss'
import { IServiceItem } from './Types'

const ServiceItem: React.FC<IServiceItem> = React.memo(
  ({ title, svg, content, onClick }): JSX.Element => {
    return (
      <div className="service-item" onClick={onClick}>
        <div className="service-item-svg" dangerouslySetInnerHTML={{ __html: svg }} />
        <h3 className="service-item-header">{title}</h3>
        <p className="service-item-text">{content}</p>
      </div>
    )
  }
)

export default ServiceItem
