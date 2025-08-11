import React from 'react'
import Demo6header from './Demo6header'
import slider1 from '../assets/slider81.jpg'
import slider2 from '../assets/slider82.jpg'
import slider3 from '../assets/slider83.jpg'
import imgpart2 from '../assets/banner1demo6.jpg'
import imgpart3 from '../assets/banner2demo6.jpg'
import imgpart4 from '../assets/banner3.jpg'
import imgpart5 from '../assets/banner4demo6.jpg'
import imgpart6 from '../assets/banner5demo6.jpg'
import imgpart7 from '../assets/banner6.jpg'
import imgpart8 from '../assets/banner7.jpg'
import flower2 from '../assets/bgspan-h9.png';
import card1 from '../assets/13blog6.jpg'
import card2 from '../assets/7blog6.jpg'
import card3 from '../assets/8blog6.jpg'
import card4 from '../assets/12blog6.jpg'
import card5 from '../assets/9blog6.jpg'
import card6 from '../assets/3.jpg'
import card7 from '../assets/4blog6.jpg'
import card8 from '../assets/6blog6.jpg'
import img1 from '../assets/ins18-11.jpg'
import img2 from '../assets/slider82.jpg'
import img3 from '../assets/ins18-13.jpg'
import img4 from '../assets/ins18-14.jpg'
import img5 from '../assets/ins18-15.jpg'
import img6 from '../assets/ins18-16.jpg'
import img7 from '../assets/ins18-17.jpg'
import img8 from '../assets/ins18-18.jpg'
import BackToTopButton from './BacktoTopbutton'

const Demo6 = () => {
  return (
    <div>
      <Demo6header />
      <div className='mt-10'>
        <div class="max-w-7xl mx-auto px-4 py-3">
          <div class="flex  gap-3">

            {/* <!-- Left big banner --> */}
            <div class="relative rounded-lg overflow-hidden">
              <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {/* Slide 1 */}
                  <div className="carousel-item active relative  ">
                    <img
                      src={slider1}
                      className="w-full object-cover"
                      alt="Face Makeup"
                      style={{ objectPosition: 'right center' }}
                    />

                  </div>

                  {/* Slide 2 */}
                  <div className="carousel-item relative ">
                    <img
                      src={slider2}
                      className="w-full  object-cover"
                      alt="Best Cosmetics"
                      style={{ objectPosition: 'center center' }}
                    />

                  </div>

                  {/* Slide 3 */}
                  <div className="carousel-item relative ">
                    <img
                      src={slider3}
                      className="w-full  object-cover"
                      alt="Natural Cosmetics"
                      style={{ objectPosition: 'center center' }}
                    />

                  </div>
                </div>

                {/* Navigation Controls */}
                <button className="carousel-control-prev absolute  pe-10 left-0 top-0 bottom-0 flex items-start justify-center p-4 text-start border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next absolute right-10 top-0 bottom-0 flex items-center justify-center p-4 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            {/* <!-- Middle tall card --> */}
            <div>

              <img src={imgpart2} alt="Flower Vase" class="" />
            </div>

            {/* <!-- Right two small stacked cards --> */}
            <div class="flex flex-col gap-7">

              <div class=" overflow-hidden">
                <img src={imgpart3} alt="Flower" class="" />
              </div>

              <div >

                <img src={imgpart4} alt="Cactus" />
              </div>

            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 py-3">
          <div class="flex  gap-3">
            <div>
              <img src={imgpart2} alt="Flower Vase" class="" />
            </div>
            <div className='flex flex-col gap-4'>
              <div class="flex  gap-7">

                <div class=" overflow-hidden">
                  <img src={imgpart5} alt="Flower" class="" />
                </div>

                <div >

                  <img src={imgpart6} alt="Cactus" />
                </div>

              </div>
              <div class="flex  gap-7">

                <div class=" overflow-hidden">
                  <img src={imgpart7} alt="Flower" class="" />
                </div>

                <div >

                  <img src={imgpart8} alt="Cactus" />
                </div>

              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>


      <div className="relative p-6 rounded-lg flex flex-col items-center justify-center">
        <img
          src={flower2}
          alt="background flower"
          className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        />
        <em className="block text-gray-500 etxt-sm relative z-10" style={{ fontFamily: 'Arial' }}>
          fresh from our farm
        </em>
        <h1 className="text-5xl !font-black mt-1 mb-8 relative  z-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
          Our Products
        </h1>
      </div>
      <div class="max-w-7xl mx-auto !border-b border-gray-100  px-4 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* <!-- Product Card --> */}
          <div class="text-center ">
            <div class="rounded-lg overflow-hidden">
              <img src={card1} alt="Flower" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Donec Nec Justo Eget Felis</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>★★★★★</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card2} alt="Flower" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Consectetuer Adipiscing</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>☆☆☆☆☆</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$120.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card3} alt="Flower" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Consectetuer Adipiscing .</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>★★★★★</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$120.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card4} alt="Cactus" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Lorem Ipsum Dolor Sit</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>☆☆☆☆☆</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$155.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card5} alt="Cactus" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Donec Nec Justo Eget Felis</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>☆☆☆☆☆</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$155.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card6} alt="Cactus" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Consectetuer Adipiscing .</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>★★★★★</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$155.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card7} alt="Cactus" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Donec Nec Justo Eget Felis</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>☆☆☆☆☆</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$155.00</p>
          </div>

          {/* <!-- Product Card --> */}
          <div class="text-center">
            <div class="rounded-lg overflow-hidden">
              <img src={card8} alt="Cactus" class="w-full h-64 object-contain" />
            </div>
            <h3 class="mt-4 !text-base font-medium capitalize" style={{ fontFamily: 'Playfair Display' }} >Consectetuer Adipiscing .</h3>
            <div class="flex justify-center mt-2 text-red-500">
              <span>★★★★★</span>
            </div>
            <p class="mt-2 text-lg italic font-semibold text-gray-800" style={{ fontFamily: 'Playfair Display' }}>$155.00</p>
          </div>


        </div>
      </div>


      <section class="py-12">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Newsletter sign – up</h2>
          <form class="flex justify-center max-w-xl mx-auto">
            <input type="email" placeholder="Your email address..." class="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-400" />
            <button type="submit" class="px-6 py-3 bg-red-400 text-white font-semibold rounded-r-lg hover:bg-red-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Image Strip --> */}
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
  <img
    src={img1}
    alt="Flower 1"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img2}
    alt="Flower 2"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img3}
    alt="Flower 3"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img4}
    alt="Flower 4"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img5}
    alt="Flower 5"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img6}
    alt="Flower 6"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img7}
    alt="Flower 7"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
  <img
    src={img8}
    alt="Flower 8"
    className="w-full h-49 object-cover align-middle transition-all ease duration-1000 delay-0"
  />
