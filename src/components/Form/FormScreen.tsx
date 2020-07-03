import React from 'react'
import Form from './Form'
import './FormScreen.scss'

const FormScreen: React.FC = (): JSX.Element => {
  return (
    <div className="default-container form-container">
      <div className="form-headers">
        <h2 className="default-header">Обсудить проект</h2>
        <h4 className="default-header-sub">Мы создадим качественный ресурс на заказ. </h4>
      </div>
      <div className="form-text">
        Мы знаем, как обрести успех бизнеса в сети! разработка веб-сайтов — это то, что нас вдохновляет, ведь мы помогаем другим достигать
        большего!
      </div>
      <Form />
    </div>
  )
}

export default FormScreen
