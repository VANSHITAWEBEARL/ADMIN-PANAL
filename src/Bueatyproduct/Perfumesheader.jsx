import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo11.png'; // Replace with your logo path
import nave from '../assets/header-nav11.png'; // Replace with your background image path
import Loginmodal from './Loginmodal';


const Perfumeheader = () => {
 
     // Search input state
    const [showSearchbar, setShowSearchbar] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");
    // Elements menu data for dropdown
    const elementsMenu = [
        {
            heading: 'FTC ELEMENTS',
            items: [
                'Heading', 'Carousels', 'Slider', 'Banner', 'Instagram', 'Social Buttons', 'Images Gallery', 'List Element', 'Tabs', 'Toggle', 'Progress'
            ]
        },
        {
            heading: 'FTC ELEMENTS',
            items: [
                'Gradients', 'Dividers', 'Image Box', 'Video', 'Buttons', 'Countdown', 'Counter', 'Testimonials', 'Blog Layouts', 'Blog Timeline', 'Brands Layout'
            ]
        },
        {
            heading: 'FTC ELEMENTS',
            items: [
                'Pricing Table', 'Price List', 'Flip Box', 'Dual Heading', 'Drop Cap', 'Pop Up', 'Image 360', 'Team Member', 'Accordion Images', 'Custom Timeline', 'Portfolio Element'
            ]
        },
        {
            heading: 'WOOCOMERCE',
            items: [
                'Product Element', 'Product Tab', 'Product Categories', 'Product Deal', 'Product Widget', 'Product Hotspot', 'Recent Product', 'Featured Product', 'Sale Product', 'Single Product'
            ]
        }
    ];

    const [showElementsDropdown, setShowElementsDropdown] = React.useState(false);
    // Portfolios menu data for dropdown
    const portfoliosMenu = [
        'Portfolio Gallery',
        'Portfolio FullWidth',
        'Portfolio 2 Columns',
        'Portfolio 3 Columns',
        'Portfolio 4 Columns',
        'Single Project Full',
        'Single Project Left'
    ];

    const [showPortfoliosDropdown, setShowPortfoliosDropdown] = React.useState(false);
    // Pages menu data for dropdown
    const pagesMenu = [
        {
            heading: 'CONTACT US',
            items: [
                'Contact Us 01', 'Contact Us 02', 'Contact Us 03', 'Contact Us 04', 'Contact Us 05'
            ]
        },
        {
            heading: 'FAQ',
            items: [
                'FAQ 01', 'FAQ 02', 'FAQ 03', 'FAQ 04', 'FAQ 05'
            ]
        },
        {
            heading: 'SERVICE',
            items: [
                'Services 01', 'Services 02', 'Services 03', 'Services 04', 'Services 05'
            ]
        },
        {
            heading: 'ERROR 404',
            items: [
                'Error 404 01', 'Error 404 02', 'Error 404 03', 'Error 404 04', 'Error 404 05'
            ]
        }
    ];

    const [showPagesDropdown, setShowPagesDropdown] = React.useState(false);
    // Blog menu data for dropdown
    const blogMenu = [
        {
            heading: 'BLOG MASONRY',
            items: [
                'Masonry 2 Columns', 'Masonry 3 Columns', 'Sidebar Left', 'Sidebar Right'
            ]
        },
        {
            heading: 'BLOG GRID',
            items: [
                'Grid 2 Columns', 'Grid 3 Columns', 'Grid Left Sidebar', 'Grid Right Sidebar'
            ]
        },
        {
            heading: 'BLOG TIMELINE',
            items: [
                'Full Width', 'Left Sidebar', 'Right Sidebar', 'Timeline 2 Columns'
            ]
        },
        {
            heading: 'BLOG DETAIL',
            items: [
                'Image Format', 'Audio Format', 'Video Format', 'Gallery Format'
            ]
        }
    ];

    const [showBlogDropdown, setShowBlogDropdown] = React.useState(false);
    // Shop menu data for dropdown
    const shopMenu = [
    {
      heading: 'SHOP LAYOUT',
      items: [
        { label: 'Full Width', to: '/Shopepage' },
        { label: 'Sidebar Left', to: '/Leftsidebar' },
        { label: 'Sidebar Right', to: '/Rightsidebar' },
        { label: 'Categories', to: '/Shopcategories' },
        { label: 'Filter Top', to: '/Filtertop' },
        { label: 'Infinite Scroll', to: '/Infinitescroll' },
        { label: 'Off-Canvas Filter', to: '/Offcanvasfilter' },
        { label: 'Shop Categories', to: '/Category' },
        { label: 'Small Categories', to: '/Smallcategories' },
        { label: 'Cookies Notice', to: '/Cookiesnotice' },
      ],
    },
    {
      heading: 'SHOP PAGE',
      items: [
        { label: 'Variation Shop', to: '/Variationshop' },
        { label: 'Gallery On Products', to: '/Galleryonproduct' },
        { label: 'Catalog Mode', to: '/shop/catalog-mode' },
        { label: 'Load More', to: '/shop/load-more' },
        { label: 'Shop Masonry', to: '/shop/masonry' },
        { label: 'Animation Shop', to: '/shop/animation-shop' },
        { label: 'Lazyload Product', to: '/shop/lazyload-product' },
        { label: 'Shop Carousel', to: '/shop/carousel' },
        { label: 'Advanced Filter', to: '/shop/advanced-filter' },
        { label: 'Without Background', to: '/shop/without-background' },
      ],
    },
    {
      heading: 'SHOP PAGES',
      items: [
        { label: 'Shopping Cart', to: '/cart' },
        { label: 'My Account', to: '/account' },
        { label: 'Checkout', to: '/checkout' },
        { label: 'Wishlist', to: '/wishlist' },
        { label: 'Shop Banner', to: '/shop/banner' },
        { label: 'Product Image Ver2', to: '/product/image-ver2' },
        { label: 'Product Hover Ver2', to: '/product/hover-ver2' },
        { label: 'Product Hover Ver3', to: '/product/hover-ver3' },
        { label: 'Grid View', to: '/shop/grid-view' },
        { label: 'List View', to: '/shop/list-view' },
      ],
    },
    {
      heading: 'PRODUCT STYLE',
      items: [
        { label: 'Simple Product', to: '/product/simple' },
        { label: 'Variation Swatches', to: '/product/variation-swatches' },
        { label: 'Grouped Product', to: '/product/grouped' },
        { label: 'Downloadable', to: '/product/downloadable' },
        { label: 'External Product', to: '/product/external' },
        { label: 'Video Product', to: '/product/video' },
        { label: '360° Product Viewer', to: '/product/360-viewer' },
        { label: 'Accordion Tabs', to: '/product/accordion-tabs' },
        { label: 'Vertical Gallery', to: '/product/vertical-gallery' },
        { label: 'AI Review Summary', to: '/product/ai-review-summary' },
      ],
    },
    {
      heading: 'VENDOR',
      items: [
        { label: 'Dokan Dashboard', to: '/vendor/dokan-dashboard' },
        { label: 'Dokan List', to: '/vendor/dokan-list' },
        { label: 'Dokan Store', to: '/vendor/dokan-store' },
        { label: 'WC Vendor', to: '/vendor/wc-vendor' },
        { label: 'WCFM List', to: '/vendor/wcfm-list' },
        { label: 'WCFM Store', to: '/vendor/wcfm-store' },
        { label: 'Grid Gallery', to: '/vendor/grid-gallery' },
        { label: 'Sticky Add To Cart', to: '/product/sticky-add-to-cart' },
        { label: 'Up-Sell Product', to: '/product/up-sell' },
        { label: 'Cross-Sell Product', to: '/product/cross-sell' },
      ],
    },
  ];

    const [showShopDropdown, setShowShopDropdown] = React.useState(false);
    // Demo menu data for dropdown
    const demoMenu = [
        [
            { label: 'Demo 1 – Beauty Cosmetic', to: '/HOME', highlight: true },
            { label: 'Demo 1 – Beauty Cosmetic', to: '/HOME' },
            { label: 'Demo 2 – Beauty Organic', to: '/Bueatyorganic', highlight: true },
            { label: 'Demo 2 – Beauty Organic', to: '/Bueatyorganic' },
            { label: 'Demo 3 – Cosmetic', to:'/Cosmetic', highlight: true },
            { label: 'Demo 3 – Cosmetic',to:'/Cosmetic', },
            { label: 'Demo 4 – Perfume',to:'/Perfume', highlight: true },
            { label: 'Demo 4 – Perfume', to:'/Perfume' },
            { label: 'Demo 5 – Spa & Beauty', highlight: true },
            { label: 'Demo 5 – Spa & Beauty' },
        ],
        [
            { label: 'Demo 6 – Flower Store', to:'/demo6' },
            { label: 'Demo 7 – Fresh Organic' },
            { label: 'Demo 8 – Full Slider' },
            { label: 'Demo 9 – Green Organic' },
            { label: 'Demo 10 – Boxed' },
            { label: 'Demo 11 – Plant Store' },
            { label: 'Demo 12 – Vmegameu' },
            { label: 'Demo 13 – BestSelling' },
            { label: 'Demo 14 – Minimal' },
            { label: 'Demo 15 – Left Sidebar' },
        ],
        [
            { label: 'Demo 16 – Instagram' },
            { label: 'Demo 17 – Lookbook', highlight: true },
            { label: 'Demo 17 – Lookbook' },
            { label: 'Demo 18 – Beauty', highlight: true },
            { label: 'Demo 18 – Beauty' },
            { label: 'Demo 19 – Natural Spa', highlight: true },
            { label: 'Demo 20 – Perfect Beauty', highlight: true },
            { label: 'Demo 21 – Parallax' },
            { label: 'Demo 22 – Beauty 2', highlight: true },
            { label: 'Demo 23 – Super Market' },
            { label: 'Demo 24 – Cosmetic', highlight: true },
        ],
    ];


  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const currencies = ['USD', 'EUR', 'AUD'];
  const languages = ['English', 'French', 'German'];

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

    // Dropdown state
    const [showDropdown, setShowDropdown] = React.useState(false);


    return (
        <header className="w-full border-b z-70 !sticky border-gray-100 bg-white">
      <nav className="text-white py-2" style={{ backgroundImage: `url(${nave})`,}}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Navigation */}
        <div className="flex items-center space-x-6">
          {/* Currency Switcher */}
         <div className="relative group">
  <div className="flex items-center  font-semibold text-[#7A7A7A] hover:text-[#f75c6c] cursor-pointer">
    <span>Currency: {selectedCurrency}</span>
    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Dropdown (visible on hover using Tailwind) */}
  <ul className="absolute z-10 mt-1 p-0 text-center w-30 border-t border-[#f75c6c] bg-white text-gray-800 shadow-lg hidden group-hover:block">
    {currencies.map((currency) => (
      <li
        key={currency}
        onClick={() => handleCurrencyChange(currency)}
        className="text-[#7A7A7A]  py-2 hover:text-[#f75c6c] cursor-pointer"
      >
        {currency}
      </li>
    ))}
  </ul>
