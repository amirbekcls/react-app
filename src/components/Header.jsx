import React from 'react'
import img1 from  '../images/cw1MAVs4wV8.png'
const Header = () => {
  let arr = ["< >"];
  return (
    
    <header>
      <div className='container'>
          <div className='logo'>
            <h1 className='logo-h1'>FUFU</h1>
            <p className="logo-p">how to eat</p>
          </div>
          <div className="hero">
            <div className="content">
              <div className="title">
              <p className="center-title">LEMON</p>
              </div>
            </div>
          </div>
          <div className="hero-bottom-right">
            <img className='img-1' src={img1} alt="" />
            <h1 className='l-r'>{arr}</h1>
          </div>
         
      </div>
    </header>
  
  )
}

export default Header