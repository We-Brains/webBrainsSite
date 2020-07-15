import React from 'react'
import './MainPageBuisnessItem.scss'
import { IBuisnessItem } from './Types'

const MainPageBuisnessItem: React.FC<IBuisnessItem> = React.memo(
  ({ title, content, svg }): JSX.Element => {
    return (
      <div className="main-page-buissness-item">
        <div className="main-page-buissness-item-svg" dangerouslySetInnerHTML={{ __html: svg }} />
        <h4 className="main-page-buissness-item-header">{title}</h4>
        <div className="main-page-buissness-item-text" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    )
  }
)

export default MainPageBuisnessItem
