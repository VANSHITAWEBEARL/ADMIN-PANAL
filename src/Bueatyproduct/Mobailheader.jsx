import React, { useState } from 'react';

const menuLinks = [
  { href: '/about-us', label: 'About us' },
  { href: '/about-us-02', label: 'About Us 02' },
  { href: '/about-us-03', label: 'About Us 03' },
  { href: '/about-us-04', label: 'About Us 04' },
  { href: '/about-us-05', label: 'About us 05' },
  { href: '/accordion', label: 'Accordion' },
  { href: '/accordion-images', label: 'Accordion Images' },
  { href: '/banner', label: 'Banner' },
  { href: '/banner-2', label: 'Banner 2' },
  { href: '/blog', label: 'Blog' },
  { href: '/blog-grid', label: 'Blog Grid' },
  { href: '/blog-mansory', label: 'Blog Mansory' },
  { href: '/blog-timeline', label: 'Blog Timeline' },
  { href: '/grid-3-columns', label: 'Grid 3 columns' },
  { href: '/grid-left-sidebar', label: 'Grid Left Sidebar' },
  { href: '/grid-right-sidebar', label: 'Grid Right Sidebar' },
  { href: '/left-sidebar', label: 'Left Sidebar' },
  { href: '/masonry-3-columns', label: 'Masonry 3 columns' },
  { href: '/right-sidebar', label: 'Right Sidebar' },
  { href: '/sidebar-right', label: 'Sidebar right' },
  { href: '/timeline-2-columns', label: 'Timeline 2 columns' },
  { href: '/sidebar-left', label: 'Using Revolution Sileder' },
  // ...add more as needed
];

const Mobileheader = () => {
  const [canvasOpen, setCanvasOpen] = useState(false);

  return (
    <header className="header-content header-sticky fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[inherit] md:hidden" style={{ width: '100%' }}>
      <div className="container mx-auto px-2 flex flex-col gap-2">
        {/* Top row: menu button, logo, cart */}
        <div className="flex items-center justify-between py-2">
          {/* Mobile menu button */}
          <button className="mobile-button text-2xl text-[#222]" onClick={() => setCanvasOpen(true)}>
            <i className="fa fa-bars"></i>
          </button>
          {/* Logo mobile */}
          <div className="logo-wrapper ftc-logo is-mobile flex items-center justify-center">
            <a href="/">
              <img src="https://ordo.themeftc.com/wp-content/uploads/2020/10/mobile9.png" alt="Ordo Store" title="Ordo Store" className="normal-logo-mobile w-24 h-auto" />
            </a>
          </div>
          {/* Cart section */}
          <div className="relative inline-block">
            <i className="fa-solid fa-basket-shopping text-xl"></i>
            <span className="absolute -top-3 -right-2 bg-black text-white rounded-full w-4 h-4 flex items-center justify-center !font-normal !text-sm z-10">0</span>
          </div>
        </div>

        {/* Off-canvas menu */}
        {canvasOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
            <div className="ftc-mobile-wrapper bg-white w-80 max-w-full h-full shadow-lg p-4 overflow-y-auto relative animate-slidein">
              {/* Close button */}
              <button type="button" className="btn btn-toggle-canvas absolute top-2 right-2 text-xl text-[#fe9995]" onClick={() => setCanvasOpen(false)}>
                <i className="fa fa-close"></i>
              </button>
              {/* Search */}
              <div className="ftc-search mb-4">
                <form method="get" action="/" className="flex items-center gap-2">
                  <select className="select-category border rounded px-2 py-1 text-xs" name="term">
                    <option value="">Our categories</option>
                    <option value="accessories">Accessories</option>
                    <option value="fruit">Fruit</option>
                    <option value="totes">Totes & hobo</option>
                    <option value="beauty">Beauty</option>
                    <option value="bb-cream">BB Cream</option>
                    <option value="coverage-concealer-beauty">Coverage Concealer</option>
                    <option value="cream-contour">Cream Contour</option>
                    <option value="face-cream">Face Cream</option>
                    <option value="rose-mineral-cream">Rose Mineral Cream</option>
                    <option value="skin-perfector">Skin Perfector</option>
                    {/* ...add more as needed... */}
                  </select>
                  <input type="text" name="s" placeholder="Search ..." className="border rounded px-2 py-1 text-xs w-full" autoComplete="off" />
                  <button type="submit" className="search-button bg-[#fe9995] text-white px-3 py-1 rounded text-xs">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
              {/* Wishlist and Account */}
              <div className="menu-mobile flex items-center justify-between mb-4">
                <div className="mobile-wishlist">
                  <a title="Wishlist" href="/wishlist" className="tini-wishlist flex items-center gap-1 text-gray-700">
                    <i className="fa fa-heart"></i>
                    Wishlist <span className="count-wish">(0)</span>
                  </a>
                </div>
                <div className="mobile-account">
                  <a href="/my-account" title="Login" className="text-gray-700">Login</a>
                </div>
              </div>
              {/* Navigation menu */}
              <div className="mobile-menu-wrapper">
                <ul className="space-y-2">
                  {menuLinks.map(link => (
                    <li key={link.href}>
                      <a href={link.href} className="block text-gray-700 py-1 px-2 rounded hover:bg-[#fe9995] hover:text-white transition">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setCanvasOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Mobileheader;
