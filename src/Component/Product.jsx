import React from 'react'
import '../Styles/Product.scss';
import Productsec from './Productsec';
import dbjson from './dbjson';
const Product = () => {
  return (
    <>
    <section>
      <div className='product'>
         <div className='producttext'><h1>Product</h1></div>
         <div className='p1'>
         {
          dbjson.map((item,i)=>(
            <Productsec key={i} imgsrc={item.imgsrc} text={item.text} description={item.description} alt={item.alt}/>
          ))
         }
         
         </div>
      </div>
    </section>
    </>
  )
}

export default Product