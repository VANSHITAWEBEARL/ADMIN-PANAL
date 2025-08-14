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


const Fullwidth = () => {

    const [viewMode, setViewMode] = useState("grid3");
    const [showFilter, setShowFilter] = useState(false);





    return (
        <div>
            <Shopeheader />

            <div className="relative bg-cover bg-position-[center_left_-15rem] h-95 py-20"
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
                        {/* Left Side - View Icons */}
                        <div className="flex gap-4 text-gray-700">
                            {/* Grid 3x3 */}
                            <button
                                onClick={() => setViewMode('grid3')}
                                title="Grid-3-columns"
                                className={`p-1 m-0 transition-colors duration-200 ${viewMode === 'grid3' ? 'text-[#fe9995]' : 'hover:text-[#fe9995]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="currentColor">
                                    <rect width="5" height="5" />
                                    <rect x="7" width="5" height="5" />
                                    <rect x="14" width="5" height="5" />
                                    <rect y="7" width="5" height="5" />
                                    <rect x="7" y="7" width="5" height="5" />
                                    <rect x="14" y="7" width="5" height="5" />
                                    <rect y="14" width="5" height="5" />
                                    <rect x="7" y="14" width="5" height="5" />
                                    <rect x="14" y="14" width="5" height="5" />
                                </svg>
                            </button>

                            {/* Grid 4x4 */}
                            <button
                                onClick={() => setViewMode('grid4')}
                                title="Grid-4-columns"
                                className={`p-1 transition-colors duration-200 ${viewMode === 'grid4' ? 'text-[#fe9995]' : 'hover:text-[#fe9995]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="currentColor">
                                    <rect width="4" height="4" />
                                    <rect x="5" width="4" height="4" />
                                    <rect x="10" width="4" height="4" />
                                    <rect x="15" width="4" height="4" />
                                    <rect y="5" width="4" height="4" />
                                    <rect x="5" y="5" width="4" height="4" />
                                    <rect x="10" y="5" width="4" height="4" />
                                    <rect x="15" y="5" width="4" height="4" />
                                    <rect y="10" width="4" height="4" />
                                    <rect x="5" y="10" width="4" height="4" />
                                    <rect x="10" y="10" width="4" height="4" />
                                    <rect x="15" y="10" width="4" height="4" />
                                    <rect y="15" width="4" height="4" />
                                    <rect x="5" y="15" width="4" height="4" />
                                    <rect x="10" y="15" width="4" height="4" />
                                    <rect x="15" y="15" width="4" height="4" />
                                </svg>
                            </button>

                            {/* List View */}
                            <button
                                onClick={() => setViewMode('list')}
                                title="List-view"
                                className={`p-1 transition-colors duration-200 ${viewMode === 'list' ? 'text-[#fe9995]' : 'hover:text-[#fe9995]'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 18 18" fill="currentColor">
                                    <rect x="0" width="3" height="2" />
                                    <rect x="5" width="18" height="2" />
                                    <rect x="0" y="8" width="3" height="2" />
                                    <rect x="5" y="8" width="18" height="2" />
                                    <rect x="0" y="16" width="3" height="2" />
                                    <rect x="5" y="16" width="18" height="2" />
                                </svg>
                            </button>
                        </div>
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
      <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>PRICE</h4>
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
      <p className="font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>Color</p>
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
      <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>SIZE</h4>
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
      <h4 className="!font-bold uppercase !text-lg mb-3 border-b  tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>BRAND</h4>
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
                    <div className={`${viewMode === 'grid3' ? 'grid grid-cols-1 md:grid-cols-3 gap-10' :
                        viewMode === 'grid4' ? 'grid grid-cols-1 md:grid-cols-4 gap-8' :
                            'flex flex-col gap-6'
                        } `}>
                        {/* Product cards */}
                        {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((img, index) => (
                            <div
                                key={index}
                                className={`relative ${viewMode === 'list'
                                    ? 'w-full flex md:flex-col gap-6 items-start p-6 border-b border-gray-100 transition-shadow duration-300'
                                    : 'w-full transition-shadow duration-300'
                                    }`}
                            >
                                {/* Product Image */}
                                <img
                                    src={img}
                                    alt="Product"
                                    className={`${viewMode === 'list'
                                        ? 'h-55   object-contain'
                                        : "w-70"
                                        }`}
                                />

                                {/* Sale on 5th and 9th card */}
                                {(index === 4 || index === 8) && (
                                    <span className="absolute top-2 right-2 bg-[#fe9995] text-white text-xs px-2 py-2.5 rounded-full">
                                        Sale
                                    </span>
                                )}

                                {/* Product Details */}
                                <div className={`${viewMode === 'list' ? 'text-left flex-1' : 'text-center'}`}>
                                    <p
                                        className="text-gray-900 text-lg font-bold mb-1"
                                        style={{ fontFamily: 'Playfair Display, serif' }}
                                    >
                                        Aacushion {index + 1}
                                    </p>
                                    <div className="text-[#fe9995] my-1 text-sm">☆☆☆☆☆</div>
                                    <p
                                        className="text-lg font-medium text-gray-800 mb-3 capitalize"
                                        style={{ fontFamily: 'Playfair Display, italic' }}
                                    >
                                        $27.00
                                    </p>

                                    {viewMode === 'list' && (
                                        <>
                                            <div className="flex gap-2 mb-3">
                                                <div className="flex space-x-4 mt-2">
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                                                        <i className="fa-solid fa-bag-shopping"></i>
                                                    </span>
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                                                        <i className="fa-solid fa-rotate"></i>
                                                    </span>
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </span>
                                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                                                        <i className="fa-regular fa-eye"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 w-50 text-sm">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula,
                                                faucibus sit amet aliquet ac, molestie a massa. Fusce vitae feugiat enim,
                                                id fermentum magna.
                                            </p>
                                        </>
                                    )}
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

export default Fullwidth;