</div>

          {/* Language Selector */}
      <div className="relative group">
  {/* Hoverable Trigger */}
  <div className="flex items-center font-semibold text-[#7A7A7A] space-x-1 hover:text-[#f75c6c] cursor-pointer">
    <span>{selectedLanguage}</span>
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Dropdown Menu */}
  <ul className="absolute z-10 mt-1 w-32 p-0 text-center border-t border-[#f75c6c] bg-white !text-[#7A7A7A]  shadow-lg hidden group-hover:block">
    {languages.map((language) => (
      <li
        key={language}
        onClick={() => handleLanguageChange(language)}
        className="px-4 py-2 text-[#7A7A7A]  hover:text-[#f75c6c] cursor-pointer"
      >
        {language}
      </li>
    ))}
  </ul>
</div>

        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-6">
          {/* Account Links */}
          <div className="flex items-center space-x-2">
           <Loginmodal/>
           <span className='text-gray-400'>/</span>
            <button
              className="text-[#7A7A7A]  hover:text-[#f75c6c] !no-underline"
            >
              Register
            </button>
          </div>

          {/* Shopping Cart */}
          <div className="flex items-center">
           
              <i className="fa-solid fa-basket-shopping text-sm text-[#7A7A7A] !no-underline hover:text-[#f75c6c]"></i>
              <div>
                
                <span className="ml-1 text-[#7A7A7A] !no-underline hover:text-[#f75c6c]">$0.00</span>
              </div>
           
          </div>
        </div>
      </div>
    </nav>

            <div className="mx-15 flex items-center justify-around py-2 px-3">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={logo} alt="Beauty Organic" className="h-20 w-auto " />
                </div>
                {/* Menu */}
                <div className='flex mt-4'>
                    <ul className='flex flex-row justify-between items-center gap-5'>
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showDropdown ? '#fe9995' : undefined, fontWeight: showDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">HOME</span>

                            {showDropdown && (
                                <div className="absolute -left-30 top-full  w-[90vw] max-w-4xl bg-white shadow-2xl  z-50 p-3 flex flex-row gap-2" style={{ borderTop: '2px solid #fe9995' }}>
                                    {demoMenu.map((col, colIdx) => (
                                        <ul key={colIdx} className="flex-1 flex flex-col gap-2 pr-2">
                                            {col.map((item, idx) =>
                                                item.to ? (
                                                   <Link  to={item.to} className="flex items-center gap-2 text-md font-normal no-underline !text-gray-500 py-1 transition group"style={{ textDecoration: 'none' }}>
                                                    <span className= "hover:text-[#fe9995] transition-colors">{item.label}</span>
                                                    {item.highlight && (
                                                   <span
                                                   className="ml-1 text-xs font-normal bg-gray-100 px-1 transition-colors hover:text-[#fe9995]"
                                                    style={{ transition: 'color 0.3s ease' }}
                                                    >
                                                    E
                                                 </span>
                                                 )}
                                                 </Link>

                                                 ) : (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center gap-2 text-md font-normal text-gray-500 border-b border-gray-200 py-1 hover:text-[#fe9995] transition"
                                                    >
                                                        {item.label}
                                                        {item.highlight && (
                                                            <span className="ml-1 text-xs font-normal bg-gray-100 hover:text-[#fe9995] px-1">E</span>
                                                        )}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showShopDropdown ? '#fe9995' : undefined, fontWeight: showShopDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowShopDropdown(true)}
                            onMouseLeave={() => setShowShopDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">SHOP</span>

                             {showShopDropdown && (
                                                                      <div className="absolute top-full -left-60 max-w-7xl w-220 bg-white shadow-2xl z-50 p-4 flex flex-row gap-5" style={{ borderTop: '2px solid #fe9995' }}>
                                                                        {shopMenu.map((menu, i) => (
                                                                          <div key={i}>
                                                                            <h4 className="font-medium !text-base">{menu.heading}</h4>
                                                                            <ul className='p-0 flex gap-3 flex-col'>
                                                                              {menu.items.map((item, idx) => (
                                                                                <li key={idx}>
                                                                                  <Link
                                                                                    to={item.to}
                                                                                    className="!text-gray-500 font-normal gap-2 flex border-b border-gray-100 !hover:text-[#fe9995] font p-0 !no-underline transition"
                                                                                  >
                                                                                    {item.label}
                                                                                  </Link>
                                                                                </li>
                                                                              ))}
                                                                            </ul>
                                                                          </div>
                                                                        ))}
                                                      
                                                                      </div>
                                                                    )}
                                                    </li>
                     
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showBlogDropdown ? '#fe9995' : undefined, fontWeight: showBlogDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowBlogDropdown(true)}
                            onMouseLeave={() => setShowBlogDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">BLOG</span>

                            {showBlogDropdown && (
                                <div className="absolute  top-full -left-40 w-[90vw] max-w-3xl bg-white shadow-2xl  z-50 p-8 flex flex-row gap-8" style={{ borderTop: '2px solid #fe9995' }}>
                                    {blogMenu.map((col, colIdx) => (
                                        <ul key={colIdx} className="flex-1 flex flex-col gap-2 border-r last:border-r-0 border-gray-200 pr-8 last:pr-0">
                                            <li className="text-[#fe9995] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display' }}>{col.heading}</li>
                                            {col.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-base py-1 text-gray-700 hover:text-[#fe9995] transition"
                                                    style={{ fontFamily: 'Playfair Display' }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showPagesDropdown ? '#fe9995' : undefined, fontWeight: showPagesDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowPagesDropdown(true)}
                            onMouseLeave={() => setShowPagesDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">PAGES</span>

                            {showPagesDropdown && (
                                <div className="absolute  top-full -right-50 max-w-3xl bg-white shadow-2xl  z-50 p-8 flex flex-row gap-8" style={{ borderTop: '2px solid #fe9995' }}>
                                    {pagesMenu.map((col, colIdx) => (
                                        <ul key={colIdx} className="flex-1 flex flex-col gap-2 border-r last:border-r-0 border-gray-200 pr-8 last:pr-0">
                                            <li className="text-[#fe9995] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display' }}>{col.heading}</li>
                                            {col.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-base py-1 text-gray-700 hover:text-[#fe9995] transition"
                                                    style={{ fontFamily: 'Playfair Display' }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showPortfoliosDropdown ? '#fe9995' : undefined, fontWeight: showPortfoliosDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowPortfoliosDropdown(true)}
                            onMouseLeave={() => setShowPortfoliosDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">PORTFOLIOS</span>

                            {showPortfoliosDropdown && (
                                <div className="absolute top-full  w-72 bg-white shadow-2xl  z-50 p-4 flex flex-col gap-2" style={{ borderTop: '2px solid #fe9995' }}>
                                    {portfoliosMenu.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-base py-2 text-gray-700 hover:text-[#fe9995] transition border-b last:border-b-0 border-gray-200"
                                            style={{ fontFamily: 'Playfair Display' }}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                        <li
                            style={{ fontFamily: 'Playfair Display', color: showElementsDropdown ? '#fe9995' : undefined, fontWeight: showElementsDropdown ? 'bold' : undefined }}
                            className="relative cursor-pointer group"
                            onMouseEnter={() => setShowElementsDropdown(true)}
                            onMouseLeave={() => setShowElementsDropdown(false)}
                        >
                            <span className="pb-1 border-b-2 border-transparent group-hover:border-[#fe9995] transition-all duration-200 inline-block">ELEMENTS</span>

                            {showElementsDropdown && (
                                <div className="absolute  top-full -right-3  w-[90vw] max-w-5xl bg-white shadow-2xl  z-50 p-8 flex flex-row gap-8" style={{ borderTop: '2px solid #fe9995' }}>
                                    {elementsMenu.map((col, colIdx) => (
                                        <ul key={colIdx} className="flex-1 flex flex-col gap-2 border-r last:border-r-0 border-gray-200 pr-8 last:pr-0">
                                            <li className="text-[#fe9995] font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display' }}>{col.heading}</li>
                                            {col.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-2 text-base py-1 text-gray-700 hover:text-[#fe9995] transition"
                                                    style={{ fontFamily: 'Playfair Display' }}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row  items-center gap-4'>
                    <div className='flex flex-row justify-between items-center gap-4'>
                        
                        <div
                            className="relative"
                            onMouseEnter={() => setShowSearchbar(true)}
                            onMouseLeave={() => setShowSearchbar(false)}
                        >
                            <i
                                className="fa-solid fa-magnifying-glass cursor-pointer hover:text-[#fe9995] text-xl"
                            ></i>
                            {showSearchbar && (
                                <div className="absolute right-0  w-64 bg-white border border-gray-200 rounded shadow-lg z-50">
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 text-gray-700 text-base outline-none border-none rounded"
                                        placeholder="Search ..."
                                        value={searchValue}
                                        onChange={e => setSearchValue(e.target.value)}
                                        style={{ fontFamily: 'Playfair Display' }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                 

                   
                </div>
            </div>

        </header>

  );
};

export default Perfumeheader;