</div>




      <footer class="bg-white border-t border-gray-200 py-10">
        <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">

          {/* <!-- Information --> */}
          <div>
            <h5 class="font-bold  capitalize" style={{ fontFamily: 'Playfair Display' }}>Information</h5>
            <ul class="space-y-2 ps-0">
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › Net Transaction
                </a>
              </li>
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › Compensation Fist
                </a>
              </li>
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › My Account
                </a>
              </li>
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › Return Policy
                </a>
              </li>
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › Safe Shopping
                </a>
              </li>
              <li>
                <a href="#"
                  class="capitalize flex items-center text-black transition-all duration-200 ease-linear hover:text-[#df574a] hover:pl-2 !no-underline">
                  › Shipping Rates
                </a>
              </li>
            </ul>

          </div>

          {/* <!-- Archive --> */}
          <div>
            <h5 class="font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>Archive</h5>
            <ul class="space-y-2 ps-0 text-sm">
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Designer Shoes</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Gallery</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Pricing</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Feature Index</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Login</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Help & Support</a></li>
            </ul>
          </div>

          {/* <!-- Customer Service --> */}
          <div>
            <h5 class="font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>Customer Service</h5>
            <ul class="space-y-2 ps-0 text-sm">
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Net Transaction</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Compensation Fist</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› My Account</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Return Policy</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Safe Shopping</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Shipping Rates</a></li>
            </ul>
          </div>

          {/* <!-- My Account --> */}
          <div>
            <h5 class="font-bold capitalize" style={{ fontFamily: 'Playfair Display' }} >My Account</h5>
            <ul class="space-y-2 ps-0 text-sm">
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer  hover:text-[#df574a] hover:pl-2 !no-underline">› About Us</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Delivery Information</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Privacy Policy</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› Terms & Conditions</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› My Product</a></li>
              <li><a href="#" class="capitalize flex items-center text-black transition-all duration-200 ease-linear cursor-pointer hover:text-[#df574a] hover:pl-2 !no-underline">› My Orders</a></li>
            </ul>
          </div>

        </div>

        {/* <!-- Copyright --> */}
        <div class="border-t border-gray-200 mt-10 pt-4 text-center text-sm text-gray-600">
          Copyright © 2025 by<span class="font-semibold cursor-pointer hover:text-[#df574a]">ThemeFTC</span>
. All rights reserved.
        </div>
        
      </footer>
     <BackToTopButton />
    </div>
  )
}

export default Demo6
