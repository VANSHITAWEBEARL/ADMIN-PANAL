import React, { useState } from "react";
import Shopeheader from "./Shopeheader";
import baner2 from "../assets/banner2-2.jpg";
import { Link } from "react-router";
import img1 from "../assets/16-1.jpg"
import img2 from "../assets/14.jpg"
import img3 from "../assets/7-1.jpg"
import img4 from "../assets/9.jpg"
import img5 from "../assets/8-2.jpg"
import img6 from "../assets/3-3.jpg"
import img7 from "../assets/17.jpg"
import img8 from "../assets/4-11.jpg"
import img9 from "../assets/18.jpg"
import img10 from "../assets/2-4.jpg"
import img11 from "../assets/17-2.jpg"
import img12 from "../assets/6-1.jpg"
import bg1 from "../assets/banner-shop.jpg"
import list1 from "../assets/makeup.png"
import list2 from "../assets/lotion.png"
import list3 from "../assets/make-up.png"
import list4 from "../assets/sapling.png"
import Footer1 from "../Bueatyproduct/Footer1";


const Masonryshop = () => {


    const [showFilter, setShowFilter] = useState(false);

    const products = [
        {
            name: "Oshea Herbals",
            img: img1,
            price: 21.00,
            originalPrice: null,
            rating: 0,
            sale: false
        },
        {
            name: "Fracas Rebel",
            img: img2,
            price: 25.00,
            originalPrice: 35.00,
            rating: 0,
            sale: true
        },
        {
            name: "Farsali",
            img: img3,
            price: 22.00,
            originalPrice: null,
            rating: 0,
            sale: false
        },
        {
            name: "Innisfree",
            img: img4,
            price: 20.00,
            originalPrice: 30.00,
            rating: 0,
            sale: true
        },
        {
            name: "Foundation Blk",
            img: img5,
            price: 25.00,
            originalPrice: 32.00,
            rating: 0,
            sale: true
        },
        {
            name: "Forever Dream Dollar Skl",
            img: img6,
            price: 45.00,
            originalPrice: 55.00,
            rating: 0,
            sale: true
        },
        {
            name: "Foundation Blk",
            img: img7,
            price: 25.00,
            originalPrice: 32.00,
            rating: 5,
            sale: true
        },
        {
            name: "Framed Sleeve Tops",
            img: img8,
            price: 30.00,
            originalPrice: 40.00,
            rating: 0,
            sale: true
        },
        {
            name: "Framed Sleeve Tops",
            img: img9,
            price: 30.00,
            originalPrice: 40.00,
            rating: 0,
            sale: true
        },
        {
            name: "Framed-Skince",
            img: img10,
            price: 25.00,
            originalPrice: null,
            rating: 5,
            sale: false
        },
        {
            name: "Framed-Skince Tops Group",
            img: img11,
            price: 30.00,
            originalPrice: null,
            rating: 0,
            sale: false
        },
        {
            name: "France",
            img: img12,
            price: 45.00,
            originalPrice: null,
            rating: 0,
            sale: false
        },
    ];




    return (
        <div>
            <Shopeheader />

            <div className="relative -z-12 bg-cover bg-position-[center_left_-15rem] h-95 py-20"
                style={{ backgroundImage: `url(${bg1})` }}>
                {/* <!-- Overlay --> */}
                <div class="absolute"></div>

                <div class="relative z-10 text-center text-white max-w-5xl mx-auto">
                    {/* <!-- Title & Breadcrumb --> */}
                    <h1 class="!text-3xl font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>Shop</h1>
                    <div class="mt-2 text-lg">
                        <Link to='/Home' className="!no-underline !text-white "><span class="font-semibold text-2xl hover:text-[#fe9995] capitalize" style={{ fontFamily: 'Playfair Display' }}>Home</span></Link>
                        <span class="mx-1 text-gray-300">/</span>
                        <span class="text-[#fe9995] text-2xl font-semibold capitalize" style={{ fontFamily: 'Playfair Display' }}>Shop</span>
                    </div>

                    {/* <!-- Categories --> */}
                    <div class="mt-6 flex flex-wrap justify-center gap-4">
                        {/* <!-- Item --> */}
                        <div class="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list1} class="w-10 h-10" alt="Beauty Organic" />
                            <span>Beauty Organic (7)</span>
                        </div>
                        <span class="text-gray-300">|</span>

                        <div class="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list2} class="w-10 h-10" alt="Natural" />
                            <span>Natural (9)</span>
                        </div>
                        <span class="text-gray-300">|</span>

                        <div class="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list3} class="w-10 h-10" alt="Natural Beauty" />
                            <span>Natural Beauty (8)</span>
                        </div>
                        <span class="text-gray-300">|</span>

                        <div class="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list4} class="w-10 h-10" alt="Perfume" />
                            <span>Perfume (16)</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex mx-auto justify-center items-center ">
                {/* Sidebar */}



                {/* Product Grid */}
                <main className="flex justify-center items-center flex-col mt-10 gap-3">
                    <div className="w-300 border m-0 p-2 flex flex-col md:flex-row items-center justify-between gap-4 relative">


                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="flex items-center gap-1 text-sm font-medium hover:text-[#fe9995] transition"
                        >
                            Filter
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${showFilter ? "rotate-180" : ""
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Center - Results Text */}
                        <div className="text-sm font-normal text-gray-700">
                            Showing 1–12 of 181 results
                        </div>

                        {/* Right Side - Sort Dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-700">Sort by:</span>
                            <select className="border px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
                                <option>Default sorting</option>
                                <option>Sort by popularity</option>
                                <option>Sort by latest</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </div>

                        {/* Filter Dropdown Content */}
                        {showFilter && (
                            <div
                                className={`absolute top-full left-0 w-full bg-white z-50 p-6 grid md:grid-cols-4 gap-8 border transition-all duration-500 ease-in-out transform origin-top
      ${showFilter ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
    `}
                                style={{
                                    transformOrigin: "top",
                                }}
                            >
                                {/* Price */}
                                <div className="border p-4">
                                    <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>PRICE</h4>
                                    <input
                                        type="range"
                                        min="10"
                                        max="420"
                                        className="w-full accent-gray-400"
                                    />
                                    <button className="mt-4 w-full border py-2 text-sm font-bold text-gray-700 hover:bg-gray-100">
                                        FILTER
                                    </button>
                                    <p className="text-sm mt-3">
                                        <span className="font-bold">Price:</span> $10 — $420
                                    </p>
                                </div>

                                {/* Color */}
                                <div className="border  p-4">
                                    <p className="font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>Color</p>
                                    <ul className="grid grid-cols-2 p-0 gap-y-2 text-sm">
                                        {[
                                            { name: "Beige", hex: "#e6dbc9" },
                                            { name: "Blue", hex: "#1e73be" },
                                            { name: "Gray", hex: "#bfbfbf" },
                                            { name: "Orange", hex: "#e8983f" },
                                            { name: "Red", hex: "#e74c3c" },
                                            { name: "Black", hex: "#000000" },
                                            { name: "Brown", hex: "#5a381e" },
                                            { name: "Green", hex: "#8bc34a" },
                                            { name: "Pink", hex: "#f78da7" },
                                            { name: "Taupe", hex: "#a58a7c" },
                                        ].map((color) => (
                                            <li key={color.name} className="flex items-center gap-2">
                                                <span
                                                    className="w-3.5 h-3.5 rounded-full border border-gray-300"
                                                    style={{ backgroundColor: color.hex }}
                                                ></span>
                                                {color.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Size */}
                                <div className="border p-4">
                                    <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>SIZE</h4>
                                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                                        {["S", "M", "L", "XL"].map((size) => (
                                            <label key={size} className="flex items-center gap-2">
                                                <input type="checkbox" className="accent-gray-500" />
                                                {size}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Brand */}
                                <div className="border p-4">
                                    <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>BRAND</h4>
                                    <div className="flex flex-col gap-2 text-sm">
                                        {[
                                            "Arizona Fruit",
                                            "FreshPoint Company",
                                            "Gebbers Farms",
                                            "Matson Fruit",
                                        ].map((brand) => (
                                            <label key={brand} className="flex items-center gap-2">
                                                <input type="checkbox" className="accent-gray-500" />
                                                {brand}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>

                    {/* Product Grid - Dynamic based on view mode */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="relative w-full flex md:flex-col gap-6 items-center p-6 border-b border-gray-100 transition-shadow duration-300"
                            >
                                {/* Product Image */}
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-70"
                                />

                                {/* Sale Badge */}
                                {product.sale && (
                                    <span className="absolute top-2 right-2 bg-[#fe9995] text-white text-xs px-2 py-2.5 rounded-full">
                                        Sale
                                    </span>
                                )}

                                {/* Product Details */}
                                <div className='text-center'>
                                    <p
                                        className="text-gray-900 text-lg font-bold mb-1"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        {product.name}
                                    </p>

                                    {/* Ratings */}
                                    <div className="text-[#fe9995] my-1 text-sm">
                                        {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
                                    </div>

                                    {/* Price */}
                                    <p
                                        className="text-lg font-medium text-gray-800 mb-3 capitalize"
                                        style={{ fontFamily: 'Playfair Display, italic' }}
                                    >
                                        ${product.price.toFixed(2)}
                                        {product.originalPrice && (
                                            <span className="line-through text-sm text-gray-400 ml-2">
                                                ${product.originalPrice.toFixed(2)}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Pagination */}
                    <div className="flex justify-center mt-6 gap-2">
                        {[1, 2, 3, "...", 15, "Next"].map((pg, idx) => (
                            <button
                                key={idx}
                                className={`px-3 py-1 border rounded ${pg === 1 ? "bg-[#fe9995] text-white hover:bg-[#fe9995" : "bg-white hover:bg-[#fe9995]"}`}
                            >
                                {pg}
                            </button>
                        ))}
                    </div>
                </main>
            </div >
            <Footer1 />
        </div >
    );
};

export default Masonryshop;
