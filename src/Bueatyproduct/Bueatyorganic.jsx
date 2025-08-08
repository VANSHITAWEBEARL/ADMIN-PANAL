import React, { useState } from 'react';
import Productheader2 from './Productheader2';
import Footer1 from './Footer1';
import bg1 from '../assets/slider12.jpg';
import bg2 from '../assets/slider131.jpg';
import bg3 from '../assets/slider141.jpg';
import flower2 from '../assets/bgspan-h9.png';
import card1 from '../assets/8-2.jpg';
import card2 from '../assets/7-2.jpg';
import card3 from '../assets/6-4.jpg';
import card4 from '../assets/1-4.jpg';
import cardbg from '../assets/image43.png';
import cardbg1 from '../assets/image44.png';
import test1 from '../assets/back-test-1.jpg';
import image1 from '../assets/test.jpg';  
import image2 from '../assets/test3.png';
import image3 from '../assets/blog1.jpg';
import image4 from '../assets/blog2.jpg';
import banner1 from '../assets/banner4.png';
import banner2 from '../assets/banner5.png';




const sliderImages = [bg1, bg2, bg3];

const testimonials = [
  {
    img: image1,
    text: "Nullam malesuada erat ut turpis, consectetuer adipiscing elit. Donec odio.  Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, ",
    name: "Ms. Adela",
    title: "CEO",
  },
  {
    img: image1,
    text: "Consectetuer adipiscing elit, lorem ipsum dolor sit amet. Quisque volutpat mattis eros. Donec odio. Nullam malesuada erat ut turpis. Suspendisse  ",
    name: "Ms. Anna",
    title: "CEO Of ThemeFTC	",
  },
  {
    img: image3,
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Suspendisse urna nibh, viverra non, semper ",
    name: "	Ms. Helen",
    title: "Designer",
  },
   {
    img: image4,
    text: "Suspendisse urna nibh, viverra non, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer ",
    name: "Mrs. Elysia",
    title: "CEO & Co-Founder",
  },
   {
    img: image2,
    text: "Quisque volutpat mattis eros. consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna ",
    name: "Mrs. Orla",
    title: "CEO Of ThemeFTC	",
  }
];

