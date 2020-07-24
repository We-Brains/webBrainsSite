import React from 'react'
import './MainPagePartnerItem.scss'
import { IMainPagePartnerItem } from './Types'

const MainPagePartnerItem: React.FC<IMainPagePartnerItem> = ({ srcSet, srcSetWebp }): JSX.Element => {
  return (
    <picture className="partners-item">
      <source srcSet={srcSetWebp} type="image/webp" />
      <img srcSet={srcSet} alt="" />
    </picture>
  )
}

export default MainPagePartnerItem
