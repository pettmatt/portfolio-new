import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SwiperPlugin({ content }) {
  return (
    <Swiper
      breakpoints={{
        1250: {
          slidesPerView: 6
        },
        700: {
          slidesPerView: 5
        },
        0: {
          slidesPerView: 3
        }
      }}
      modules={[]}
      slidesPerView={6}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}>
      {
        content.map((item) => (
          <SwiperSlide key={ item.id }>
            <div className='grid-box'>
              { item.attributes.deviconClass ?
                  item.attributes.deviconClass.includes('-') ? 
                    <i className={'devicon-' + item.attributes.deviconClass + ' colored'}></i> :
                    <i className={'devicon-' + item.attributes.deviconClass + '-plain colored'}></i> :
                    <i className={'no-icon colored'}>{'</>'}</i>
              }
              <p>{item.attributes.name}</p>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}