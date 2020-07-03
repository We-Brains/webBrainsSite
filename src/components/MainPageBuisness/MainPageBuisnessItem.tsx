import React from 'react'
import SVG from '../../assets/images/money.inline.svg'
import './MainPageBuisnessItem.scss'

const MainPageBuisnessItem: React.FC = (): JSX.Element => {
  return (
    <div className="main-page-buissness-item">
      <SVG />
      <h4 className="main-page-buissness-item-header">Продажа</h4>
      <div className="main-page-buissness-item-text">Продажа услуг/товаров компании через сайт. Привлечение новых клиентов.</div>
    </div>
  )
}

export default MainPageBuisnessItem
