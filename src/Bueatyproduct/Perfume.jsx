import React, { useEffect, useState } from 'react'
import Perfumeheader from './Perfumesheader'
import slider from '../assets/slider11-1.jpg'
import slider1 from '../assets/slider121.jpg'
import slider2 from '../assets/slider132.jpg'
import banner1 from '../assets/banner1-1-1.jpg'
import banner2 from '../assets/banner2-1-1.jpg'
import card1 from '../assets/13.jpg'
import card2 from '../assets/11.jpg'
import card3 from '../assets/9-1(1).jpg'
import card4 from '../assets/5-FILEminimizer.jpg'
import card5 from '../assets/12.jpg'
import card6 from '../assets/10-FILEminimizer.jpg'
import card7 from '../assets/7.jpg'
import card8 from '../assets/4-FILEminimizer.jpg'
import flower2 from '../assets/bgspan-h9.png';
import cat4 from '../assets/cat4.jpg'
import bg1 from '../assets/categori1.jpg'
import deal from '../assets/deal.jpg'
import bg2 from '../assets/back-test-111.jpg'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import test from '../assets/test3.png'
import blog3 from '../assets/1-FILEminimizer.jpg'
import blog4 from '../assets/4-FILEminimizer-1.jpg'
import blog5 from '../assets/3-FILEminimizer.jpg'
import blog6 from '../assets/2-FILEminimizer-1.jpg'
import fotter1 from '../assets/cat4.jpg'
import fotter2 from '../assets/11-2.jpg'
import fotter3 from '../assets/11-3-1.jpg'
import fotter4 from  '../assets/11-4.jpg'
import fotter5 from '../assets/11-5.jpg'
import fotter6 from '../assets/11-6.jpg'
import fotterbg from '../assets/back-footer1.png'
import payment from '../assets/payment.png'
import copy from '../assets/back-f2.png'
const Perfume = () => {
    const allCategories = [
        // First set of cards
        [
            {
                id: 'womens-perfume',
                title: "Women's Perfume",
                count: "16 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/cat1.jpg"
            },
            {
                id: 'bestseller',
                title: "Bestseller",
                count: "16 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/cat3.jpg"
            },
            {
                id: 'ladys-perfume',
                title: "Lady's Perfume",
                count: "2 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/test3.jpg"
            },
            {
                id: 'mens-perfume',
                title: "Men's Perfume",
                count: "16 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/cat2.jpg"
            }
        ],
        // Second set of cards
        [

            {
                id: 'bestseller',
                title: "Bestseller",
                count: "16 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/cat3.jpg"
            },
            {
                id: 'ladys-perfume',
                title: "Lady's Perfume",
                count: "2 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/test3.jpg"
            },
            {
                id: 'mens-perfume',
                title: "Men's Perfume",
                count: "16 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: "https://ordo.themeftc.com/wp-content/uploads/2018/11/cat2.jpg"
            },
            {
                id: 'travel-size',
                title: "Travel Size",
                count: "10 Products",
                description: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
                image: cat4,
            }
        ]
    ];



    const [timeLeft, setTimeLeft] = useState({
        days: 298,
        hours: 8,
        minutes: 4,
        seconds: 57,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;
                seconds -= 1;

                if (seconds < 0) {
                    seconds = 59;
                    minutes -= 1;
                }
                if (minutes < 0) {
                    minutes = 59;
                    hours -= 1;
                }
                if (hours < 0) {
                    hours = 23;
                    days -= 1;
                }
                if (days < 0) {
                    clearInterval(timer);
                    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const blogs = [
        {
            image: blog3,
            title: "Lorem Ipsum is simply dummy text",
            author: "ThemeFTC",
            date: "January 6, 2025",
            desc: "Suspendisse ac quam sed massa tincidunt blandit. Cras aliquam mi sit amet justo rutrum, at dignissim massa gravida. Donec eu libero aliquet, porttitor lacus."
        },
        {
            image: blog4,
            title: "Sed ut perspiciatis, unde omnis iste natus",
            author: "ThemeFTC",
            date: "January 6, 2025",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        },
        {
            image: blog5,
            title: "Dolor sit amet, consectetur, adipisci",
            author: "ThemeFTC",
            date: "January 2, 2025",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        },
        {
            image: blog6,
            title: "Dolor sit amet, consectetur, adipisci",
            author: "ThemeFTC",
            date: "January 2, 2025",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        }
    ];

    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const currentCategories = allCategories[currentSetIndex];

    const nextSet = () => {
        setCurrentSetIndex((prev) => (prev === allCategories.length - 1 ? 0 : prev + 1));
    };

    const prevSet = () => {
        setCurrentSetIndex((prev) => (prev === 0 ? allCategories.length + 1 : prev - 1));
    };


    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    // Number of cards visible at once
    const visibleCards = 3;

    return (
        <div>
            <Perfumeheader />


            <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
                
                <div className="carousel-inner">
                   
                    {/* Slide 1 */}
                    <div className="carousel-item active relative h-180">
                        <img
                            src={slider}
                            className="w-full h-full object-cover"
                            alt="Face Makeup"
                            style={{ objectPosition: 'right center' }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center text-center justify-center p-8 md:p-16 text-black">
                            <div className="sm:text-3xl lg:text-5xl !font-bold mb-2 tracking-wider cappitalize"
                                style={{ fontFamily: 'Playfair Display' }}>
                                Have a look at our
                            </div>
                            <div className="sm:text-3xl lg:text-3xl !font-bold text-[#666666] mb-4 uppercase tracking-wider"
                                style={{ fontFamily: 'Playfair Display' }}>
                                Perfume Store!
                            </div>
                            <p className="text-sm mb-6 w-50 px-15 leading-relaxed"
                                style={{ fontFamily: 'Arial', color: '#555' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis
                                eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.
                            </p>
                            <button className="bg-black !hover:bg-[f75c6c] text-white px-4 py-2 flex items-center justify-center !rounded-full font-medium transition-colors uppercase tracking-wider"
                                style={{
                                    fontFamily: 'Playfair Display',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                }}>
                                Shopping now! <i className="fa-solid fa-right-long bg-white rounded-full p-1 text-center  text-black"></i>
                            </button>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item relative  h-180">
                        <img
                            src={slider1}
                            className="w-full h-180 object-cover"
                            alt="Best Cosmetics"
                            style={{ objectPosition: 'left center' }}
                        />
                        <div className="absolute inset-0 flex flex-col right-35 items-end text-end justify-center p-8 md:p-12 text-black">
                            <div className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2  capitalize" style={{ fontFamily: 'Playfair Display' }}>
                                Perfume. Cosmetic. Beauty
                            </div>
                            <div className="sm:text-xl md:text-3xl text-[#666666]  font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                                Luxury And Best Perfume
                            </div>
                            <p className="text-sm mb-6 w-50 ps-25 text-gray-500" style={{ fontFamily: 'Arial' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis
                                eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.
                            </p>
                            <button className="bg-black hover:bg-[f75c6c] text-white px-4 py-2 flex items-center justify-center !rounded-full font-medium transition-colors uppercase tracking-wider"
                                style={{
                                    fontFamily: 'Playfair Display',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                }}>
                                Shopping now! <i className="fa-solid fa-right-long bg-white rounded-full p-1 text-center  text-black"></i>
                            </button>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item relative h-180">
                        <img
                            src={slider2}
                            className="w-full h-full object-cover"
                            alt="Natural Cosmetics"
                            style={{ objectPosition: 'center center' }}
                        />
                        <div className="absolute inset-0 flex flex-col items-center text-center justify-center p-8 md:p-16 text-black">
                            <div className="sm:text-3xl lg:text-5xl !font-bold mb-2 cappitalize tracking-wider"
                                style={{ fontFamily: 'Playfair Display' }}>
                                Perfume Store
                            </div>
                            <div className="sm:text-3xl lg:text-3xl !font-bold text-[#666666] mb-4  tracking-wider cappitalize"
                                style={{ fontFamily: 'Playfair Display' }}>
                                Best Cosmetic
                            </div>
                            <p className="text-sm mb-6 w-50 px-15 leading-relaxed"
                                style={{ fontFamily: 'Arial', color: '#555' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque volutpat mattis
                                eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non.
                            </p>
                            <button className="bg-black hover:bg-[f75c6c] text-white px-4 py-2 flex items-center justify-center !rounded-full font-medium transition-colors uppercase tracking-wider"
                                style={{
                                    fontFamily: 'Playfair Display',
                                    letterSpacing: '2px',
                                    fontSize: '0.9rem',
                                }}>
                                Shopping now! <i className="fa-solid fa-right-long bg-white rounded-full p-1 text-center  text-black"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                 <button className="carousel-control-next absolute -left-10 top-0 bottom-0 flex items-center justify-center  text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <i className="fa-solid fa-chevron-left bg-gray-500 opacity-10 !rounded-full p-3"></i>
                </button>

                <button className="carousel-control-next absolute -right-10 top-0 bottom-0 flex items-center justify-center  text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <i className="fa-solid fa-chevron-right bg-gray-500 opacity-10 !rounded-full p-3"></i>
                </button>
            </div>




            <div class="flex flex-wrap justify-center gap-6 mt-10 bg-white p-6">
                {/* <!-- Face Makeup Card --> */}
                <div class="relative w-140 h-60 bg-[#e9d4d0] overflow-hidden shadow-md">
                    <img src={banner1} alt="Face Makeup" class="absolute inset-0 w-full h-full object-cover object-right" />


                </div>

                {/* <!-- Makeup Kits Card --> */}
                <div class="relative w-140 h-60 bg-[#f7d8be] overflow-hidden shadow-md">
                    <img src={banner2} alt="Makeup Kits" class="absolute inset-0 w-full h-full object-cover object-left" />


                </div>
            </div>





            <div className="relative p-6 rounded-lg flex flex-col items-center justify-center">
                <img
                    src={flower2}
                    alt="background flower"
                    className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                />
                <em className="block text-gray-500 etxt-sm relative z-10" style={{ fontFamily: 'Arial' }}>
                    America’s Perfume Site
                </em>
                <h1 className="text-5xl !font-black mt-1 mb-8 relative  z-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
                    Our Products
                </h1>
            </div>

            <div className="flex justify-center gap-4 mb-6">
                <button className="px-4 py-2 !rounded-full bg-[#f75c6c] text-white font-semibold text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>women`s</button>
                <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#f75c6c] hover:text-white text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>men`s</button>
                <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#f75c6c] hover:text-white text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>lid`s</button>
                <button className="px-4 py-2 !rounded-full border border-gray-100 hover:bg-[#f75c6c] hover:text-white text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>top seller</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">

                {/* <!-- Product 1 --> */}
                <div class="text-center">
                    <div>
                        <img src={card1} alt="Von Far Away Bella" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Von Far Away Bella</p>
                    <div class="text-[#f75c6c] mt-1">★★★★★</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                </div>

                {/* <!-- Product 2 --> */}
                <div class="text-center">
                    <div>
                        <img src={card2} alt="Blackpink Avon" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Blackpink Avon</p>
                    <div class="text-[#f75c6c] mt-1">☆☆☆☆☆</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$210.00</p>
                </div>

                {/* <!-- Product 3 --> */}
                <div class="text-center relative">
                    <div>
                        <img src={card3} alt="Avon Musk Rose" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Musk Rose</p>
                    <div class="text-[#f75c6c] mt-1">☆☆☆☆☆</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$35.00</p>
                </div>

                {/* <!-- Product 4 --> */}
                <div class="text-center">
                    <div>
                        <img src={card4} alt="Semper Susceipit" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Semper Susceipit</p>
                    <div class="text-[#f75c6c] mt-1">★★★★★</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$20.00</p>
                </div>

                {/* <!-- Product 5 --> */}
                <div class="text-center">
                    <div>
                        <img src={card5} alt="Avon Far Away" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Far Away</p>
                    <div class="text-[#f75c6c] mt-1">☆☆☆☆☆</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$150.00</p>
                </div>

                {/* <!-- Product 6 --> */}
                <div class="text-center">
                    <div>
                        <img src={card6} alt="Avon Soft Musk Pink" class="h-60 object-contain" />
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Soft Musk Pink</p>
                    <div class="text-[#f75c6c] mt-1">★★★★★</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                </div>

                {/* <!-- Product 7 --> */}
                <div class="text-center">
                    <div class="relative">
                        <img src={card7} alt="Avon My Everything" class="h-60 object-contain" />
                        <span class="absolute top-2 right-5 bg-red-400 text-white text-xs p-2 !rounded-full">Sale</span>
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon My Everything</p>
                    <div class="text-[#f75c6c] mt-1">★★★★★</div>
                    <p class="text-[#f75c6c] text-lg font-bold  italic capitalide mt-2" style={{ fontFamily: 'Playfair Display' }}>$120.00</p>
                </div>

                {/* <!-- Product 8 --> */}
                <div class="text-center">
                    <div class="relative">
                        <img src={card8} alt="Framed Skewe Tops" class="h-60 object-contain" />
                        <span class="absolute top-2 right-5 bg-red-400 text-white text-xs p-2 !rounded-full">Sale</span>
                    </div>
                    <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Framed Skewe Tops</p>
                    <div class="text-[#f75c6c] mt-1">☆☆☆☆☆</div>
                    <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$30.00 - $100.00</p>
                </div>

            </div>
            <div className='flex justify-center mb-10 items-center my-10'>
                <button className="bg-black !hover:bg-[f75c6c] text-white px-4 py-2 flex items-center justify-center !rounded-full font-medium transition-colors uppercase "
                    style={{
                        fontFamily: 'Playfair Display',
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                    }}>
                    <i className="fa-solid fa-right-long bg-white rounded-full p-1 text-center  text-black"></i>view all products
                </button>
            </div>



            <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 "
                style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="relative p-6 rounded-lg flex flex-col items-center justify-center">
                        <img
                            src={flower2}
                            alt="background flower"
                            className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                        />
                        <em className="block text-gray-500 etxt-sm relative z-10" style={{ fontFamily: 'Arial' }}>
                            America’s Perfume Site
                        </em>
                        <h1 className="text-5xl !font-black mt-1 mb-8 relative  z-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
                            Our Categories
                        </h1>
                    </div>




                    {/* Categories Grid */}
                    <div className="relative  flex items-center justify-center"
                    ><button
                        onClick={prevSet}
                        className="bg-[#7a7d7b] hover:bg-gray-300 rounded-full w-10 h-10 flex items-center opacity-20 text-white relative !rounded-full left-5 justify-center transition-colors"
                        aria-label="Previous set"
                    >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {currentCategories.map((category) => (
                                <div key={category.id} className=" rounded-3xl bg-white overflow-hidden  shadow-md flex flex-col items-center  text-center ">
                                    {/* Top Heading Section */}
                                    <div className="bg-[#807778] hover:bg-[#f75c6c] text-white w-full rounded-t-3xl py-10">
                                        <h6 className="text-sm font-semibold mb-4">{category.title}</h6>
                                    </div>

                                    {/* Circular Image */}
                                    <div className="relative -mt-10">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                                        />
                                    </div>

                                    {/* Product Count */}
                                    <p className="text-[#f75c6c] mt-3 font-medium capitalize" style={{ fontFamily: '"Playfair Display"' }}>{category.count} Products</p>

                                    {/* Description */}
                                    <p className="box-border text-[#666] cursor-pointer block font-sans text-sm font-normal  leading-7 mb-2 mx-0 mt-0 pb-0 px-3 text-center w-[270px]">
                                        {category.description}
                                    </p>

                                    {/* CTA Button */}
                                    <div className="mt-1 mb-4 ">
                                        <button
                                            className="  bg-[#ebebeb] hover:bg-[#dfdfdf  !rounded-[50px] box-border text-[#666] cursor-pointer  block font-playfair !text-sm font-normal leading-7
 mb-0 mx-[55px] mt-0 max-w-[160px]  py-[5px] px-[15px]  text-center  w-[160px]  flex items-center justify-center  transition-colors "  style={{ fontFamily: '"Playfair Display"' }}>
                                            View all product
                                            <i className="fa-solid fa-right-long text-white bg-[#666] p-1 ms-2  !rounded-full"></i>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={prevSet}
                            className="bg-[#7a7d7b] hover:bg-gray-300 flex items-center opacity-20 text-white relative  right-5 !rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                            aria-label="Previous set"
                        >
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>


                    </div>

                </div>
            </div>



            <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 ">

                <div className="max-w-7xl mx-auto">
                    <div className="relative p-6 rounded-lg flex flex-col h-auto items-center justify-center">
                        <img
                            src={flower2}
                            alt="background flower"
                            className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                        />
                        <em className="block text-gray-500 etxt-sm relative z-10" style={{ fontFamily: 'Arial' }}>
                            America’s Perfume Site
                        </em>
                        <h1 className="text-5xl !font-black  mt-1 mb-8 relative  z-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
                            deals of the day
                        </h1>
                    </div>
                </div>

                <div className="flex gap-3 max-w-9xl justify-center h-100 mx-auto">
                    <div class="text-center items-center flex flex-col">
                        <div>
                            <img src={card6} alt="Avon Soft Musk Pink" class="h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Soft Musk Pink</p>
                        <div class="text-[#f75c6c] mt-1">★★★★★</div>
                        <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>

                        <div class="text-center">
                            <div>
                                <img src={card6} alt="Avon Soft Musk Pink" class="h-60 object-contain" />
                            </div>
                            <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Soft Musk Pink</p>
                            <div class="text-[#f75c6c] mt-1">★★★★★</div>
                            <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                        </div>

                    </div>

                    <div className="py-12 px-20  items-center justify-center flex text-white text-center" style={{ backgroundImage: `url(${deal})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        {/* Main Heading */}
                        <div className='flex flex-col items-center  items-center justify-center'>
                            <h1 className="text-4xl md:text-5xl text-black font-bold mb-4 capitalize" style={{ fontFamily: 'Playfair Display' }}>Big Sale Today</h1>

                            {/* Discount Offer */}
                            <h4 className="!text-base  !text-[#262626] mb-8 px-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
                                Get 30% Off Your Order Of $200 Or More
                            </h4>

                            {/* Countdown Timer */}
                            <div className="flex text-black bg-[#f7f7f7] items-center justify-center rounded-full shadow-md px-4 py-2 mt-20">
                                <div className="flex space-x-15">
                                    <div className="text-center capitalize " style={{ fontFamily: 'Roboto Slab' }}>
                                        <div className="text-2xl font-bold italic ">{timeLeft.days}</div>
                                        <div className="text-sm uppercase">Days</div>
                                    </div>
                                    <div className="text-center capitalize " style={{ fontFamily: 'Roboto Slab' }}>
                                        <div className="text-2xl font-bold italic ">{timeLeft.hours}</div>
                                        <div className="text-sm uppercase">Hours</div>
                                    </div>
                                    <div className="text-center capitalize " style={{ fontFamily: 'Roboto Slab' }}>
                                        <div className="text-2xl font-bold italic">{timeLeft.minutes}</div>
                                        <div className="text-sm uppercase">Mins</div>
                                    </div>
                                    <div className="text-center capitalize " style={{ fontFamily: 'Roboto Slab' }}>
                                        <div className="text-2xl font-bold italic">{timeLeft.seconds}</div>
                                        <div className="text-sm uppercase">Secs</div>
                                    </div>
                                </div>
                            </div>
                            {/* CTA Button */}
                            <div className='flex justify-center mb-10 items-center  my-10'>
                                <button className=" !hover:bg-[f75c6c] text-white px-4 py-2 flex items-center bg-[#383838] justify-center !rounded-full font-medium transition-colors capitalize"
                                    style={{
                                        fontFamily: 'Playfair Display',
                                        letterSpacing: '2px',
                                        fontSize: '0.9rem',

                                    }}>
                                    <i className="fa-solid fa-right-long bg-white rounded-full p-1 text-center  text-black "></i>Shopping now!
                                </button>
                            </div>
                        </div>

                    </div>
                    <div class="text-center items-center justify-center flex flex-col">
                        <div>
                            <img src={card6} alt="Avon Soft Musk Pink" class="h-60 object-contain" />
                        </div>
                        <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Soft Musk Pink</p>
                        <div class="text-[#f75c6c] mt-1">★★★★★</div>
                        <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>

                        <div class="text-center">
                            <div>
                                <img src={card6} alt="Avon Soft Musk Pink" class="h-60 object-contain" />
                            </div>
                            <p class="mt-4 font-medium text-gray-500" style={{ fontFamily: 'Playfair Display' }}>Avon Soft Musk Pink</p>
                            <div class="text-[#f75c6c] mt-1">★★★★★</div>
                            <p class="text-[#f75c6c] text-lg font-bold mt-2 italic capitalize" style={{ fontFamily: 'Playfair Display' }}>$187.00</p>
                        </div>

                    </div>
                </div>

            </div>


            <section
                className="text-white overflow-x-hidden overflow-y-hidden"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Overlay */}
                <div className="flex justify-center items-center ">
                    <div className="relative z-10 max-w-4xl mx-auto text-center py-16">

                        {/* Subtitle */}
                        <p className="italic text-yellow-200 mb-2 text-sm">
                            America's Perfume Site
                        </p>

                        {/* Title */}
                        <h2 className="text-4xl font-bold mb-4">
                            What’s Client Say ?
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto mb-8">
                            Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quisque volutpat
                            mattis eros. Nullam malesuada erat ut turpis. Aenean dignissim pellentesque.
                        </p>

                        {/* Carousel */}
                        <div id="testimonialCarousel" className="relative carousel slide" data-bs-ride="carousel">

                            {/* Slides */}
                            <div className="carousel-inner">

                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <div className='flex flex-row items-center mx-auto justify-center gap-2'>
                                        <img src={blog2} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 2" />
                                        <img src={blog1} className=" rounded-full shadow-lg" alt="Client 1" />
                                        <img src={test} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 3" />
                                    </div>

                                    <div className="mt-6">
                                        <p className="font-semibold text-xl">Mrs. Jesica</p>
                                        <p className="italic text-sm">CEO & Co-Founder</p>
                                    </div>
                                </div>

                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <div className='flex flex-row items-center mx-auto justify-center gap-2'>
                                        <img src={blog2} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 2" />
                                        <img src={blog1} className=" rounded-full shadow-lg" alt="Client 1" />
                                        <img src={test} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 3" />
                                    </div>
                                    <div className="mt-6">
                                        <p className="font-semibold text-xl">Ms. Alisha</p>
                                        <p className="italic text-sm">Marketing Head</p>
                                    </div>
                                </div>

                                {/* Slide 3 */}
                                <div className="carousel-item">
                                    <div className='flex flex-row items-center mx-auto justify-center gap-2'>
                                        <img src={blog2} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 2" />
                                        <img src={blog1} className=" rounded-full shadow-lg" alt="Client 1" />
                                        <img src={test} className=" h-18 w-18 rounded-full shadow-lg" alt="Client 3" />
                                    </div>
                                    <div className="mt-6">
                                        <p className="font-semibold text-xl">Dr. Riya</p>
                                        <p className="italic text-sm">Beauty Expert</p>
                                    </div>
                                </div>
                            </div>

                            {/* Controls */}
                            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark/40 p-3 rounded-full" aria-hidden="true"></span>
                            </button>

                            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark/40 p-3 rounded-full" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto">
                <div className="relative p-6 rounded-lg flex flex-col h-auto items-center justify-center">
                    <img
                        src={flower2}
                        alt="background flower"
                        className="absolute left-1/2 top-1/2 w-48 h-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                    />
                    <em className="block text-gray-500 etxt-sm relative z-10" style={{ fontFamily: 'Arial' }}>
                        America’s Perfume Site
                    </em>
                    <h1 className="text-5xl !font-black  mt-1 mb-8 relative  z-10 capitalize" style={{ fontFamily: 'Playfair Display' }}>
                        deals of the day
                    </h1>
                </div>
            </div>

            <div className="relative flex items-center justify-center mt-10 max-w-7xl mx-auto">

                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="absolute -left-5 top-40 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center !rounded-full hover:bg-black transition-colors duration-300 z-20"
                >
                    &#10094;
                </button>

                {/* Slider Track */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-100 mt-10 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                            width: `${(blogs.length / visibleCards) * -100}%`,
                        }}
                    >
                        {blogs.concat(blogs).map((blog, idx) => (
                            <div key={idx} className="w-111 flex-shrink-0 p-1 box-border">
                                <div className="text-center">
                                    <div className="overflow-hidden rounded-[20px]">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105 hover:opacity-40"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-lg font-bold">{blog.title}</h3>
                                    <p className="text-sm text-gray-500 italic mt-2">
                                        By <span className="text-red-500">{blog.author}</span> / {blog.date}
                                    </p>
                                    <div className="w-12 h-[2px] bg-red-500 mx-auto mt-2"></div>
                                    <p className="mt-4 text-gray-600 leading-relaxed">{blog.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="absolute -right-5 top-40 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center !rounded-full hover:bg-black transition-colors duration-300 z-20"
                >
                    &#10095;
                </button>
            </div>



            <footer class=" text-gray-800 pt-10 mt-10" style={{
                    backgroundImage: `url(${fotterbg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* <!-- Contact Us --> */}
                    <div>
                        <h2 class="!text-base font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>CONTACT US</h2>
                        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio. Quisque vulputat mattis eros. Nullam malesuada erat ut.</p>
                        <p><i class="fas fa-map-marker-alt"></i> Address: 8901 Marmora Road, Glasgow, DO4 89 GR, New York</p>
                        <p><i class="fas fa-phone"></i> Telephone: (+1) 866-540-3229</p>
                        <p><i class="fas fa-envelope"></i> Email: sales@yoursite.com</p>
                    </div>

                    {/* <!-- Information --> */}
                    <div>
                        <h2 class="!text-base font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>INFORMATION</h2>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">About Us</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Stores</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Privacy Policy</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Terms & Conditions</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Testimonials</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Jobs</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Return Policy</a></li>
                        </ul>
                    </div>

                    {/* <!-- Customer Services --> */}
                    <div>
                        <h2 class="!text-base font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>CUSTOMER SERVICES</h2>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Delivery Information</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Shipping</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Product Returns</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Affiliate Account</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">F.A.Q</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Contact Us</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Forgot Password</a></li>
                        </ul>
                    </div>

                    {/* <!-- My Account --> */}
                    <div>
                        <h2 class="!text-base font-bold mb-4 capitalize" style={{ fontFamily: 'Playfair Display' }}>MY ACCOUNT</h2>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline ">My account</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Order History</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Downloads</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Newsletter Subscription</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Transactions</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">Wishlist</a></li>
                            <li><a href="#" class="hover:text-pink-600 text-black !no-underline">My Personal Info</a></li>
                        </ul>
                    </div>

                    {/* <!-- Photo Instagram --> */}
                    <div>
                        <h2 class="!text-base font-bold mb-4 capitalize" style={{ fontFamily: 'Playfair Display' }}>PHOTO INSTAGRAM</h2>
                        <div class="grid grid-cols-3 gap-2">
                            <img src={fotter1} alt="Instagram 1"  />
                            <img src={fotter2} alt="Instagram 2"  />
                            <img src={fotter3} alt="Instagram 3"  />
                            <img src={fotter4} alt="Instagram 4"  />
                             <img src={fotter5} alt="Instagram 4"  />
                              <img src={fotter6} alt="Instagram 4"  />
                        </div>
                    </div>
                 </div>

                    {/* <!-- Newsletter and Follow Us --> */}

              
                   <div class="container mx-auto px-4 mt-3  flex justify-between items-center border-t border-gray-300 pt-4 " >
    <div class="flex items-center">
        <div>
            <h3 class="!text-base font-semibold text-[#666666]capitalize" style={{ fontFamily: 'Playfair Display' }}>NEWSLETTER SIGN-UP</h3>
            <p class="text-sm text-[#666666]">Subscribe to our latest news to be updated</p>
        </div>
        <div class="flex  gap-3 ml-5">
            <input type="email" placeholder="Enter your email..." class="p-2 w-105 border-2  border-[#999] !rounded-full focus:outline-none" />
            <button class="bg-[#262626] text-white w-30 px-4 py-2 !rounded-full hover:bg-gray-800">Subscribe</button>
        </div>
    </div>
    <div class="flex items-center ms-4 gap-2">
        <p class="text-base font-black text-[#262626] mt-4 capitalize" style={{ fontFamily: 'Playfair Display' }}>FOLLOW US</p>
        <div class="flex space-x-4">
           <a href="#" className='flex items-center justify-center text-center !no-underline'><i className=" fab fa-facebook-f bg-[#767676] text-white h-10 w-10 !rounded-full hover:bg-[#3b5998]  transition pt-2.5  " /></a>
      <a href="#" className='flex items-center justify-center text-center !no-underline'><i className=" fab fa-twitter bg-[#767676] text-white h-10 w-10 !rounded-full hover:bg-[#1DA1F2]  transition pt-2.5  " /></a>
      <a href="#" className='flex items-center justify-center text-center !no-underline'><i className=" fab fa-google-plus-g bg-[#767676] text-white h-10 w-10 !rounded-full hover:bg-[#db4a39]  transition pt-2.5  " /></a>
      <a href="#" className='flex items-center justify-center text-center !no-underline'><i className=" fab fa-pinterest-p bg-[#767676] text-white h-10 w-10 !rounded-full hover:bg-[#E60023]  transition pt-2.5  " /></a>
      <a href="#" className='flex items-center justify-center text-center !no-underline'><i className=" fab fa-instagram bg-[#767676] text-white h-10 w-10 !rounded-full hover:bg-[#833AB4]  transition pt-2.5  " /></a>
        </div>
    </div>
</div>

                    {/* <!-- Copyright --> */}
                    <div class=" flex  justify-between   px-30 mx-0 mt-4 text-center text-sm border-t border-gray-300 pt-4"style={{
                    backgroundImage: `url(${copy})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                        <p>Copyright © 2025 by ThemeFTC. All rights reserved.</p>
                        <div class="flex justify-center space-x-2 mt-2">
                            <img src={payment} alt="Visa" class="h-6" />
                            
                        </div>
                    </div>

            </footer>


        </div >
    )
}

export default Perfume
