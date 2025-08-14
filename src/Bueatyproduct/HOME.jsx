import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slider91.jpg';
import slide2 from '../assets/slider92.jpg';
import slide3 from '../assets/slider93.jpg';
import concealerImage from '../assets/cate1.jpg';
import creamImage from '../assets/cate2-1.jpg';
import bg2 from '../assets/bg1-h9.jpg';
import cart1 from '../assets/10.jpg'; // Ensure the image path is correct
import cart01 from '../assets/7-1.jpg'; // Ensure the image path is correct
import cart2 from '../assets/17.jpg';
import cart3 from '../assets/18.jpg';
import cart4 from '../assets/9.jpg'; // Ensure the image path is correct
import rosecreamImage from '../assets/cate3.jpg';
import skinImage from '../assets/cate4.jpg';
import flower from '../assets/bgspan-h9.png'; // Ensure the image path is correct
import flower2 from '../assets/bgspan2-h9.png';
import bg3 from '../assets/back2.jpg'; // Ensure the image path is correct
import test1 from '../assets/test1.png';
import test2 from '../assets/test2.png';
import test3 from '../assets/test3.png';
import Mobailheader from './Mobailheader';
import Productheader from './Productheader';
import Footer1 from './Footer1';
import BackToTopButton from './BackToTopButton';

