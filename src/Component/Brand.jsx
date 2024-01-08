import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { dbjson1 } from './dbjson';
import Craosel from './Craosel';
import '../Styles/Brand.scss'
const Brand = () => {
  return (
    <>
    <div className='carousel'>
<Carousel
autoPlay
showArrows={false}
showStatus={false}
showThumbs={false}
interval={2000}
showIndicators={false}
infiniteLoop
>
  {
    dbjson1.map((item,i)=>(
      <Craosel key={i} imgsrc={item.imgsrc} text={item.text} alt={item.alt}/>
    ))
  }
</Carousel>
    </div>
    </>
  )
}

export default Brand