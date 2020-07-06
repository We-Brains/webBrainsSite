import React from 'react'
import CallIcon from '../../assets/images/call.inline.svg'
import './CallBtn.scss'
import { ICallBtn } from './Types'

const CallBtn: React.FC<ICallBtn> = ({ onClick }): JSX.Element => {
  return (
    <div className="call-btn" onClick={onClick}>
      <CallIcon />
    </div>
  )
}

export default CallBtn
