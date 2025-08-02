import React, { useState } from 'react'
import Productheader2 from './Productheader2'
import Footer1 from './Footer1'
import bg1 from '../assets/slider12.jpg'
import bg2 from '../assets/slider131.jpg'
import bg3 from '../assets/slider141.jpg'
import flower2 from '../assets/bgspan-h9.png'
import card1 from '../assets/8-2.jpg'
import card2 from '../assets/7-2.jpg'
import card3 from '../assets/6-4.jpg' 
import card4 from '../assets/1-4.jpg'

const sliderImages = [
  bg1,
  bg2,
  bg3
]

const Bueatyorganic = () => {
  const [current, setCurrent] = useState(0)
  const total = sliderImages.length

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1)
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1)

  return (
    <div>
      <Productheader2 />

      {/* Main Section */}
      <main className="bg-white">
        {/* Top Banners and Slider */}
        <section className="flex flex-col justify-between md:flex-row gap-4 py-8">
          {/* Left Banner */}
          <div className="flex">
            <img
              src="https://ordo.themeftc.com/wp-content/uploads/2020/10/banner1-2.jpg"
              alt="Banner 1"
              className="w-full max-w-xs object-cover"
            />
          </div>
          {/* Slider */}
          <div className="flex relative justify-center items-center">
            <button
              onClick={prevSlide}
              className="absolute left-2 z-40 bg-gray-700 opacity-10 !rounded-full p-2 hover:bg-gray-500 shadow"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img
              src={sliderImages[current]}
              alt={`Slider ${current + 1}`}
              className=" w-full object-cover rounded"
            />
            <button
              onClick={nextSlide}
              className="absolute right-2 z-40 bg-gray-700 opacity-10 !rounded-full p-2 hover:bg-gray-500 shadow"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Right Banner */}
          <div className="flex">
            <img
              src="https://ordo.themeftc.com/wp-content/uploads/2020/10/banner2-2.jpg"
              alt="Banner 2"
              className=" w-full  object-cover"
            />
          </div>
        </section>

        {/* Section Title */}
        <section className="max-w-7xl mx-auto py-8 text-center">
          <div className="relative p-6 rounded-lg flex flex-col items-center justify-center">
            {/* Background flower image */}
            <img
              src={flower2}
              alt="background flower"
              className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2  pointer-events-none select-none"
              
            />
            <em className="block text-gray-500 relative z-10" style={{ fontFamily: 'Arial' }}>
              Beauty Natural Cosmetics
            </em>
            <h3 className="text-3xl font-bold mt-2 mb-8 relative z-10" style={{ fontFamily: 'Playfair Display' }}>
              Our Products
            </h3>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="px-4 py-2 !rounded-full bg-[#98AB3F] text-white font-semibold text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>Vegetables</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium"style={{ fontFamily: 'Playfair Display' }}>Fruits</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium"style={{ fontFamily: 'Playfair Display' }}>Juice</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium"style={{ fontFamily: 'Playfair Display' }}>Dried products</button>
          </div>
          {/* Products Grid (image type) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Example product data */}
            {[
              {
                img: card1,
                name: "Vitae Lectus",
                price: "$120.00",
                stars: 5,
              },
              {
                img: card2,
                name: "Sleeve External",
                price: "$190.00",
                stars: 0,
              },
              {
                img: card3,
                name: "Framed-Sleeve",
                price: "$187.00",
                stars: 5,
              },
              {
                img:card4,
                name: "Armani Black",
                price: "$187.00",
                stars: 0,
              },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-lg flex flex-col items-center p-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h4 className="font-semibold text-xl mb-2 cursor hover:text-[#98ab3f]" style={{ fontFamily: 'Playfair Display' }}>{product.name}</h4>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                   <i className="fa-solid fa-star !text-sm text-[#98ab3f]"></i>
                     
                  ))}
                </div>
                <span className="text-[#7ad03a] font-bold mb-2"style={{ fontFamily: 'Playfair Display, italic' }}>{product.price}</span>              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="max-w-7xl mx-auto py-12 grid grid-cols-1  md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-2">Organic &amp; Pure</h3>
            <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://ordo.themeftc.com/wp-content/uploads/2020/10/banner3.png"
              alt="Banner 3"
              className="rounded-lg shadow-lg w-40 h-60 object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Essential Oils</h3>
            <p className="text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
          </div>
        </section>
      </main>

      <Footer1 />
    </div>
  )
}

export default Bueatyorganic