const Home = () => {
  // Testimonial carousel state and data
  const testimonials = [
    {
      img: test3,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse ",
      name: "Ms. Lily",
      title: "Designer",
    },
    {
      img: test2,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse",
      name: "Ms. Olwen",
      title: "	CEO & Co-Founder	",
    },
    {
      img: test1,
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse",
      name: "	Ms. Kiera",
      title: "	Ceo Of ThemeFTC	",
    },
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const prevTestimonial = () => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div>
      <div className="relative w-full min-h-[120vh] overflow-hidden">

        <div
          className="absolute inset-0 bg-auto transition-all duration-700 ease-in-out z-0"
          style={{
            backgroundImage: `url(${slides[current]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <div className="absolute top-6 left-0 w-full z-30 px-4 sm:px-10">
        <Productheader/>
        <Mobailheader />

        </div>

        <div className="absolute left-1/2 lg:top-120  top-60 md:top-40 lg:-left-10 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 z-20 flex flex-col items-center lg:items-center justify-center text-center lg:text-left w-full px-4 sm:px-8 md:px-16">
          {current === 0 && (
            <><div className='justify-center items-center flex'>
              <p className="text-gray-500 !text-center flex items-center   text-lg sm:text-xl md:text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Natural Cosmetics.
              </p>
            </div>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Hi! It's <span className="text-[#fe9995] font-medium">beautiful</span><br />
                For you
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 max-w-xs sm:max-w-md md:max-w-lg lg:w-120 mx-auto lg:mx-0">
                It is a long established fact that a reader will be distracted by the page when looking at its layout.readable content of a
              </p>
              <button
                className="mt-6 sm:mt-8 bg-black text-white px-4 sm:px-6 py-2 !rounded-full flex items-center gap-2 transition text-sm sm:text-base"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Discover now !
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </>
          )}
        </div>

        <div className="absolute left-1/2  top-60 sm:top-56 md:top-64 lg:right-60 lg:top-1/2 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 z-20 flex flex-col items-center lg:items-end justify-center  md:text-end w-full lg:max-w-[560px] px-4 sm:px-8 md:px-16">
          {current === 1 && (
            <>
              <p className="text-gray-500 text-lg sm:text-xl md:text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Natural Cosmetics.
              </p>
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Relax with <span className="text-[#fe9995] font-medium">beauty</span><br />
                For women’s
              </div>
              <p className="text-gray-600 text-xs sm:text-sm mt-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl  lg:mx-0">
                It is a long established fact that a reader will be distracted by when looking the readable content of a page when looking
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center lg:justify-end w-full">
                <button className="bg-black text-white px-4 sm:px-6 py-2 !rounded-full flex items-center gap-2 transition text-sm sm:text-base">
                  Shopping now !
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="absolute left-1/2 top-60 sm:top-72 md:top-80 lg:right-[15rem] lg:top-[31rem] transform -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 z-20 flex flex-col items-center lg:items-start justify-center text-center lg:text-start w-full px-4 sm:px-8 md:px-12">
          {current === 2 && (
            <>
              <div className="w-full">
                <div className="text-3xl sm:text-5xl md:text-6xl !font-bold  lg:text-6xl font-bold leading-tight text-left lg:text-left" style={{ fontFamily: 'Playfair Display' }}>
                  Beautiful <span className="text-[#fe9995] !font-normal">products for</span><br />
                  beautiful skin.
                </div>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 max-w-xl text-left lg:text-left" style={{ fontFamily: 'Playfair Display' }}>
                  Lorem ipsum dolor sit amet, consectetuerum adipiscing elit, sed diam no nummy nibh euis mod tincidunt magna.
                </p>
                <div className="mt-8 flex justify-start">
                  <button className="bg-black text-white px-4 py-2 !rounded-full flex items-center gap-2 transition text-lg font-semibold shadow-lg hover:bg-[#fe9995] hover:text-black" style={{ fontFamily: 'Playfair Display' }}>
                    Shopping now !
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="absolute bottom-8 w-full flex justify-center items-center gap-4 z-20">
          <button
            onClick={prevSlide}
            className="bg-white opacity-40 text-gray-700 p-2 !rounded-full hover:bg-[#fe9995] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white opacity-40 text-gray-700 p-2 !rounded-full hover:bg-[#fe9995] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className="sr-only"
            >
              Slide {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="w-auto bg-white px-6 md:p-0 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col bg-gray-50 text-left transition-all duration-[2600ms] ease-in-out hover:shadow-lg items-center justify-center">
          <img
            src={concealerImage}
            alt="Coverage Concealer"
            className=" h-90 mb-6 object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Coverage Concealer
            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>

        <div className="flex flex-col text-left items-center justify-center">
          <img
            src={creamImage}
            alt="Face Cream"
            className="h-90 mb-6  object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Face Cream
            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>
      </div>


      <div
        className="relative items-center flex justify-center py-20 px-6 text-center"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Content */}
        <div className="relative z-10"
        >
          <div className="relative flex flex-col items-center justify-center mb-4" style={{ height: '70px' }}>
            <img src={flower} alt="background flower" className="absolute left-1/2 top-1/2 w-48 h-20 -translate-x-1/2 -translate-y-1/2 opacity-90 pointer-events-none select-none" style={{ zIndex: 0 }} />
            <p
              className="text-gray-600 italic mb-2 relative"
              style={{ fontFamily: "Playfair Display, serif", zIndex: 1 }}
            >
              Beauty Natural Cosmetics
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              New Arrivals
            </h2>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center place-items-center mx-auto">
            {/* Product Card 1 */}
            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100 p-6 rounded-t-xl transition-all duration-300 ease-in-out hover:shadow-md hover:border-pink-300">
                <span className="relative block w-full h-48 group">
                  <img
                    src={cart1}
                    alt="Porttitor Imperdiet"
                    className="h-48 mx-auto object-contain absolute inset-0 transition-opacity duration-300 z-0 group-hover:opacity-0"
                  />
                  <img
                    src={cart01}
                    alt="Porttitor Imperdiet Hover"
                    className="h-48 mx-auto object-contain absolute inset-0  duration-300 opacity-0 group-hover:opacity-90 z-10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 transition">
                      <i className="fa fa-shopping-bag text-gray-700 text-xl"></i>
                    </button>
                    <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 transition">
                      <i className="fa fa-heart text-gray-700 text-xl"></i>
                    </button>
                    <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 transition">
                      <i className="fa fa-refresh text-gray-700 text-xl"></i>
                    </button>
                    <button className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-pink-100 transition">
                      <i className="fa fa-eye text-gray-700 text-xl"></i>
                    </button>
                  </div>
                </span>
              </div>

              <div className="text-center px-4 py-6">
                <h4 className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Porttitor Imperdiet
                </h4>
                <div className="text-[#fe9995] my-2 text-sm">★★★★★</div>
                <p className="text-md italic font-semibold text-gray-800">$122.00</p>
              </div>
            </div>

            {/* Product Card 2 */}
            <div >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border p-6 rounded-t-xl">
                <img
                  src={cart2}
                  alt="Afacilisis Tortor Ante"
                  className="h-48 mx-auto object-contain"
                />
              </div>
              <div className="text-center px-4 py-6">
                <h4 className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Afacilisis Tortor Ante
                </h4>
                <div className="text-[#fe9995] my-2 text-sm">★★★★★</div>
                <p className="text-md italic font-semibold text-gray-800">$120.00</p>
              </div>
            </div>

            {/* Product Card 3 */}
            <div >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border p-6 rounded-t-xl">
                <img
                  src={cart3}
                  alt="Lanige Cream"
                  className="h-48 mx-auto object-contain"
                />
              </div>
              <div className="text-center px-4 py-6">
                <p className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Lanige Cream
                </p>
                <div className="text-[#fe9995] my-2 text-sm">★★★★★</div>
                <p className="text-md italic font-semibold text-gray-800">$157.00</p>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border p-6 rounded-t-xl">
                <img
                  src={cart4}
                  alt="Acongue Pellentesque"
                  className="h-48 mx-auto object-contain"
                />
              </div>
              <div className="text-center px-4 py-6">
                <p className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Acongue Pellentesque
                </p>
                <div className="text-[#fe9995] my-2 text-sm">★★★★★</div>
                <p className="text-md italic font-semibold text-gray-800">$122.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto bg-white px-6 md:p-0 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col text-left transition-all duration-[2600ms] ease-in-out hover:shadow-lg items-center justify-center">
          <img
            src={rosecreamImage}
            alt="Coverage Concealer"
            className=" h-90 mb-6 object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Rose Mineral Cream
            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>

        <div className="flex bg-gray-50  flex-col text-left items-center justify-center">
          <img
            src={skinImage}
            alt="Face Cream"
            className="h-90 mb-6  object-contain cover transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Skin Perfector
            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>
      </div>

      <div
        className="relative flex flex-col items-center justify-center py-18 lg:px-16 px-10 text-center"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
        }}
      >
        <div className="relative flex flex-col items-center justify-center p-10 mb-4" style={{ height: "70px" }}>
          <img
            src={flower2}
            alt="background flower"
            className="absolute left-1/2 top-1/2 w-48 h-20 -translate-x-1/2 -translate-y-1/2 opacity-80 pointer-events-none select-none"
            style={{ zIndex: 0 }}
          />
          <p
            className="text-gray-600 italic mb-2 relative"
            style={{ fontFamily: "Playfair Display, serif", zIndex: 1 }}
          >
            Beauty Natural Cosmetics
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 relative"
            style={{ fontFamily: "Playfair Display, serif", zIndex: 1 }}
          >
            What's client say ?
          </h2>
        </div>

        <div className="flex items-center justify-center gap-8  lg:max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex items-center lg:gap-15 gap-10 justify-center w-full mb-6">
              <button
                className="bg-white bg-opacity-80 !rounded-full w-10 h-10 flex items-center justify-center shadow transition duration-200 hover:bg-opacity-100 mr-8"
                onClick={prevTestimonial}
                aria-label="Previous"
                style={{ border: 'none' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="lg:w-36 lg:h-36 rounded-full border-4 border-white overflow-hidden shadow-xl bg-white flex items-center justify-center">
                <img
                  src={testimonials[testimonialIndex].img}
                  alt="Client"
                  className="w-full h-full object-fill"
                />
              </div>
              <button
                className="bg-white bg-opacity-80 !rounded-full w-10 h-10 flex items-center justify-center shadow transition duration-200 hover:bg-opacity-100 ml-8"
                onClick={nextTestimonial}
                aria-label="Next"
                style={{ border: 'none' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-6 lg:w-140 font-medium ">
              {testimonials[testimonialIndex].text}
            </p>
            <p className="text-2xl font-medium text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              {testimonials[testimonialIndex].name}
            </p>
            <p className="italic text-gray-500 text-sm mb-2" style={{ fontFamily: 'Playfair Display  , italic' }}>
              {testimonials[testimonialIndex].title}
            </p>
          </div>
        </div>
      </div>

      <div className="w-auto bg-white px-6 md:p-0 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col text-left transition-all duration-[2600ms] ease-in-out hover:shadow-lg items-center justify-center">
          <img
            src={rosecreamImage}
            alt="Coverage Concealer"
            className=" h-90 mb-6 object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Cream Contour            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>

        <div className="flex bg-gray-50  flex-col text-left items-center justify-center">
          <img
            src={skinImage}
            alt="Face Cream"
            className="h-90 mb-6  object-contain cover transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <p
              className="text-2xl !font-black italic text-gray-900 hover:text-[#f78da7] cursor-pointer"
              style={{ fontFamily: 'Playfair Display' }}
            >
              BB Cream            </p>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>
      </div>

      <Footer1 />
      <BackToTopButton/>

    </div>
  );
};

export default Home;