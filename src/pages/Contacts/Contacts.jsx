import './contacts.css'
import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactImage from '../../Assets/contact1.jpeg'
import { MdPhone, MdEmail, MdLocationOn} from 'react-icons/md'
import { GiRotaryPhone } from 'react-icons/gi'

const Contacts = () => {

  return (
    <div className='contact'>

      <div className="leftSide" style={{backgroundImage: `url(${ContactImage})`}}>
        <div className='contactInfoItem'>
          <h2><MdLocationOn/>Россия, г. Нижний Новгород, Восточный проезд, 11 лит Ч</h2>
          <p><MdPhone/>+79307001144</p>
          <p><GiRotaryPhone/>+7(831)281-19-65</p>
          <p><MdEmail/>ruskimya@gmail.com</p>
          <p><MdEmail/>ruskimya@inbox.ru</p>
        </div>
      </div>

      <div className="rightSide">
        <h1>Контакты</h1>
        <ContactForm />
      </div>

    </div>
  )
}

export default Contacts
