import React from 'react'
import { IArrow } from './Types.ts'
import ArrowIcon from '../../assets/images/arrow.inline.svg'
import './Arrow.scss'

const Arrow: React.FC<IArrow> = ({ onClick, className = '' }): JSX.Element => {
  return (
    <button className={`carousel-button ${className}`} type="button" onClick={onClick}>
      <ArrowIcon />
    </button>
  )
}

export default Arrow
