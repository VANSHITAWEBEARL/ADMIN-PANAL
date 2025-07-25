import React, { useState, useEffect } from 'react';
import slide1 from '../assets/slider91.jpg';
import slide2 from '../assets/slider92.jpg';
import slide3 from '../assets/slider93.jpg';
import Productheader from './Productheader';
import concealerImage from '../assets/cate1.jpg';
import creamImage from '../assets/cate2-1.jpg';
import bg2 from '../assets/bg1-h9.jpg';
import cart1 from '../assets/17.jpg'; // Ensure the image path is correct
import cart2 from '../assets/171.jpg';
import cart3 from '../assets/18.jpg';
import cart4 from '../assets/9.jpg'; // Ensure the image path is correct

const HOME = () => {
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

        <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />

        <div className="absolute top-6 left-0 w-full z-30 px-4 sm:px-10">
          <Productheader />
        </div>

        <div className="absolute text-center left-124 flex flex-col top-120 items-center justify-center transform -translate-y-1/2 z-20 text-left text-black">
          {current === 0 && (
            <>
              <p className="text-gray-500 text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Natural Cosmetics.
              </p>
              <div className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Hi! It's <span className="text-[#fe9995] font-medium md:text-6xl">beautiful</span><br />
                For you
              </div>
              <p className="text-gray-600 text-sm mt-2 w-115">
                It is a long established fact that a reader will be distracted by the page when looking at its layout.readable content of a
              </p>
              <button
                className="mt-8 bg-black text-white px-6 py-2 !rounded-full flex items-center gap-2 transition"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Discover now !
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </>
          )}
        </div>

        <div className="absolute right-45 top-1/2 items-center justify-center transform -translate-y-1/2 z-20 text-right text-black">
          {current === 1 && (
            <>
              <p className="text-gray-500 text-2xl mb-2" style={{ fontFamily: 'Playfair Display' }}>
                Natural Cosmetics.
              </p>
              <div className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Relax with <span className="text-[#fe9995] font-medium md:text-6xl">beauty</span><br />
                For women’s
              </div>
              <p className="text-gray-600 text-sm mt-2 w-120">
                It is a long established fact that a reader will be distracted by when looking the readable content of a page when looking
              </p>
              <div className="mt-8 flex justify-end">
                <button className="bg-black text-white px-6 py-2 !rounded-full flex items-center gap-2 transition">
                  Shopping now !
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="absolute right-50 top-120 items-center justify-center transform -translate-y-1/2 z-20 text-left text-black">
          {current === 2 && (
            <>
              <div className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Beautiful <span className="text-[#fe9995] font-medium md:text-6xl">products for</span><br />
                beautiful skin.
              </div>
              <p className="text-gray-600 text-sm mt-2 w-125">
                Lorem ipsum dolor sit amet, consectetuerum adipiscing elit, sed diam no nummy nibh euis mod tincidunt magna.
              </p>
              <button className="mt-8 bg-black text-white px-6 py-2 !rounded-full flex items-center gap-2 transition">
                Shopping now !
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
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
            className="w-full h-50 mb-6 object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <h4
              className="text-2xl !font-black italic text-gray-900"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Coverage Concealer
            </h4>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>

        <div className="flex flex-col text-left items-center justify-center">
          <img
            src={creamImage}
            alt="Face Cream"
            className="h-50 mb-6 object-contain transition-all duration-[2600ms] ease-in-out hover:scale-105"
          />
          <div className="relative pl-10 -left-70 flex flex-col items-start">
            <h4
              className="text-2xl !font-black italic text-gray-900"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Face Cream
            </h4>
            <p className="text-sm text-gray-500 italic mt-2">Cosmetics.</p>
          </div>
        </div>
      </div>


      <div
        className="relative items-center flex  py-20 px-6 text-center"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#fceaea]/80 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <p
            className="text-gray-600 italic mb-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Beauty Natural Cosmetics
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            New Arrivals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center">
            {/* Product Card 1 */}
            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100 p-6 rounded-t-xl transition-all duration-300 ease-in-out hover:shadow-md hover:border-pink-300">
                <img
                  src={cart1}
                  alt="Porttitor Imperdiet"
                  className="h-48 mx-auto object-contain"
                />
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
                <h4 className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Lanige Cream
                </h4>
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
                <h4 className="text-gray-700 text-base font-semibold" style={{ fontFamily: "Playfair Display, serif" }}>
                  Acongue Pellentesque
                </h4>
                <div className="text-[#fe9995] my-2 text-sm">★★★★★</div>
                <p className="text-md italic font-semibold text-gray-800">$122.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>
  );
};

export default HOME;