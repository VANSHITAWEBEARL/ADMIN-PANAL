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

const Variationshop = () => {
  const [viewMode, setViewMode] = useState("grid3");

  // Products with color variations
  const products = [
    {
    name: "Product 1",
    price: 27,
    type: "color", // will show color swatches
    images: [
      { color: "#1E73BE", src: img1 },
      { color: "#E48E8E", src: img2 },
      { color: "#E53935", src: img3 },
    ],
  },
  {
    name: "Product 2",
    price: 45,
    type: "image", // will show image thumbnails
    images: [
      { src: img4 },
      { src: img5 },
      { src: img6 },
    ],
  },
  {
    name: "Product 3",
    price: 55,
    type: "color",
    images: [
      { color: "#009688", src: img7 },
      { color: "#FFC107", src: img8 },
      { color: "#FF5722", src: img9 },
    ],
  },
  {
    name: "Product 4",
    price: 99,
    type: "image",
    images: [
      {color: "#1E73BE", src: img10 },
      { color: "#E48E8E", src: img11 },
      {color: "#E53935", src: img12 },
    ],
  },
  {
    name: "Product 5",
    price: 88,
    type: "color",
    images: [
      {  src: img13 },
      {  src: img14 },
      {  src: img15 },
    ],
  },
  {
    name: "Product 6",
    price: 65,
    type: "image",
    images: [
      { src: img16 },
      { src: img17 },
      { src: img18 },
    ],
  },
];

  // Track selected image per product
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

  return (
    <div>
      <Shopeheader />

      {/* Banner Section */}
      <div
        className="relative bg-cover bg-position-[center_left_-15rem] h-95 py-20"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute"></div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
          <h1
            className="!text-3xl font-bold capitalize"
            style={{ fontFamily: "Playfair Display" }}
          >
            Variation
          </h1>
          <div className="mt-2 text-lg">
            <Link to="/Home" className="!no-underline !text-white ">
              <span
                className="font-semibold text-2xl hover:text-[#fe9995] capitalize"
                style={{ fontFamily: "Playfair Display" }}
              >
                Home
              </span>
            </Link>
            <span className="mx-1 text-gray-300">/</span>
            <span
              className="text-[#fe9995] text-2xl font-semibold capitalize"
              style={{ fontFamily: "Playfair Display" }}
            >
              Variation
            </span>
          </div>

          {/* Categories Icons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              <img src={list1} className="w-10 h-10" alt="Beauty Organic" />
              <span>Beauty Organic (7)</span>
            </div>
            <span className="text-gray-300">|</span>

            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              <img src={list2} className="w-10 h-10" alt="Natural" />
              <span>Natural (9)</span>
            </div>
            <span className="text-gray-300">|</span>

            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              <img src={list3} className="w-10 h-10" alt="Natural Beauty" />
              <span>Natural Beauty (8)</span>
            </div>
            <span className="text-gray-300">|</span>

            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "Playfair Display" }}
            >
              <img src={list4} className="w-10 h-10" alt="Perfume" />
              <span>Perfume (16)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto py-10 px-4 gap-8">
        {/* Sidebar */}
        <aside className="w-64 space-y-8">
          {/* Filter Selection */}
          <div className="border border-gray-300  w-full max-w-xs bg-white">
            <h3
              className="!font-bold uppercase !text-lg border-b p-3 border-gray-300  mb-4 tracking-wide uppercase"
              style={{ fontFamily: "Playfair Display" }}
            >
              Filter Selection
            </h3>
            <div className="mb-4 ps-3">
              <p
                className="font-bold uppercase !text-lg mb-3 tracking-wide uppercase"
                style={{ fontFamily: "Playfair Display" }}
              >
                Color
              </p>
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
        </aside>

        {/* Products Section */}
        <main className="flex flex-col gap-3">
          {/* View Mode Selector */}
          <div className="w-full border p-3 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-gray-700">
              <button
                onClick={() => setViewMode("grid3")}
                className={`p-1 ${viewMode === "grid3" ? "text-[#fe9995]" : ""}`}
              >
                Grid 3
              </button>
              <button
                onClick={() => setViewMode("grid4")}
                className={`p-1 ${viewMode === "grid4" ? "text-[#fe9995]" : ""}`}
              >
                Grid 4
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1 ${viewMode === "list" ? "text-[#fe9995]" : ""}`}
              >
                List
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-sm">
          <div className="relative">
            <img
              src={selectedImages[index]}
              alt={product.name}
              className="h-60 w-full object-contain"
            />
            {/* Show Sale on 5th & 9th (if needed) */}
            {(index === 4) && (
              <span className="absolute top-2 right-2 bg-[#fe9995] text-white text-xs px-2 py-1 rounded-full">
                Sale
              </span>
            )}
          </div>

          <div className="text-center mt-4">
            <p className="font-bold text-lg">{product.name}</p>
            <p className="text-gray-800">${product.price.toFixed(2)}</p>

            {/* Switcher */}
           <div className="flex justify-center gap-3 mt-3">
  {([0, 2, 3].includes(index)) // 0-based index: 0=card1, 2=card3, 3=card4
    ? product.images.map((img, i) => (
        <button
          key={i}
          onClick={() => handleClick(index, img.src)}
          className={`w-8 h-8 rounded-full border-2 ${
            selectedImages[index] === img.src
              ? "border-black"
              : "border-transparent"
          }`}
          style={{ backgroundColor: img.color }}
        />
      ))
    : product.images.map((img, i) => (
        <button
          key={i}
          onClick={() => handleClick(index, img.src)}
          className={`w-8 h-8 rounded-full border-2 bg-center bg-cover ${
            selectedImages[index] === img.src
              ? "border-black"
              : "border-transparent"
          }`}
          style={{ backgroundImage: `url(${img.src})` }}
        />
      ))}
</div>

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
