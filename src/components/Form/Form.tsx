import React, { useState } from 'react'
import CubesSVG from '../../assets/images/cubes.inline.svg'
import './Form.scss'

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form className="form-fields">
      <div className="form-fields-text">Мы создадим качественный ресурс на заказ, который достойно будет представлять вашу фирму. </div>
      <div className="form-fields-wrapper form-fields-input-name">
        <input
          className="form-fields-input "
          type="text"
          placeholder="Введите Ваше имя"
          value={name}
          onChange={({ target: { value } }) => {
            setName(value)
          }}
        />
      </div>
      <div className="form-fields-wrapper form-fields-input-phone">
        <input
          className="form-fields-input form-fields-input-phone"
          type="text"
          placeholder="Введите Ваш Номер телефона"
          value={phone}
          onChange={({ target: { value } }) => {
            setPhone(value)
          }}
        />
      </div>
      <CubesSVG />
      <div className="form-fields-wrapper form-fields-wrapper-button ">
        <input
          className="form-fields-submit"
          type="submit"
          value="ОТПРАВИТЬ ЗАЯВКУ НА ПРОЕКТ"
          onClick={e => {
            e.preventDefault()
          }}
        />
      </div>
    </form>
  )
}

export default Form
