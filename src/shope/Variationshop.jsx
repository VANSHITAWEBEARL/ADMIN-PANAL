import React, { useState } from "react";
import Shopeheader from "./Shopeheader";
import baner2 from "../assets/banner2-2.jpg";
import { Link } from "react-router";
import img1 from "../assets/1.jpg";
import img2 from "../assets/1.1.jpg";
import img3 from "../assets/1.2.jpg";
import img4 from "../assets/2.1.jpg";
import img5 from "../assets/2.2.jpg";
import img6 from "../assets/2.3.jpg";
import img7 from "../assets/3.1.jpg";
import img8 from "../assets/3.2.jpg";
import img9 from "../assets/3.3.jpg";
import img10 from "../assets/4.1.jpg";
import img11 from "../assets/4.2.jpg";
import img12 from "../assets/4.3.jpg";
import img13 from "../assets/5.1.jpg";
import img14 from "../assets/5.2.jpg";
import img15 from "../assets/5.3.jpg";
import img16 from "../assets/6.1.jpg";
import img17 from "../assets/6.2.jpg";
import img18 from "../assets/6.3.jpg";
import bg1 from "../assets/banner-shop.jpg";
import list1 from "../assets/makeup.png";
import list2 from "../assets/lotion.png";
import list3 from "../assets/make-up.png";
import list4 from "../assets/sapling.png";
import Footer1 from "../Bueatyproduct/Footer1";
import { FaPlus } from "react-icons/fa";

