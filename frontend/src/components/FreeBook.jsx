import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx';

function FreeBook() {
    const filterData = list.filter((data) => 
        data.category ==="Free"
    )
    // console.log(filterData)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <h1 className='font-bold text-xl pb-2'>Free Books</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis qui ipsam odit maxime! Earum, rem quibusdam. Adipisci, eaque?</p>
      <Slider {...settings} className='mt-5'>
        {filterData.map((item) => {
          return  <Cards item={item} key={item.id}/>
        })}
      </Slider>
    </div>
  )
}

export default FreeBook
