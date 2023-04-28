import './contacts.css'
import React from 'react'
import ContactForm from '../../Components/ContactForm/ContactForm'
import ContactImage from '../../Assets/contact1.jpeg'
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md'

const Contacts = () => {

  return (
    <div className='contact'>

      <div className="leftSide" style={{backgroundImage: `url(${ContactImage})`}}>
        <div className='contactInfoItem'>
          <p><MdPhone/>+71234567890</p>
          <p><MdEmail/>ruskimya@gmail.com</p>
          <p><MdLocationOn/>Россия, г. Нижний Новгород</p>
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
