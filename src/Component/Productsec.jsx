import React from 'react'
import '../Styles/Productsec.scss';
const Productsec = ({imgsrc,text,description,alt}) => {
  return (
    <div className='prodsec'>
      <img src={imgsrc} alt={alt} />
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Productsec;