import React, { useState } from 'react'
import BackIcon from '../../assets/images/arrow.long.yellow.inline.svg'
import SERVICES from './data'
import ServiceItem from './ServiceItem'
import ServiceItemFull from './ServiceItemFull'
import './Services.scss'

const Services: React.FC = (): JSX.Element => {
  const [currentType, setType] = useState<number>(0)
  const [currentService, setService] = useState<number>(0)
  const [currentScreen, setScreen] = useState<string>('first')

  return (
    <div className={`service-selector-container service-selector-column-${currentScreen}`}>
      <div className="service-selector-column">
        <div className="yellow-btn">Все работы</div>
        {SERVICES.map(({ title }, idx) => (
          <ServiceItem
            title={title}
            key={title}
            isCurrent={currentType === idx}
            onClick={() => {
              setType(idx)
              setService(0)
              setScreen('second')
            }}
          />
        ))}
      </div>
      <div className="service-selector-column">
        <div
          className="service-selector-column-back"
          onClick={() => {
            setScreen('first')
          }}
        >
          <BackIcon />
          <span className="service-selector-column-back-text">Назад</span>
        </div>
        {SERVICES[currentType].children.map(({ title }, idx) => (
          <ServiceItem
            title={title}
            key={title}
            isCurrent={currentService === idx}
            onClick={() => {
              setService(idx)
              setScreen('third')
            }}
          />
        ))}
      </div>
      <div className="service-selector-column">
        <div
          className="service-selector-column-back"
          onClick={() => {
            setScreen('second')
          }}
        >
          <BackIcon />
          <span className="service-selector-column-back-text">Назад</span>
        </div>
        <ServiceItemFull />
      </div>
      <div />
    </div>
  )
}

export default Services
