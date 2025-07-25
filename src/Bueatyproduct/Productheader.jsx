import React from 'react'
import logo from '../assets/logo-h9.png';
import Maincart from './Maincart';

const Productheader = () => {
  return (
    <div> 
      <Maincart />
      <div className='flex flex-row justify-around items-center'>
          
        <div className="relative inline-block">
          <i className="fa-solid fa-basket-shopping text-xl"></i>
          <span className="absolute -top-3  -right-2 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center !font-normal !text-sm   z-10">0</span>
        </div>
   <div className='flex pl-25  '>
    <ul className='flex flex-row justify-between items-center gap-5'>
      <li style={{ fontFamily: 'Playfair Display' }}>HOME</li>
      <li style={{ fontFamily: 'Playfair Display' }}>SHOP</li>
      <li style={{ fontFamily: 'Playfair Display' }}>BLOG</li>
      <img src={logo} alt="" className="w-16 h-16 sm:w-20 sm:h-12 md:w-40 md:h-25 object-contain" />
      <li style={{ fontFamily: 'Playfair Display' }}>PAGES</li>
      <li style={{ fontFamily: 'Playfair Display' }}>PORTFOLIOS</li>
      <li style={{ fontFamily: 'Playfair Display' }}>ELEMENTS</li>
    </ul>
     
   </div>
   <div className='flex flex-row justify-between items-center gap-4'> 
  <i className="fa-solid fa-magnifying-glass"></i>
   <i className="fa-solid fa-bars"></i>
   </div>

</div>

  </div>
  )
}

export default Productheader