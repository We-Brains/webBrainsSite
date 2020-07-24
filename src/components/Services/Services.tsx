import React, { useState, useContext, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackIcon from '../../assets/images/arrow.long.yellow.inline.svg'
import ServiceItem from './ServiceItem'
import ServiceItemFull from './ServiceItemFull'
import './Services.scss'
import { IServices, IServicesQuery } from './Types'
import serviceContext from './ServiceContext'

const SERVICES_QUERY = graphql`
  query servicesQuery {
    allStrapiOfferTypes {
      offerTypes: nodes {
        id
        title
        offers {
          id
          title
          terms
          price
          content
          svg
        }
      }
    }
  }
`

const Services: React.FC<IServices> = ({ isMain = true }): JSX.Element => {
  const {
    allStrapiOfferTypes: { offerTypes }
  }: IServicesQuery = useStaticQuery(SERVICES_QUERY)
  const [currentType, setType] = useState<number>(0)
  const [currentService, setService] = useState<number>(0)
  const [currentScreen, setScreen] = useState<string>('first')
  const { currentService: contextService } = useContext(serviceContext)
  useEffect(() => {
    if (typeof contextService !== 'undefined') {
      setType(contextService)
      setScreen('second')
      setService(0)
    } else setType(0)
  }, [contextService])

  return (
    <div className={`service-selector-container service-selector-column-${currentScreen}`}>
      <div className="service-selector-column">
        {isMain ? (
          <div className="yellow-btn">Все работы</div>
        ) : (
          <h4 className="service-selector-column-header">Что мы можем Вам предложить?</h4>
        )}
        {offerTypes.map(({ id, title }, idx) => (
          <ServiceItem
            title={title}
            key={id}
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
        {offerTypes[currentType].offers.map(({ title }, idx) => (
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
        {typeof offerTypes[currentType].offers[currentService] !== 'undefined' && (
          <ServiceItemFull
            title={offerTypes[currentType].offers[currentService].title}
            terms={offerTypes[currentType].offers[currentService].terms}
            price={offerTypes[currentType].offers[currentService].price}
            content={offerTypes[currentType].offers[currentService].content}
            svg={offerTypes[currentType].offers[currentService].svg}
          />
        )}
      </div>
      <div />
    </div>
  )
}

export default Services
