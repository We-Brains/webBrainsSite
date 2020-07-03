import React from 'react'
import ArrowIcon from '../../assets/images/arrow.long.inline.svg'
import { IServiceItem } from './Types'

const ServiceItem: React.FC<IServiceItem> = ({ title, isCurrent, onClick }): JSX.Element => {
  return (
    <div onClick={onClick} className={`service-selector-item ${isCurrent ? 'service-selector-item-active' : ''}`}>
      {title}
      <ArrowIcon />
    </div>
  )
}

export default ServiceItem