const Bueatyorganic = () => {
  const [current, setCurrent] = useState(0);
  const total = sliderImages.length;

  const prevSlide = () => setCurrent(current === 0 ? total - 1 : current - 1);
  const nextSlide = () => setCurrent(current === total - 1 ? 0 : current + 1);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

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
        {/* Slider */}
<div className="flex relative justify-center items-center">
  <button
  onClick={prevSlide}
  className="absolute left-2 z-40 bg-gray-700  opacity-10 !rounded-full p-2  shadow transition-all duration-200 ease-in-out"
  aria-label="Previous"
>
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

  <div className="relative">
    <img
      src={sliderImages[current]}
      alt={`Slider ${current + 1}`}
      className="w-full object-cover rounded"
    />
   {current === 0 && (
  <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 text-black">
    <p className="text-sm !md:text-xl lg:text-xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Playfair Display' }}>
      Natural Cosmetics.
    </p>
    <p className="text-3xl md:text-5xl font-bold mb-2 capitalize"style={{ fontFamily: 'Playfair Display' }} >
      Sale 2025
    </p>
    <p className="text-3xl md:text-5xl font-bold mb-4 capitalize"style={{ fontFamily: 'Playfair Display' }}>
      Up to <span className="text-[#7A8E2F] font-normal">70% off</span>
    </p>
    <p className="text-sm md:text-sm text-gray-500 mb-6 max-w-md">
      It is a long established fact that a reader will be distracted<br />
      by the readable content of a
    </p>
    <button className="bg-black !hover:bg-[#98ab3f]  text-white flex items-center justify-contain gap-3 px-6 py-2 !rounded-full font-medium transition-colors">
      Shopping now!
      <i className="fa-solid fa-circle-right text-white text-xl bg-black"></i>
    </button>
  </div>
)}

    {current === 1 && (
  <div className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-16 text-black">
    <p className="text-sm !md:text-xl lg:text-xl text-gray-600 font-bold  mb-2" style={{ fontFamily: 'Playfair Display' }}>
      Natural Cosmetics.
    </p>
    <p className="text-4xl md:text-5xl !font-bold mb-2 capitalize"style={{ fontFamily: 'Playfair Display' }}>
      Fresh. <span className="text-[#7A8E2F] font-medium capitalize">Healthy.</span>
    </p>
    <p className="text-3xl md:text-5xl font-bold mb-4 capitalize" style={{ fontFamily: 'Playfair Display' }}>
      Organic 2025
    </p>
    <p className="text-sm text-end text-gray-600 mb-6 max-w-md">
      It is a long established fact that a reader will be distracted by<br />
      the readable content of a page when looking.
    </p>
    <button className="bg-black !hover:bg-[#98ab3f]  text-white flex items-center justify-contain gap-3 px-6 py-2 !rounded-full font-medium transition-colors">
      Shopping now!
      <i className="fa-solid fa-circle-right text-white text-xl bg-black"></i>
    </button>
  </div>
)}

    {current === 2 && (
  <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 text-black">
    <h2 className="text-4xl md:text-5xl !font-bold mb-2 capitalize" style={{ fontFamily: 'Playfair Display' }}>
      ORGANICI
    </h2>
    <p className="text-2xl md:text-2xl font-semibold mb-2 capitalize" style={{ fontFamily: 'Playfair Display'}} >
      STORE
    </p>
    <p className="text-lg md:text-xl text-gray-500 mb-6 capitalize" style={{ fontFamily: 'Playfair Display'}}>
      Delicious And Heathy Food
    </p>
     <button className="bg-black !hover:bg-[#98ab3f]  text-white flex items-center justify-contain gap-3 px-6 py-2 !rounded-full font-medium transition-colors">
      Shopping now!
      <i className="fa-solid fa-circle-right text-white text-xl bg-black"></i>
    </button>
  </div>
)}

  </div>
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
            <img
              src={flower2}
              alt="background flower"
              className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
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
            <button className="px-4 py-2 !rounded-full bg-[#98AB3F] text-white font-semibold text-gray-400 font-medium">Vegetables</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium">Fruits</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium">Juice</button>
            <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#98AB3F] hover:text-white text-gray-400 font-medium">Dried products</button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ img: card1, name: "Vitae Lectus", price: "$120.00", stars: 5 },
              { img: card2, name: "Sleeve External", price: "$190.00", stars: 0 },
              { img: card3, name: "Framed-Sleeve", price: "$187.00", stars: 5 },
              { img: card4, name: "Armani Black", price: "$187.00", stars: 0 },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-lg flex flex-col items-center p-4 hover:shadow-lg transition-shadow duration-300">
                <img src={product.img} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                <h4 className="font-semibold text-xl mb-2 cursor hover:text-[#98ab3f]" style={{ fontFamily: 'Playfair Display' }}>{product.name}</h4>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <i key={idx} className="fa-solid fa-star !text-sm text-[#98ab3f]"></i>
                  ))}
                </div>
                <span className="text-[#7ad03a] font-bold mb-2" style={{ fontFamily: 'Playfair Display, italic' }}>{product.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Cards */}
        <div className="flex gap-6 p-6 h-74 bg-white justify-center">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md max-w-xl flex-1" style={{ backgroundImage: `url(${cardbg})` }}></div>
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md max-w-xl flex-1" style={{ backgroundImage: `url(${cardbg1})` }}></div>
        </div>

        {/* Info Section */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col justify-between h-full text-end space-y-20">
              <div>
                <h3 className="!font-bold text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>Organic &amp; Pure</h3>
                <p className="text-gray-600 text-sm/7 ps-5 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
              </div>
              <div>
                <h3 className="!font-bold text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>Safe Package</h3>
                <p className="text-gray-600 text-sm/7 ps-5 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="https://ordo.themeftc.com/wp-content/uploads/2020/10/banner3.png" alt="Product Center" className="w-52 md:w-60 object-contain" />
            </div>

            <div className="flex flex-col justify-between h-full text-start space-y-20">
              <div>
                <h3 className="!font-bold text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>Essential Oils</h3>
                <p className="text-gray-600 text-sm/7 pe-5 font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
              </div>
              <div>
                <h3 className="!font-bold text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>Safe Package</h3>
                <p className="text-gray-600 pe-5 font-medium text-sm/7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-cover bg-center relative text-center" style={{ backgroundImage: `url(${test1})` }}>
          <div className="max-w-3xl mx-auto px-4">
            <p className="italic text-gray-600 text-sm mb-2">Beauty Natural Cosmetics</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">What’s client say ?</h2>

            <div className="relative flex flex-col items-center">
              <div className="flex items-center gap-5 mb-6">
                <button className="bg-white w-10 h-10 !rounded-full shadow p-2 hover:bg-gray-100 transition" onClick={prevTestimonial}>
                 <i className="fa-solid fa-chevron-left text-sm text-gray-400"></i>                 
                </button>
                <img src={testimonials[testimonialIndex].img} alt={testimonials[testimonialIndex].name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover" />
                <button className="bg-white w-10 h-10  !rounded-full shadow p-2 hover:bg-gray-100 transition" onClick={nextTestimonial}>
                  <i className="fa-solid fa-chevron-right text-sm text-gray-400"></i>
                </button>
              </div>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-2xl text-center">
                {testimonials[testimonialIndex].text}
              </p>
              <div>
                <h3 className="text-xl font-semibold">{testimonials[testimonialIndex].name}</h3>
                <p className="italic text-gray-500 text-sm">{testimonials[testimonialIndex].title}</p>
              </div>
            </div>
          </div>
        </section>


        <section class="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6">
    {/* <!-- Text --> */}
    <div class="lg:w-1/2 text-right !lg:text-left">
      <p class="italic text-gray-500">Natural cosmetics</p>
      <h2 class="text-3xl font-bold italic text-gray-900 mb-4">Rose Mineral Cream</h2>
      <p class="text-base leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, Donec nec justo consectetur adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. semper suscipit,
        Suspendisse urna nibh, viverra non, semper suscipit, Donec nec justo posuere a, pede.
        Donec nec justo.
      </p>
    </div>
    {/* <!-- Image --> */}
    <div class="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
      <img src={banner1} alt="Rose Mineral Cream" class="w-80 h-auto object-contain"/>
    </div>
  </section>
{/* 
  <!-- Makeup Brush --> */}
  <section class="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto py-20 px-6">
    {/* <!-- Image --> */}
    <div class="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
      <img src= {banner2} alt="Makeup Brush" class="w-60 h-auto object-contain"/>
    </div>
    {/* <!-- Text --> */}
    <div class="lg:w-1/2 sm:text-center lg:text-left">
      <p class="italic text-gray-500">Natural cosmetics</p>
      <h2 class="text-3xl font-bold italic text-gray-900 mb-4">Makeup Brush</h2>
      <p class="text-base leading-relaxed text-gray-600">
        Lorem ipsum dolor sit amet, Donec nec justo consectetur adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. semper suscipit,
        Suspendisse urna nibh, viverra non, semper suscipit, Donec nec justo posuere a, pede.
        Donec nec justo.
      </p>
    </div>
  </section>
      </main>

      <Footer1 />
    </div>
  );
};

export default Bueatyorganic;
