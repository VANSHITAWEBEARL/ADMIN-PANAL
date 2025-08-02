import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo7.png'; // Replace with your logo path

const Productheader2 = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Beauty Organic" className="h-14 w-auto mr-2" />
        </div>
        {/* Menu */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-12">
            <li>
              <Link to="/" className="font-bold text-[#9bb23a] hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>HOME</Link>
            </li>
            <li>
              <Link to="/shop" className="font-bold text-black hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>SHOP</Link>
            </li>
            <li>
              <Link to="/blog" className="font-bold text-black hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>BLOG</Link>
            </li>
            <li>
              <Link to="/pages" className="font-bold text-black hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>PAGES</Link>
            </li>
            <li>
              <Link to="/portfolios" className="font-bold text-black hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>PORTFOLIOS</Link>
            </li>
            <li>
              <Link to="/contact" className="font-bold text-black hover:text-[#9bb23a] text-lg" style={{fontFamily: 'Playfair Display'}}>CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Productheader2
