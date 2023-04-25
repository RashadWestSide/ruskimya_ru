import React from 'react'
import './products.css'

import alcil from '../../Assets/алкилбензолсульфонат1.png'
import monoetilen from '../../Assets/моноэтиленгликоль1.png'
import causticsoda from '../../Assets/сода_каустическая.png'

const Products = () => {

  const Products = [
    {
      id: 1,
      productImg: alcil,
      title: 'Линейный алкилбензолсульфонат',
      desc: 'Сульфонол (линейный алкилбензолсульфонат натрия) представляет собой вязкую бесцветную или светло - желтого цвета жидкость, используется в качестве поверхностно - активного вещества в производстве синтетических моющих средств и других товаров бытовой химии.',
      price: '1001 руб./шт'
    },
    {
      id: 2,
      productImg: monoetilen,
      title: 'Моноэтиленгликоль 40л',
      desc: 'Предназначен для использования в производствах синтетических волокон, растворителей, низкозамерзающих и гидравлических жидкостей, для синтеза ацеталей и фруктона',
      price: '1000 руб./шт'
    },
    {
      id: 3,
      productImg: causticsoda,
      title: 'Сода каустическая',
      desc: 'а жидкость, используется в качестве поверхностно - активного вещества в производстве синтетических моющих средств и других товаров бытовой химии.',
      price: '1000 руб./уп'
    },

  ]

  return (
    <section className='products container section'>
      <div className="secContainer">

        <div className="secHeader flex">

          <div className="textDiv">
            <h2 className='secTitle'>
              Наш ассортимент
            </h2>
            <div className="secHelp">
              <p>
                Возникли вопросы? Или готовы оформить заказ? 
              </p>
              <p>
                Пожалуйста, перейдите в раздел Контакты и сообщите нам. Мы обязательно с Вами свяжемся.
              </p>
            </div>
          </div>

        </div>

        <div className='mainContainer grid'>
          {
            Products.map(({id, productImg, title, desc, price})=>{
              return(
                <div className='singleContainer grid'>
                  <div className="imgDiv">

                    <img src={productImg} alt={title} />

                    <div className="overlayInfo">
                      <p>{desc}</p>
                    </div>
                  </div>

                  <div className="containerFooter">
                    <div className="containerText">
                      <h3>{title}</h3>
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
            )})}
        </div>

      </div>
    </section>
  )
}

export default Products
