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
import { FaPlus } from "react-icons/fa";


const Rightsidebar = () => {
  const [viewMode, setViewMode] = useState('grid3');

  const categories = [
    { name: "Accessories", count: 22 },
    { name: "Beauty", count: 10 },
    { name: "Beauty Organic", count: 7 },
    { name: "Cucumber Organic", count: 19 },
    { name: "Natural", count: 9 },
    { name: "Natural Beauty", count: 8 },
    { name: "Nature", count: 9 },
    { name: "Other Products", count: 46 },
  ];

   const colors = [
    { name: "Beige", hex: "#E6D8C3" },
    { name: "Black", hex: "#000000" },
    { name: "Blue", hex: "#1E73BE" },
    { name: "Brown", hex: "#4B2E1E" },
    { name: "Gray", hex: "#B0B0B0" },
    { name: "Green", hex: "#8CE22E" },
    { name: "Orange", hex: "#E3962E" },
    { name: "Pink", hex: "#E48E8E" },
    { name: "Red", hex: "#E53935" },
    { name: "Taupe", hex: "#7B5B42" },
  ];
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

      <div class="flex items-center gap-2"style={{ fontFamily: 'Playfair Display' }}>
        <img src={list2} class="w-10 h-10" alt="Natural" />
        <span>Natural (9)</span>
      </div>
      <span class="text-gray-300">|</span>

      <div class="flex items-center gap-2"style={{ fontFamily: 'Playfair Display' }}>
        <img src={list3} class="w-10 h-10" alt="Natural Beauty" />
        <span>Natural Beauty (8)</span>
      </div>
      <span class="text-gray-300">|</span>

      <div class="flex items-center gap-2"style={{ fontFamily: 'Playfair Display' }}>
        <img src={list4}class="w-10 h-10" alt="Perfume" />
        <span>Perfume (16)</span>
      </div>
    </div>
  </div>
</div>


      <div className="flex max-w-7xl mx-auto py-10  gap-2">
        {/* Sidebar */}
      


        {/* Product Grid */ }
  <main className="flex flex-col gap-3">
    <div className="w-255 border p-2 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left Side - View Icons */}
      <div className="flex items-center gap-4 text-gray-700">
        {/* Grid 3x3 */}
        <button
          onClick={() => setViewMode('grid3')}
          title="Grid-3-columns"
          className={`p-1 transition-colors duration-200 ${viewMode === 'grid3' ? 'text-[#fe9995]' : 'hover:text-[#fe9995]'}`}
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
    </div>

    {/* Product Grid - Dynamic based on view mode */}
    <div className={`${viewMode === 'grid3' ? 'grid grid-cols-1 md:grid-cols-3 gap-10' :
        viewMode === 'grid4' ? 'grid grid-cols-1 md:grid-cols-4 gap-8' :
          'flex flex-col gap-6'
      } justify-center items-center place-items-center mx-auto`}>
      {/* Product cards */}
      {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map((img, index) => (
        <div key={index} className={`${viewMode === 'list' ?
            'w-full flex  md:flex-col gap-6 items-start p-6 border-b border-gray-100  transition-shadow duration-300' :
            'w-full  transition-shadow duration-300'
          }`}>
          <img
            src={img}
            alt="Product"
            className={`${viewMode === 'list' ? 'h-60 w-68 object-contain' : 'h-60 w-full object-contain'
              }`}
          />
          <div className={`${viewMode === 'list' ? 'text-left flex-1' : 'text-center'
            }`}>
            <p className="text-gray-900 text-lg font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
              Aacushion {index + 1}
            </p>
            <div className="text-[#fe9995] my-1 text-sm">☆☆☆☆☆</div>
            <p className="text-lg font-medium text-gray-800 mb-3 capitalize" style={{ fontFamily: 'Playfair Display , italic' }}>$27.00</p>

            {viewMode === 'list' && (
              <>
                <div className="flex gap-2 mb-3">
                  <div className="flex space-x-4 mt-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                      <i class="fa-solid fa-bag-shopping"></i>
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                      <i class="fa-solid fa-rotate"></i>
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                      <i class="fa-regular fa-heart"></i>
                    </span>
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700">
                      <i class="fa-regular fa-eye"></i>
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
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
  </main>    <aside className="w-64 space-y-8">
          {/* Categories */}
          <div className="border border-gray-200 w-full max-w-xs bg-white">
            {/* Header */}
            <div className="border-b border-gray-200 px-4 py-3">
              <h3 className="!text-lg !font-bold uppercase text-gray-800 uppercase" style={{ fontFamily: 'Playfair Display' }}>
                Categories
              </h3>
            </div>

            {/* List */}
            <ul className="p-0">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 py-3 border-b border-gray-200 last:border-b-0 text-gray-500  !text-sm hover:text-[#fe9995] cursor-pointer capitalize" style={{ fontFamily: 'Playfair Display , italic' }}
                >
                  <span className="font-bold uppercase" style={{ fontFamily: 'Playfair Display , italic' }}>
                    {cat.name} ({cat.count})
                  </span>
                  <FaPlus className="text-xs text-gray-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* List */}
         
          
      

      {/* Filter Selection */}
    <div className="border border-gray-300  w-full max-w-xs bg-white">
      {/* Heading */}
      <h3 className="!font-bold uppercase !text-lg border-b p-3 border-gray-300  mb-4 tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>
        Filter Selection
      </h3>

      {/* Color Section */}
      <div className="mb-4 ps-3">
        <p className="font-bold uppercase !text-lg mb-3 tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>Color</p>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center space-x-2">
              <span
                className="w-4 h-4 rounded-full border border-gray-400"
                style={{ backgroundColor: color.hex }}
              ></span>
              <span className="text-sm text-gray-800">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>


    <div className="space-y-6">
      {/* Categories */}
      <div className="border border-gray-300 p-4 w-full max-w-xs">
        <h3 className="font-serif !font-bold uppercase !text-lg mb-3 tracking-wide uppercase"style={{ fontFamily: 'Playfair Display' }}>
          Categories
        </h3>
        <div className="grid grid-cols-2 gap-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">Food</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">Fruits</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">Juices</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">Vegetables</span>
          </label>
        </div>
      </div>

      {/* Size */}
      <div className="border border-gray-300 p-4 w-full max-w-xs">
        <h3 className="font-serif !font-bold uppercase !text-lg mb-3 tracking-wide"style={{ fontFamily: 'Playfair Display' }}>
          Size
        </h3>
        <div className="grid grid-cols-2 gap-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">L</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">M</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">S</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-black" />
            <span className="text-gray-800 text-sm">XL</span>
          </label>
        </div>
      </div>
    </div>

      <div className="space-y-6">
        {/* Price Filter */}
        <div className="border p-4">
          <h3 className="uppercase !text-lg !font-bold mb-4 uppercase"style={{ fontFamily: 'Playfair Display' }}>Price</h3>
          <div className="flex items-center space-x-2">
         
<input type="range" class="form-range" id="customRange1"/>
           
          </div>
          <button className="w-full mt-4 border border-gray-300 text-blue-700 uppercase py-1 text-sm hover:bg-blue-600 hover:text-white transition-all">
            Filter
          </button>
          <p className="text-sm mt-2 text-gray-600">Price: $10 — $420</p>
        </div>

        {/* Cosmetic Big Sale */}
        <div className="relative">
          <img
            src={baner2}
            alt="Cosmetic Sale"
            className="w-full object-cover"
          />

        </div>
      </div>
    </aside>
      </div >
      <Footer1 />
    </div >
  );
};

export default Rightsidebar;