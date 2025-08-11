import React from 'react'
import slider from '../assets/slider10.jpg'
import slider1 from '../assets/slider11.jpg'
import slider2 from '../assets/slider3-FILEminimizer.jpg'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import card1 from '../assets/4-1.jpg'
import card2 from '../assets/3-2.jpg'
import card3 from '../assets/9-1.jpg'
import card4 from '../assets/8.jpg'
import card5 from '../assets/6.jpg'
import card6 from '../assets/4.jpg'
import card7 from '../assets/3-1.jpg'
import card8 from '../assets/2.jpg'
import card9 from '../assets/7-1 (1).jpg'
import { useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import bg from '../assets/back-test.jpg'
import img1 from '../assets/img1-1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3-1.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import banner3 from '../assets/blog4-FILEminimizer.jpg'
import banner4 from '../assets/blog1-FILEminimizer.jpg'
import banner5 from '../assets/blog2-FILEminimizer.jpg'
import Cosmeticheader from './cosmeticheader'
import bg1 from '../assets/b1.png'
import bg2 from '../assets/b2.png'
import bg3 from '../assets/b3.png'
import bg4 from '../assets/b4.png'
import bg5 from '../assets/b5.png'
import payment from '../assets/payment.png'
import logo from '../assets/logo10e.png';
import BackToTopButton from './BacktoTopbutton'
const testimonials = [
    {
        name: 'Ms. Adela',
        title: 'CEO',
        image: 'https://ordo.themeftc.com/wp-content/uploads/2020/09/blog4.jpg',
        quote:
            'Nullam malesuada erat ut turpis, consectetuer adipiscing elit. Donec odio. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non,',
    },
    {
        name: 'Ms. Helen',
        title: 'Designer',
        image: 'https://ordo.themeftc.com/wp-content/uploads/2018/07/blog1.jpg',
        quote:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Suspendisse urna nibh, viverra non, semper',
    },
    {
        name: 'Mrs. Elysia',
        title: 'CEO & Co-Founder',
        image: 'https://ordo.themeftc.com/wp-content/uploads/2018/07/blog2.jpg',
        quote:
            'Suspendisse urna nibh, viverra non, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer',
    },
    {
        name: 'Mrs. Orla',
        title: 'CEO Of ThemeFTC',
        image: 'https://ordo.themeftc.com/wp-content/uploads/2018/07/blog3.png',
        quote:
            'Quisque volutpat mattis eros. consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna',
    },
];

const Cosmetic = () => {

    const [index, setIndex] = useState(0);
    const { name, title, image, quote } = testimonials[index];

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };
    return (
        <div>
            <Cosmeticheader />

            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* Slide 1 */}
                    <div className="carousel-item active relative h-175">
                        <img
                            src={slider}
                            className="w-full h-full object-cover"
                            alt="Face Makeup"
                            style={{ objectPosition: 'right center' }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center text-center justify-center p-8 md:p-16 lg:-left-110 text-black  ">
                            <div className="sm:text-3xl lg:text-5xl !font-bold mb-2 uppercase tracking-wider"
                                style={{ fontFamily: 'Playfair Display', color: '#333' }}>
                                FACE MAKEUP
                            </div>
                            <p className="!text-2xl font-medium mb-4 "
                                style={{ fontFamily: 'Playfair Display' }}>
                                SAVE UP TO 40% OFF
                            </p>
                            <p className="text-sm mb-6 leading-relaxed"
                                style={{ fontFamily: 'Arial', color: '#555' }}>
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris<br />
                                sit amet orci. Aenean dignissim
                            </p>
                            <button className="bg-black hover:bg- text-white px-4 py-2 rounded-none font-medium transition-colors uppercase tracking-wider"
                                style={{
                                    fontFamily: 'Playfair Display',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',

                                }}>
                                Shop Now!
                            </button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item relative h-175">
                        <img
                            src={slider1}
                            className="w-full h-full object-cover"
                            alt="Best Cosmetics"
                            style={{ objectPosition: 'center center' }}
                        />
                        <div className="absolute inset-0 flex flex-col items-start lg:left-73 lg:mb-2 text-start justify-center p-8 md:p-16 text-black">
                            <div className="text-3xl md:text-5xl font-bold mb-2 uppercase" style={{ fontFamily: 'Playfair Display' }}>
                                BEST COSMETICS
                            </div>
                            <p className="text-xl md:text-2xl font-medium mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                SAVE UP TO 40% OFF
                            </p>
                            <p className="text-base md:text-sm mb-6 text-gray-500" style={{ fontFamily: 'Arial' }}>
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.<br />
                                Aenean dignissim
                            </p>
                            <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-none font-medium transition-colors uppercase"
                                style={{ fontFamily: 'Playfair Display', letterSpacing: '1px' }}>
                                Shop Now!
                            </button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item relative h-175">
                        <img
                            src={slider2}
                            className="w-full h-full object-cover"
                            alt="Natural Cosmetics"
                            style={{ objectPosition: 'center center' }}
                        />
                        <div className="absolute inset-0 flex flex-col items-start text-start justify-center left-30 p-8 md:p-16 text-black  ">
                            <div className="sm:text-3xl lg:text-5xl !font-bold mb-2 uppercase tracking-wider"
                                style={{ fontFamily: 'Playfair Display', color: '#333' }}>
                                FACE MAKEUP
                            </div>
                            <p className="!text-2xl font-medium mb-4 "
                                style={{ fontFamily: 'Playfair Display' }}>
                                SAVE UP TO 40% OFF
                            </p>
                            <p className="text-sm mb-6 leading-relaxed"
                                style={{ fontFamily: 'Arial', color: '#555' }}>
                                Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris<br />
                                sit amet orci. Aenean dignissim
                            </p>
                            <button className="bg-black hover:bg- text-white px-4 py-2 rounded-none font-medium transition-colors uppercase tracking-wider"
                                style={{
                                    fontFamily: 'Playfair Display',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',

                                }}>
                                Shop Now!
                            </button>
                        </div>
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

            <div className="bg-gray-50 py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Free Shipping */}
                        <div className="flex items-center space-x-4">
                            <div className="flex p-2 rounded-full items-center text-center justify-center border-2 border-gray-300 w-12 h-12 shadow-md group bg-[#fe9995] hover:bg-[#262626] transition-all duration-300">
                                <i
                                    aria-hidden="true" className="fas fa-truck text-xl text-white group-hover:text-white rotate-y-180 group-hover:transform group-hover:rotate-360 transition-all duration-[1s]"
                                ></i>
                            </div>
                            <div>
                                <p className="text-lg font-bold  mb-0 uppercase text-gray-900 " style={{ fontFamily: 'Playfair Display' }}>FREE SHIPPING</p>
                                <p className="mt-1 font-medium  text-gray-600">For All Orders Over $220</p>
                            </div>
                        </div>

                        {/* 30 Days Returns */}
                        <div className="flex items-center space-x-4">
                            <div className="flex p-2 rounded-full items-center text-center justify-center border-2 border-gray-300 w-12 h-12 shadow-md group bg-[#fe9995] hover:bg-[#262626] transition-all duration-300">
                                <i
                                    aria-hidden="true" className="fas fa-undo text-xl text-white group-hover:text-white group-hover:transform group-hover:rotate-360 transition-all duration-[1s]"
                                ></i>
                            </div>
                            <div>
                                <p className="text-lg font-bold  mb-0 uppercase text-gray-900 " style={{ fontFamily: 'Playfair Display' }}>30 DAYS RETURNS</p>
                                <p className="mt-1 font-medium  text-gray-600">Money Back Guarantee</p>
                            </div>
                        </div>

                        {/* Online Support */}
                        <div className="flex items-center space-x-4">
                            <div className="flex p-2 rounded-full items-center text-center justify-center border-2 border-gray-300 w-12 h-12 shadow-md group bg-[#fe9995] hover:bg-[#262626] transition-all duration-300">
                                <i
                                    aria-hidden="true" className="fas fa-headphones text-xl text-white group-hover:text-white rotate-y-180 group-hover:transform group-hover:rotate-360 transition-all duration-[1s]"
                                ></i>
                            </div>
                            <div>
                                <p className="text-lg font-bold  mb-0 uppercase text-gray-900 " style={{ fontFamily: 'Playfair Display' }}>ONLINE SUPPORT</p>
                                <p className="mt-1 font-medium  text-gray-600">Free Support 24/7 Per Week</p>
                            </div>
                        </div>

                        {/* Promotions */}
                        <div className="flex items-center space-x-4">
                            <div className="flex p-2 rounded-full items-center text-center justify-center border-2 border-gray-300 w-12 h-12 shadow-md group bg-[#fe9995] hover:bg-[#262626] transition-all duration-300">
                                <i
                                    aria-hidden="true" className="fas fa-gift text-xl text-white group-hover:text-white rotate-y-180 group-hover:transform group-hover:rotate-360 transition-all duration-[1s]"
                                ></i>
                            </div>
                            <div>
                                <p className="text-lg font-bold  mb-0 uppercase text-gray-900 " style={{ fontFamily: 'Playfair Display' }}>PROMOTIONS</p>
                                <p className="mt-1 font-medium  text-gray-600">10% Member Discount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-center gap-6 bg-white p-6">
                {/* <!-- Face Makeup Card --> */}
                <div class="relative w-140 h-60 bg-[#e9d4d0] overflow-hidden shadow-md">
                    <img src={banner1} alt="Face Makeup" class="absolute inset-0 w-full h-full object-cover object-right" />


                </div>

                {/* <!-- Makeup Kits Card --> */}
                <div class="relative w-140 h-60 bg-[#f7d8be] overflow-hidden shadow-md">
                    <img src={banner2} alt="Makeup Kits" class="absolute inset-0 w-full h-full object-cover object-left" />


                </div>
            </div>

            <section class="px-4 py-12 bg-white">
                {/* <!-- Heading --> */}
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-4xl !font-bold text-gray-500" style={{ fontFamily: 'Playfair Display' }}>FEATURING PRODUCTS</h2>
                    <p class="text-gray-500 italic  font-normal mt-2">Best Products On Sale.</p>
                    <div class="w-15  bg-red-300 mx-auto border-1 border-[#fe9995] mt-2"></div>
                </div>

                {/* <!-- Product Grid --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

                    {/* <!-- Product 1 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card1} alt="Product 1" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>NULLAM MALESUADA</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$20.00</p>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card2} alt="Product 2" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>QUISQUE VOLUTPAT MATTIS</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$20.00</p>
                    </div>

                    {/* <!-- Product 3 --> */}
                    <div class="text-center relative">
                        <div class="  relative">
                            <img src={card3} alt="Product 3" class=" h-60 object-contain" />
                            <span class="absolute top-2 right-5 bg-red-400 text-white text-xs p-2 !rounded-full">Sale</span>
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>FRAMED SLEEVE TOPS</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$30.00 - $100.00</p>
                    </div>

                    {/* <!-- Product 4 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card4} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>INTERDUM ORCI</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                    </div>

                    {/* <!-- Product 5 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card5} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>INTERDUM ORCI</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                    </div>

                    {/* <!-- Product 6 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card6} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>INTERDUM ORCI</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                    </div>


                    {/* <!-- Product 7 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card7} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>INTERDUM ORCI</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                    </div>


                    {/* <!-- Product 8 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card8} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>INTERDUM ORCI</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <p class="text-[#ff9995] text-lg font-bold mt-2" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                    </div>

                </div>
            </section>

            <section className="bg-cover bg-center bg-no-repeat py-16 px-4" style={{
                backgroundImage: `url(${bg})`,
                backgroundAttachment: 'fixed',
            }}>
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase">What they say ?</h2>
                    <p className="italic text-lg mt-2">Happy Clients</p>
                    <div className='flex gap-3  justify-around  mt-2'>
                        <button onClick={prevSlide} aria-label="Previous">
                            <ChevronLeftIcon className="w-8 h-8 text-white bg-black/30 hover:bg-black/50  rounded-full" />
                        </button>

                        <div className="relative bg-white text-gray-700 p-3  mt-10 rounded shadow-lg">
                            <FaQuoteLeft className="text-2xl text-gray-400 mb-4" />
                            <p className="text-base ">{quote}</p>
                            <FaQuoteRight className="text-2xl text-gray-400 mt-4 float-right" />
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] mb-3 w-6 h-6 bg-white rotate-45"></div>

                        </div>
                        <button onClick={nextSlide} aria-label="Next">
                            <ChevronRightIcon className="w-8 h-8 text-white bg-black/30 hover:bg-black/50 p-1 rounded-full" />
                        </button>
                    </div>

                    <div className="flex justify-center items-center flex-col mt-12">
                        <img src={image} alt={name} className="w-20 h-20 rounded-full border-4 border-white shadow-lg" />
                        <h4 className="text-white text-lg mt-4 font-semibold uppercase">{name}</h4>
                        <p className="text-white text-sm">{title}</p>
                    </div>


                </div>
            </section>
            <section class="px-4 py-12 bg-white">
                {/* <!-- Heading --> */}
                <div class="text-center mb-12">
                    <h2 class="text-3xl md:text-3xl !font-bold text-gray-500 " style={{ fontFamily: 'Playfair Display' }}>NEW ARRIVALS</h2>
                    <p class="text-gray-500 italic  font-normal mt-2">Best Products On Sale.</p>
                    <div class="w-15  bg-red-300 mx-auto border-1 border-[#fe9995] mt-2"></div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

                    {/* <!-- Product 1 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card4} alt="Product 1" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>interdum orci</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <bdi class="text-[#ff9995] text-lg font-bold mt-2 italic" style={{ fontFamily: 'Playfair Display' }}>$187.00</bdi>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card9} alt="Product 2" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Bouel variable</p>
                        <div class="text-[#ff9995] mt-1">★★★★★</div>
                        <bdi class="text-[#ff9995] text-lg font-bold mt-2 italic" style={{ fontFamily: 'Playfair Display' }}>$187.00</bdi>
                    </div>

                    {/* <!-- Product 3 --> */}
                    <div class="text-center relative">
                        <div class="  relative">
                            <img src={card5} alt="Product 3" class=" h-60 object-contain" />

                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Vitae lectus</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <bdi class="text-[#ff9995] text-lg font-bold mt-2 italic" style={{ fontFamily: 'Playfair Display' }}> $120.00</bdi>
                    </div>

                    {/* <!-- Product 4 --> */}
                    <div class="text-center">
                        <div >
                            <img src={card6} alt="Product 4" class=" h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Nemo enim ipsam</p>
                        <div class="text-[#ff9995] mt-1">☆☆☆☆☆</div>
                        <bdi class="text-[#ff9995] text-lg font-bold mt-2 italic" style={{ fontFamily: 'Playfair Display' }}>$150.00</bdi>
                    </div>
                </div>
            </section>


            <div className="max-w-7xl flex items-center justify-center  mx-auto gap-1 p-4">

                {/* Left Section: 4 Small Images */}
                <div className="grid grid-cols-2 grid-rows-2 gap-1">
                    <div className='overflow-hidden'>  <img
                        src={img1}
                        alt="Nail Polish"
                        className="w-full object-cover transform transition duration-[1200ms] ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-[1.06]"
                    />
                    </div>
                    <div className='overflow-hidden'>
                        <img

                            src={img2}
                            alt="Applying Blush"
                            className="w-full object-cover transform transition duration-[1200ms] ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-[1.06]"
                        /></div>
                    <div className='overflow-hidden'>
                        <img
                            src={img3}
                            alt="Applying Blush"
                            className="w-full object-cover transform transition duration-[1200ms] ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-[1.06]"
                        /></div>
                    <div className='overflow-hidden'>
                        <img
                            src={img4}
                            alt="Applying Blush"
                            className="w-full object-cover transform transition duration-[1200ms] ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-[1.06]"
                        /></div>
                </div>




                {/* Right Section: Model Image with lipstick */}
                <div className="relative row-span-2">
                    <img src={img5} alt="Glamorous Model" className="w-full h-full object-cover " />
                </div>

            </div>


            <div className="  px-30 py-12 bg-gray-100">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">FROM THE BLOG</h2>
                    <p className="text-gray-500 italic mt-2">Best Blog For You.</p>
                    <div className="w-16 h-[2px] bg-red-300 mx-auto mt-2" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 mx-20 lg:grid-cols-3">
                    {/* Card 1 */}
                    <div className="group" style={{ fontFamily: 'Playfair Display' }}>
                        <div className='overflow-hidden mb-3 '>
                            <img
                                src={banner3}
                                alt="Brand Whitening"
                                className="w-full h-64 object-cover hover:opacity-80  pointer-courser  transition-transform duration-[400ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
                            /></div>
                        <h4 className="!text-base font-old !text-gray-700" style={{ fontFamily: 'Playfair Display' }}>BRAND WHITENING</h4>
                        <p className="text-sm text-gray-500 mb-2">
                            <span className="inline-flex items-center gap-1">
                                <i className="fas fa-user text-gray-400"></i>
                                <span className='text-gray-400 ' style={{ fontFamily: 'Playfair Display' }}>by</span>
                                <span className="text-[#f59ca0] font-medium">ThemeFTC</span>
                            </span>
                        </p>
                        <p className="text-gray-600 text-sm  mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum
                        </p>
                        <a href="#" className="text-sm font-medium !no-underline !text-gray-700 hover:text-pink-500">
                            Read more &raquo;
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="group" style={{ fontFamily: 'Playfair Display' }}>
                        <div className='overflow-hidden mb-3'>
                            <img
                                src={banner4}
                                alt="Dolor Sit Amet"
                                className="w-full h-64 object-cover hover:opacity-80 transition-transform duration-[400ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
                            /></div>
                        <h4 className="!text-base font-bold !text-gray-700" >DOLOR SIT AMET</h4>
                        <p className="text-sm text-gray-500 mb-2">
                            <span className="inline-flex items-center gap-1">
                                <i className="fas fa-user text-gray-400"></i>
                                <span className='text-gray-400 '>by</span>
                                <span className="text-[#f59ca0] font-medium">ThemeFTC</span>
                            </span>
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum
                        </p>
                        <a href="#" className="text-sm font-medium !no-underline !text-gray-700 hover:text-pink-500">
                            Read more &raquo;
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="group" style={{ fontFamily: 'Playfair Display' }}>
                        <div className='overflow-hidden mb-3 '>
                            <img
                                src={banner5}
                                alt="Lorem Ipsum Dolor"
                                className="w-full h-64 object-cover  hover:opacity-80  transition-transform duration-[400ms] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.06]"
                            /></div>

                        <h4 className="!text-base font-bold !text-gray-700" style={{ fontFamily: 'Playfair Display' }}>LOREM IPSUM DOLOR</h4>
                        <p className="text-sm text-gray-500 mb-2">
                            <span className="inline-flex items-center gap-1">
                                <i className="fas fa-user text-gray-400" ></i>
                                <span className='text-gray-400 ' style={{ fontFamily: 'Playfair Display' }}>by</span>
                                <span className="text-[#f59ca0] font-medium">ThemeFTC</span>
                            </span>
                        </p>
                        <p className="text-gray-600 text-sm mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum
                        </p>
                        <a href="#" className="text-sm font-medium !no-underline !text-gray-700 hover:text-pink-500">
                            Read more &raquo;
                        </a>
                    </div>
                </div>
            </div>

          <div className="bg-white py-8">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-center">
      <div className="border p-4 flex justify-center items-center">
        <img src={bg5} alt="photodune" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
      <div className="border p-4 flex justify-center items-center">
        <img src={bg2} alt="themeforest" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
      <div className="border p-4 flex justify-center items-center">
        <img src={bg3} alt="codecanyon" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
      <div className="border p-4 flex justify-center items-center">
        <img src={bg4} alt="audiojungle" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
      <div className="border p-4 flex justify-center items-center">
        <img src={bg1} alt="activeden" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
      <div className="border p-4 flex justify-center items-center">
        <img src={bg5} alt="photodune" className="h-10 object-cover hover:opacity-80 transform hover:scale-105 transition-all duration-[200ms] ease-in-out" />
      </div>
    </div>
  </div>
</div>

<footer className="bg-[#1e1e1e] text-white text-sm">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700">
    
    {/* Logo and Description */}
    <div className="md:col-span-1">
      <img src={logo} alt="Cosmetic Logo" className="h-12 mb-4" />
      <p className="text-gray-400 mb-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
      </p>
      <div className="flex">
        <img src={payment}  alt="Visa" />
        
      </div>
    </div>

    {/* Contact */}
    <div>
      <h5 className="!font-black uppercase mb-4"style={{ fontFamily: 'Playfair Display' }}>Contact Us</h5>
      <p className="mb-2 "><strong ><i className="fa-solid fa-location-dot mb-3"></i> Address:</strong><br /><span className='text-gray-300'>17 Downtown St Victoria, Australia</span></p>
      <p className="mb-2"><strong><i className="fa-solid fa-envelope mb-3"></i> Email:</strong><br /><span className='text-gray-300'>Sales@Yoursite.Com</span></p>
      <p><strong><i className="fa-solid fa-phone mb-3"></i> Call Us:</strong><br /><span className='text-gray-300'>(+10) 123 456 7896</span></p>
    </div>

    {/* Information */}
    <div>
      <h5 className="!font-black uppercase mb-4"style={{ fontFamily: 'Playfair Display' }}>Information</h5>
      <ul className="space-y-2 ps-0 text-gray-300">
        <li>My Order</li>
        <li>My Account</li>
        <li>My Wishlist</li>
        <li>Order Tracking</li>
        <li>Help</li>
        <li>Special</li>
      </ul>
    </div>

    {/* My Account */}
    <div>
      <h5 className="!font-black uppercase mb-4"style={{ fontFamily: 'Playfair Display' }}>My Account</h5>
      <ul className="space-y-2 ps-0 text-gray-300">
        <li>Shipping Rate</li>
        <li>Safe & Guarantee</li>
        <li>Return Policy</li>
        <li>FAQ’s</li>
        <li>Contact Info</li>
        <li>Top Sellers</li>
      </ul>
    </div>

    {/* Service */}
    <div>
      <h5 className="!font-black uppercase mb-4"style={{ fontFamily: 'Playfair Display' }}>Service</h5>
      <ul className="space-y-2 ps-0 text-gray-300">
        <li>Shipping Rate</li>
        <li>Safe & Guarantee</li>
        <li>Return Policy</li>
        <li>FAQ’s</li>
        <li>Contact Info</li>
        <li>Order History</li>
      </ul>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-6 text-gray-300 text-sm">
    <p>Copyright © 2025 by <span className="text-white font-semibold">ThemeFTC</span>. All rights reserved.</p>
    <div className="flex space-x-3 mt-4 md:mt-0">
      <a href="#"><i className="fab fa-facebook-f bg-[#767676] text-white p-2 rounded hover:bg-[#3b5998]  transition" /></a>
      <a href="#"><i className="fab fa-twitter bg-[#767676] text-white p-2 rounded hover:bg-[#1DA1F2]  transition" /></a>
      <a href="#"><i className="fab fa-google-plus-g bg-[#767676] text-white p-2 rounded hover:bg-[#db4a39]  transition" /></a>
      <a href="#"><i className="fab fa-pinterest-p bg-[#767676] text-white p-2 rounded hover:bg-[#E60023]  transition" /></a>
      <a href="#"><i className="fab fa-instagram bg-[#767676] text-white p-2 rounded hover:bg-[#833AB4]  transition" /></a>
    </div>
  </div>
</footer>

  <BackToTopButton/>
        </div>
    )
}

export default Cosmetic
