import React, { useState } from 'react';
import newsletterImage from '../assets/newleter1.jpg'; // Ensure the image path is correct

const Maincart = () => {
  const [showModal, setShowModal] = useState(true);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center z-50 hidden lg:flex">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Image Section with Close Button */}
        <div className="relative w-full">
          <img
            src={newsletterImage}
            alt="Newsletter Promo"
            className="w-full object-fill"
          />
          {/* Close Button positioned on image */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 !text-5xl !font-black text-white focus:outline-none"
            style={{ zIndex: 2  }}
          >
            &times;
          </button>
          {/* Content Section overlayed on white area */}
          <div className="absolute left-0 right-0 bottom-0 bg-white p-6 text-center">
            <h2 className="text-2xl font-bold font-playfair mb-2" style={{ fontFamily: 'Playfair Display' }}>NEWSLETTER</h2>
            <h6 className="!text-gray-600 w-110 !text-sm mb-4">
              Subscribe to the Ordo Organic mailing list to receive updates on new
              arrivals, special offers and other discount information.
            </h6>
            {/* Email Input */}
            <div className='flex flex-col items-center'>
            <input
              type="email"
              placeholder="Your email address..."
              className="w-70 px-4 py-2 border-1 border-[#fe9995] rounded mb-4 focus:outline-none focus:border-pink-400"
            />
            {/* Subscribe Button */}
            <button className="w-40 bg-[#fe9995] text-white py-2 rounded hover:bg-pink-500 transition font-semibold">
              SUBSCRIBE
            </button>
            </div>
            {/* Don't show checkbox */}
            <div className="flex items-end justify-end gap-3 mt-4">
              <input
                type="checkbox"
                id="noPopup"
                className="mr-2"
              />
              <label htmlFor="noPopup" className="text-sm text-gray-600">
                Don't show popup again
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincart;
