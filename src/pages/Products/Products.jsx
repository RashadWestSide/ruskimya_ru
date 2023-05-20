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
      title: 'Линейная алкилбензолсульфокислота (LABSA) в бочках по 216 кг.',
      desc: `Сфера применения:
      Поверхностно-активное вещество, используемое в производстве
      синтетических моющих средств.
      Производство Иран. Высшего качества.
      Оптовикам возможны индивидуальные скидки. Отгрузка со склада в
      Нижнем Новгороде.`,
      priceRoznica: 'Розничная цена: 155000 руб. с НДС',
      //priceOpt: 'Оптовая цена (от одной тонны): 79 руб/кг (с НДС)'
    },
    {
      id: 2,
      productImg: monoetilen,
      title: 'Моноэтиленгликоль 40л',
      desc: 'Предназначен для использования в производствах синтетических волокон, растворителей, низкозамерзающих и гидравлических жидкостей, для синтеза ацеталей и фруктона',
      priceRoznica: 'Розничная цена: по запросу',
      //priceOpt: 'Оптовая цена (от одной тонны): 79 руб/кг (с НДС)'
    },
    {
      id: 3,
      productImg: causticsoda,
      title: 'Сода каустическая (натр едкий) чешуированная в мешках по 25 кг.',
      desc: `Имеет широкое применение: Соду каустическую используют для
      бытовых нужд, а также в разных отраслях промышленности.
      В быту используется для растворения жира, волос, остатков пищи,
      отстирывания пятен мазута с грубой ткани, дезинфекции.
      Идеальный материал для очистки выгребных ям, удаления засоров в
      любых трубопроводах и канализационных системах.
      Продаем оптом и в розницу от одного мешка.
      Есть доставка.`,
      priceRoznica: 'Розничная цена: 2600 руб/мешок',
      priceOpt: 'Оптовая цена (от одной тонны): 77 руб/кг (с НДС)'
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
            Products.map(({id, productImg, title, desc, priceRoznica, priceOpt})=>{
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
                      <p>{priceRoznica}</p>
                      <p>{priceOpt}</p>
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
