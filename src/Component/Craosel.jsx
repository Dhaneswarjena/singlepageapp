import React from 'react'

const Craosel = ({imgsrc,text,alt}) => {
  return (
    <div className="secarsousel" style={{marginTop:'5%'}}>
    <img src={imgsrc} alt={alt} style={{width:'68vmax',height:'32vmax'}}/>
    <p style={{color:'#001e5e',fontSize:'2vmax'}}>{text}</p>
  </div>
  )
}

export default Craosel