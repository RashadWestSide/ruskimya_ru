import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 1500})
  }, [])

  return (
    <section className='home'>
      <div className='secContainer container'>
        <div className='homeText'>

          <h1 data-aos='fade-up' className='title'>
            РУСЬКИМЯ
          </h1>

          <p data-aos='fade-up' data-aos-duration='2000' className='subTitle'>
            Склад промышленной химии
          </p>

          <button data-aos='fade-up' data-aos-duration='2000' className='btn'>
            <Link to="/products">Перейти к ассортименту</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
