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
import img13 from "../assets/img13.jpg"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.jpg"
import img16 from "../assets/img16.jpg"
import img17 from "../assets/4-1.jpg"
import img18 from "../assets/5.jpg"
import img19 from "../assets/cate1.jpg"
import img20 from "../assets/20.jpg"
import img21 from "../assets/19-2.jpg"
import img22 from "../assets/4-3.jpg"
import img23 from "../assets/1-3.jpg"

import bg1 from "../assets/banner-shop.jpg"
import list1 from "../assets/makeup.png"
import list2 from "../assets/lotion.png"
import list3 from "../assets/make-up.png"
import list4 from "../assets/sapling.png"

import Footer1 from "../Bueatyproduct/Footer1";
import { FaPlus, FaTimes, FaShoppingBag, FaRedo, FaHeart, FaEye, FaFacebookF, FaTwitter, FaPinterestP, FaExpand, FaSearch } from "react-icons/fa";
import { FiDownload, FiShare2 } from "react-icons/fi";
import { BiZoomIn } from "react-icons/bi";

const Galleryonproduct = () => {
    const [viewMode, setViewMode] = useState('grid3');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedIcon, setSelectedIcon] = useState(null);

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

    // Mock product data with icons
    const products = [
        { id: 1, name: "Aacushion 1", price: "$27.00", image: img1, icons: [img17, img13], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 2, name: "Aacushion 2", price: "$27.00", image: img2, icons: [img12, img18, img8], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 3, name: "Aacushion 3", price: "$27.00", image: img3, icons: [img14, img19], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 4, name: "Aacushion 4", price: "$27.00", image: img4, icons: [img18, img3, img8], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 5, name: "Aacushion 5", price: "$27.00", image: img5, icons: [img20, img21], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 6, name: "Aacushion 6", price: "$27.00", image: img6, icons: [img23, img10], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 7, name: "Aacushion 7", price: "$27.00", image: img7, icons: [img18, img12, img8], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 8, name: "Aacushion 8", price: "$27.00", image: img8, icons: [img12, img18, img3], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 9, name: "Aacushion 9", price: "$27.00", image: img9, icons: [img13, img14], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 10, name: "Aacushion 10", price: "$27.00", image: img23, icons: [img10, img15, img22], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 11, name: "Aacushion 11", price: "$27.00", image: img11, icons: [img21, img20], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
        { id: 12, name: "Aacushion 12", price: "$27.00", image: img12, icons: [img7, img16], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh ligula, faucibus sit amet aliquet ac, molestie a massa." },
    ];

    const openModal = (product, iconSrc) => {
        setSelectedProduct(product);
        setSelectedIcon(iconSrc);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProduct(null);
        setSelectedIcon(null);
        document.body.style.overflow = 'auto';
    };
    const [shareOpen, setShareOpen] = useState(false);

    const [zoom, setZoom] = useState(false);
    return (
        <div>
            <Shopeheader />

            {/* Full Screen Modal - Show only the specific icon that was clicked */}
            {modalOpen && selectedProduct && selectedIcon && (
                <div className="fixed inset-0 z-50  bg-[#000000dc] bg-opacity-40 p-2">

                    <div className="flex justify-end p-4 gap-2 space-x-3 relative">                        {/* Search Icon */}
                       
                        {/* Expand Icon */}
                        <button className="text-[#EEEEEEE5] hover:text-[#fe9995] !text-2xl">
                            <FaExpand />
                        </button>

                        {/* Zoom In Icon */}
                        <button
                            onClick={() => setZoom(!zoom)}
                            className="text-[#EEEEEEE5] hover:text-[#fe9995] !text-2xl"
                        >
                            <BiZoomIn />
                        </button>

                        {/* Share Button */}
                        <div className="relative">
                            <button
                                onClick={() => setShareOpen(!shareOpen)}
                                className="text-[#EEEEEEE5] hover:text-[#fe9995] !text-2xl"
                            >
                                <FiShare2 />
                            </button>

                            {shareOpen && (
                                <div className="absolute -right-1 mt-1 w-40 bg-white shadow-lg border border-gray-200 z-50">
                                        <div className="absolute -top-1 right-2 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-200"></div>

                                    <ul className="py-1 mb-1 px-0 text-sm text-gray-700 flex flex-col justify-center items-start">
                                        <li>
                                            <a
                                                href="https://facebook.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 text-black !no-underline"style={{ fontFamily: 'Playfair Display' }}
                                            >
                                                <FaFacebookF className="text-blue-600" /> Share on Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 text-black !no-underline"style={{ fontFamily: 'Playfair Display' }}
                                            >
                                                <FaTwitter className="text-sky-500" /> Share on Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://pinterest.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 text-black !no-underline"style={{ fontFamily: 'Playfair Display' }}
                                            >
                                                <FaPinterestP className="text-white !bg-red-600 w-4 h-4 p-0.5 rounded-full" /> Pin it
                                            </a>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => alert("Downloading image...")}
                                                className="flex items-center gap-2 w-full text-left px-2 py-2 hover:bg-gray-100 text-black !no-underline"style={{ fontFamily: 'Playfair Display' }}
                                            >
                                                <FiDownload className="text-gray-500" /> Download image
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="text-[#EEEEEEE5] hover:text-[#fe9995] !text-2xl"
                        >
                            <FaTimes />
                        </button>
                    </div>


                    <div className="flex justify-center  p-6">
                        {/* Display only the specific icon image that was clicked */}
                        <div className="flex flex-col items-center justify-center p-6">

                            <img
                                src={selectedIcon}
                                alt="Selected Icon"
                                className={`object-contain transition-transform duration-300 w-130  ${zoom ? "scale-250 cursor-zoom-out" : "scale-110 cursor-zoom-in"
                                    }`}
                                onClick={() => setZoom(!zoom)} // click image also zooms
                            />

                        </div>
                    </div>
                </div>
            )}

            <div className="relative -z-12 bg-cover bg-position-[center_left_-15rem] h-95 flex justify-center items-center"
                style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute"></div>

                <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
                    <h1 className="!text-3xl font-bold capitalize" style={{ fontFamily: 'Playfair Display' }}>Shop</h1>
                    <div className="mt-2 text-lg">
                        <Link to='/Home' className="!no-underline !text-white "><span className="font-semibold text-2xl hover:text-[#fe9995] capitalize" style={{ fontFamily: 'Playfair Display' }}>Home</span></Link>
                        <span className="mx-1 text-gray-300">/</span>
                        <span className="text-[#fe9995] text-2xl font-semibold capitalize" style={{ fontFamily: 'Playfair Display' }}>Shop</span>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list1} className="w-10 h-10" alt="Beauty Organic" />
                            <span>Beauty Organic (7)</span>
                        </div>
                        <span className="text-gray-300">|</span>

                        <div className="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list2} className="w-10 h-10" alt="Natural" />
                            <span>Natural (9)</span>
                        </div>
                        <span className="text-gray-300">|</span>

                        <div className="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list3} className="w-10 h-10" alt="Natural Beauty" />
                            <span>Natural Beauty (8)</span>
                        </div>
                        <span className="text-gray-300">|</span>

                        <div className="flex items-center gap-2" style={{ fontFamily: 'Playfair Display' }}>
                            <img src={list4} className="w-10 h-10" alt="Perfume" />
                            <span>Perfume (16)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex max-w-7xl mx-auto py-10 gap-2">
                {/* Sidebar */}
                <aside className="w-64 space-y-8">
                    {/* Categories */}
                    <div className="border border-gray-200 w-full max-w-xs bg-white">
                        <div className="border-b border-gray-200 px-4 py-3">
                            <h3 className="!text-lg !font-bold uppercase text-gray-800 uppercase" style={{ fontFamily: 'Playfair Display' }}>
                                Categories
                            </h3>
                        </div>

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

                    {/* Filter Selection */}
                    <div className="border border-gray-300  w-full max-w-xs bg-white">
                        <h3 className="!font-bold uppercase !text-lg border-b p-3 border-gray-300  mb-4 tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>
                            Filter Selection
                        </h3>

                        <div className="mb-4 ps-3">
                            <p className="font-bold uppercase !text-lg mb-3 tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>Color</p>
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
                        <div className="border border-gray-300 p-4 w-full max-w-xs">
                            <h3 className="font-serif !font-bold uppercase !text-lg mb-3 tracking-wide uppercase" style={{ fontFamily: 'Playfair Display' }}>
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

                        <div className="border border-gray-300 p-4 w-full max-w-xs">
                            <h3 className="font-serif !font-bold uppercase !text-lg mb-3 tracking-wide" style={{ fontFamily: 'Playfair Display' }}>
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
                        <div className="border p-4">
                            <h3 className="uppercase !text-lg !font-bold mb-4 uppercase" style={{ fontFamily: 'Playfair Display' }}>Price</h3>
                            <div className="flex items-center space-x-2">
                                <input type="range" className="form-range" id="customRange1" />
                            </div>
                            <button className="w-full mt-4 border border-gray-300 text-blue-700 uppercase py-1 text-sm hover:bg-blue-600 hover:text-white transition-all">
                                Filter
                            </button>
                            <p className="text-sm mt-2 text-gray-600">Price: $10 — $420</p>
                        </div>

                        <div className="relative">
                            <img
                                src={baner2}
                                alt="Cosmetic Sale"
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
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
                                    <rect x="10" y-5 width="4" height="4" />
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
                        {products.map((product) => (
                            <div key={product.id} className={`${viewMode === 'list' ?
                                'w-full flex md:flex-col gap-6 items-start p-6 border-b border-gray-100 transition-shadow duration-300' :
                                'w-full transition-shadow duration-300'
                                }`}>
                                <img
                                    src={product.image}
                                    alt="Product"
                                    className={`${viewMode === 'list' ? 'h-60 w-68 object-contain' : 'h-60 w-full object-contain'
                                        }`}
                                />

                                <div className={`${viewMode === 'list' ? 'text-left flex-1' : 'text-center'
                                    }`}>
                                    <p className="text-gray-900 text-lg font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                                        {product.name}
                                    </p>
                                    <div className="text-[#fe9995] my-1 text-sm">☆☆☆☆☆</div>
                                    <p className="text-lg font-medium text-gray-800 mb-3 capitalize" style={{ fontFamily: 'Playfair Display , italic' }}>{product.price}</p>

                                    {/* Decorative Icon Buttons - Now clickable to open modal with specific icon */}
                                    <div className="flex justify-center gap-3 mb-2">
                                        {product.icons.map((icon, i) => (
                                            <button
                                                key={i}
                                                onClick={() => openModal(product, icon)}
                                                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#fe9995] transition"
                                            >
                                                <img src={icon} alt="icon" className="w-12 h-12 object-contain" />
                                            </button>
                                        ))}
                                    </div>

                                    {viewMode === 'list' && (
                                        <>
                                            <div className="flex gap-2 mb-3">
                                                <div className="flex space-x-4 mt-2">
                                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fe9995] hover:text-white">
                                                        <FaShoppingBag />
                                                    </button>
                                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fe9995] hover:text-white">
                                                        <FaRedo />
                                                    </button>
                                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fe9995] hover:text-white">
                                                        <FaHeart />
                                                    </button>
                                                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 hover:bg-[#fe9995] hover:text-white">
                                                        <FaEye />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm">
                                                {product.description}
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
                                className={`px-3 py-1 border rounded ${pg === 1 ? "bg-[#fe9995] text-white hover:bg-[#fe9995]" : "bg-white hover:bg-[#fe9995]"}`}
                            >
                                {pg}
                            </button>
                        ))}
                    </div>
                </main>
            </div>
            <Footer1 />
        </div>
    );
};

export default Galleryonproduct;