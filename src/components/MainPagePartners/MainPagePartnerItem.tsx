import React from 'react'
import './MainPagePartnerItem.scss'
import { IMainPagePartnerItem } from './Types'

const MainPagePartnerItem: React.FC<IMainPagePartnerItem> = ({ imageSrc }): JSX.Element => {
  console.log(imageSrc)
  return <div className="partners-item" style={{ backgroundImage: `url(${imageSrc})` }} />
}

export default MainPagePartnerItem
