import React from "react";
import Shopeheader from "./Shopeheader";
import baner2 from "../assets/banner2-2.jpg";
import { Link } from "react-router";

const products = [
  { name: "Aacushion", price: 27.0, oldPrice: null, image: {img1}, sale: false },
  { name: "ABB Scream", price: 150.0, oldPrice: null, image: "/images/product2.png", sale: false }
  { name: "Abuzun", price: 26.0, oldPrice: null, image: "/images/product3.png", sale: false },
  { name: "Acongue Pellentesque", price: 122.0, oldPrice: null, image: "/images/product4.png", sale: false },
  { name: "Adum", price: 16.0, oldPrice: 28.0, image: "/images/product5.png", sale: true },
  { name: "Aevy Rotation", price: 19.0, oldPrice: 32.0, image: "/images/product6.png", sale: true },
  { name: "Afacilisis Tortor Ante", price: 120.0, oldPrice: null, image: "/images/product7.png", sale: false },
  { name: "Aliquam Volutpate", price: 120.0, oldPrice: null, image: "/images/product8.png", sale: false },
  { name: "Aneige", price: 26.0, oldPrice: 32.0, image: "/images/product9.png", sale: true },
  { name: "Armani Black", price: 187.0, oldPrice: null, image: "/images/product10.png", sale: false },
  { name: "Arum Laneige", price: 25.0, oldPrice: null, image: "/images/product11.png", sale: false },
  { name: "Aslipstick", price: 35.0, oldPrice: null, image: "/images/product12.png", sale: false }
];

const Shopepage = () => {
  return (
    <div>
      <Shopeheader />

      <div className="flex max-w-7xl mx-auto py-10 px-4 gap-8">
        {/* Sidebar */}
        <aside className="w-64 space-y-8">
          {/* Categories */}
          <div>
            <h3 className="font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <li>Accessories (22)</li>
              <li>Beauty (10)</li>
              <li>Beauty Organic (7)</li>
              <li>Cucumber Organic (10)</li>
              <li>Natural (10)</li>
              <li>Natural Beauty (8)</li>
              <li>Nature (6)</li>
              <li>Other Products (46)</li>
            </ul>
          </div>

          {/* Filter Selection */}
          <div>
            <h3 className="font-bold mb-4">FILTER SELECTION</h3>
            <div className="mb-4">
              <p className="font-medium mb-2">Color</p>
              <div className="flex flex-wrap gap-2">
                {["Beige", "Black", "Blue", "Brown", "Gray", "Green", "Orange", "Pink", "Red", "Taupe"].map((color) => (
                  <span key={color} className="px-2 py-1 border rounded text-sm cursor-pointer">
                    {color}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium mb-2">Categories</p>
              {["Food", "Fruits", "Juices", "Vegetables"].map((cat) => (
                <div key={cat}>
                  <label>
                    <input type="checkbox" className="mr-2" /> {cat}
                  </label>
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium mb-2">Size</p>
              {["L", "M", "S", "XL"].map((size) => (
                <div key={size}>
                  <label>
                    <input type="checkbox" className="mr-2" /> {size}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {/* Price Filter */}
            <div className="border p-4">
              <h3 className="uppercase text-sm font-semibold mb-4">Price</h3>
              <div className="flex items-center space-x-2">
                <input type="range" min="10" max="420" className="w-full accent-gray-700" />
                <input type="range" min="10" max="420" className="w-full accent-gray-700" />
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


        {/* Product Grid */}
        <main className="flex flex-col gap-3">
          <div className="w-full border p-3 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Side - View Icons */}
        <div class="flex items-center gap-4 text-gray-700">
  {/* <!-- Grid 4 (3x3) --> */}
  <Link href="#" title="Grid-4-columns" class="p-1 hover:text-[#fe9995] transition-colors duration-200">
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
  </Link>

  {/* <!-- Grid More (4x4) --> */}
  <Link  class="p-1 hover:text-[#fe9995] transition-colors duration-200">
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
  </Link>

  {/* <!-- List View --> */}
  <Link href="#" title="List-view" class="p-1 hover:text-[#fe9995] transition-colors duration-200">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 18 18" fill="currentColor">
      <rect x="0" width="3" height="2" />
      <rect x="5" width="18" height="2" />
      <rect x="0" y="8" width="3" height="2" />
      <rect x="5" y="8" width="18" height="2" />
      <rect x="0" y="16" width="3" height="2" />
      <rect x="5" y="16" width="18" height="2" />
    </svg>
  </Link>
</div>



            {/* Center - Results Text */}
            <div className="text-sm font-normal text-gray-700">
              Showing 1–12 of  181 results
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
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="border p-4 relative group">
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Sale
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h4 className="font-medium">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  {product.oldPrice && (
                    <span className="text-sm line-through text-gray-500">${product.oldPrice.toFixed(2)}</span>
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
                className={`px-3 py-1 border rounded ${pg === 1 ? "bg-pink-500 text-white" : "bg-white hover:bg-gray-100"
                  }`}
              >
                {pg}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shopepage;