const Variationshop = () => {
  const [viewMode, setViewMode] = useState("grid3");

  // Products with variations
  const products = [
    {
      name: "Avon liptick content",
      price: 27,
      type: "color",
      images: [
        { color: "#472411", src: img2 },
        { color: "#dd6161", src: img1 },
        { color: "#dd3333", src: img3 },
      ],
    },
    {
      name: "Avon Mayrial",
      price: 45,
      type: "image",
      images: [{ src: img4 }, { src: img5 }, { src: img6 }],
    },
    {
      name: "Avon Sliptick",
      price: 55,
      type: "color",
      images: [
        { color: "#472411", src: img7 },
        { color: "#dd6161", src: img8 },
        { color: "#dd3333", src: img9 },
      ],
    },
    {
      name: "BB NYX",
      price: 99,
      type: "image",
      images: [
        { color: "#1e73be", src: img12 },
        { color: "#dd6161", src: img11 },
        { color: "#dd3333", src: img12 },
      ],
    },
    {
      name: "BB sliptick",
      price: 88,
      type: "color",
      images: [{ src: img13 }, { src: img14 }, { src: img15 }],
    },
    {
      name: "Mac Sliptick",
      price: 65,
      type: "image",
      images: [{ src: img16 }, { src: img17 }, { src: img18 }],
    },
  ];

  // Track selected images per product
  const [selectedImages, setSelectedImages] = useState(
    products.map((p) => p.images[0].src)
  );

  const handleClick = (productIndex, imageSrc) => {
    const updatedImages = [...selectedImages];
    updatedImages[productIndex] = imageSrc;
    setSelectedImages(updatedImages);
  };

  const colors = [
    { name: "Blue", hex: "#1E73BE" },
    { name: "Brown", hex: "#4B2E1E" },
    { name: "Pink", hex: "#E48E8E" },
    { name: "Red", hex: "#E53935" },
  ];

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

  return (
    <div>
      <Shopeheader />

      {/* Banner Section */}
      <div className="relative -z-12 bg-cover bg-position-[center_left_-15rem] h-95 flex justify-center items-center" 
           style={{ backgroundImage: `url(${bg1})` }}>
        {/* <!-- Overlay --> */}
        <div class="absolute"></div>
      
        <div class="relative z-10 text-center text-white max-w-5xl mx-auto">
          {/* <!-- Title & Breadcrumb --> */}
          <h1 class="!text-3xl font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>Variation</h1>
          <div class="mt-2 text-lg">
           <Link to='/Home' className="!no-underline !text-white "><span class="font-semibold text-2xl hover:text-[#fe9995] capitalize" style={{ fontFamily: 'Playfair Display' }}>Home</span></Link>
            <span class="mx-1 text-gray-300">/</span>
            <span class="text-[#fe9995] text-2xl font-semibold capitalize" style={{ fontFamily: 'Playfair Display' }}>Variation</span>
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

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto py-10 px-4 gap-8">
        {/* Sidebar */}
        <aside className="w-64 space-y-8">
          {/* Categories */}
          <div className="border border-gray-200 bg-white">
            <div className="border-b border-gray-200 px-4 py-3">
              <h3
                className="!text-lg !font-bold uppercase text-gray-800"
                style={{ fontFamily: "Playfair Display" }}
              >
                Categories
              </h3>
            </div>

            <ul>
              {categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-3 border-b border-gray-200 last:border-b-0 text-gray-500 hover:text-[#fe9995] cursor-pointer"
                >
                  <span>
                    {cat.name} ({cat.count})
                  </span>
                  <FaPlus className="text-xs text-gray-500" />
                </li>
              ))}
            </ul>
          </div>

          {/* Color Filter */}
          <div className="border border-gray-300 bg-white p-3">
            <h3
              className="!font-bold uppercase !text-lg mb-4"
              style={{ fontFamily: "Playfair Display" }}
            >
              Filter by Color
            </h3>
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

        {/* Products Section */}
        <main className="flex-1 flex flex-col gap-3">
          {/* View Mode Selector */}
          <div className="border p-2 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-gray-700">
              {/* Grid 3 */}
              <button
                onClick={() => setViewMode("grid3")}
                className={`p-1 ${
                  viewMode === "grid3"
                    ? "text-[#fe9995]"
                    : "hover:text-[#fe9995]"
                }`}
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

              {/* Grid 4 */}
              <button
                onClick={() => setViewMode("grid4")}
                className={`p-1 ${
                  viewMode === "grid4"
                    ? "text-[#fe9995]"
                    : "hover:text-[#fe9995]"
                }`}
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

              {/* List */}
              <button
                onClick={() => setViewMode("list")}
                className={`p-1 ${
                  viewMode === "list"
                    ? "text-[#fe9995]"
                    : "hover:text-[#fe9995]"
                }`}
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

            <div className="text-sm font-normal text-gray-700">
              Showing 1–12 of 181 results
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Sort by:</span>
              <select className="border px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#fe9995]">
                <option>Default sorting</option>
                <option>Sort by popularity</option>
                <option>Sort by latest</option>
                <option>Sort by price: low to high</option>
                <option>Sort by price: high to low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div
            className={`grid gap-6 ${
              viewMode === "grid3"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                : viewMode === "grid4"
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                : "grid-cols-1"
            }`}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative p-2 ${
                  viewMode === "list" ? "flex items-center gap-6" : ""
                }`}
              >
                {/* Sale Badge (only for 2nd and 4th product) */}
                {(index === 1 || index === 3) && (
                  <span className="absolute top-2 right-2 bg-[#fe9995] text-white text-xs font-bold px-2 py-2.5 !rounded-full">
                    Sale
                  </span>
                )}

                {/* Image */}
                <div className={viewMode === "list" ? "w-48" : "w-full"}>
                  <img
                    src={selectedImages[index]}
                    alt={product.name}
                    className={`object-contain ${
                      viewMode === "list" ? "h-40 w-40" : "h-60 w-full"
                    }`}
                  />
                </div>

                {/* Info */}
                <div className="text-center mt-4 flex-1">
                  <div className="flex justify-center gap-2 mt-3">
                    {([0, 2, 3].includes(index))
                      ? product.images.map((img, i) => (
                          <div
                            key={i}
                            onClick={() => handleClick(index, img.src)}
                            className={`flex h-10 w-10 items-center justify-center !rounded-full border-2 ${
                              selectedImages[index] === img.src
                                ? "border-black"
                                : "border-transparent"
                            }`}
                          >
                            <button
                              key={i}
                              onClick={() => handleClick(index, img.src)}
                              className="w-8 h-8 !rounded-full"
                              style={{ backgroundColor: img.color }}
                            />
                          </div>
                        ))
                      : product.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => handleClick(index, img.src)}
                            className={`w-8 h-8 !rounded-full border-2 bg-center bg-cover ${
                              selectedImages[index] === img.src
                                ? "border-black"
                                : "border-transparent"
                            }`}
                            style={{ backgroundImage: `url(${img.src})` }}
                          />
                        ))}
                  </div>

                  <p className="text-gray-800">${product.price.toFixed(2)}</p>
                  <p className="font-bold text-lg">{product.name}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Footer1 />
    </div>
  );
};

export default Variationshop;
