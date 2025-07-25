import React from 'react';
import { Link } from 'react-router-dom'; // Correct router for web apps
import logo from './assets/583.jpeg';
import avatar from './assets/identicon.png'; // Add this import

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openedByClick, setOpenedByClick] = React.useState(false);

  // Optional: Close dropdown if clicked outside
  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.user-menu')) {
        setMenuOpen(false);
        setOpenedByClick(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header className="w-full fixed  top-0 left-0 right-0 z-50 bg-[#23282d] px-3 py-1  shadow-lg text-sm">
      <div className="flex flex-wrap items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Logo */}
          <div className="w-6 h-6">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Home Link */}
          <Link to="/" className="text-white !no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-house-chimney text-gray-400" aria-hidden="true"></i>
            <span>Shampoo</span>
          </Link>

          {/* Refresh Link */}
          <Link to="/" className="text-white !no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-arrows-rotate text-gray-400" aria-hidden="true"></i>
            <span>1</span>
          </Link>

          {/* Comment Link */}
          <Link to="/" className="text-white !no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-message text-gray-400" aria-hidden="true"></i>
            <span>0</span>
          </Link>

          {/* New Link */}
          <Link to="/" className="text-white !no-underline font-medium flex items-center gap-1">
            <i className="fa-solid fa-plus text-gray-400" aria-hidden="true"></i>
            <span>New</span>
          </Link>
        </div>

        {/* Right Section */}
        <nav className="mt-2 sm:mt-0 flex items-center">
          <div
            className="relative flex items-center cursor-pointer user-menu"
            onMouseEnter={() => {
              if (!openedByClick) setMenuOpen(true);
            }}
            onMouseLeave={() => {
              if (!openedByClick) setMenuOpen(false);
            }}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setOpenedByClick((prev) => !menuOpen ? true : false);
            }}
          >
            <div className='flex gap-2'>
              <Link to="/Profile" className='!no-underline flex items-center gap-2'>
            <span className="font-semibold text-gray-200 flex items-center gap-2">
              Howdy, <span className="font-bold">root</span>
            </span>
            <div className="w-5 h-5  bg-gray-300 flex items-center justify-center  mr-2 ">
                 <i className="fa-solid fa-user text-sm text-gray-500"></i>
               </div>
               </Link>
               </div>

            {menuOpen && (
             <div className="absolute -right-5 top-4 min-w-[250px] bg-[#23282d] text-white rounded shadow-lg py-4 z-50 animate-fadeIn">
             <div className="flex items-center px-4">
               {/* Avatar Image */}
               <div className="w-12 h-12  bg-gray-300 flex items-center justify-center  mr-4 mb-2">
                 <i className="fa-solid fa-user text-2xl text-gray-500"></i>
               </div>
               
               {/* Username and links */}
               <div>
                 <div className="font-semibold mb-1">root</div>
                 <Link
                   to="/Profile"
                   className="block text-sm text-white hover:text-[#00aaff] mb-1"
                 >
                   Edit Profile
                 </Link>
                 <div className="text-sm text-white hover:text-[#00aaff] cursor-pointer">
                   Log Out
                 </div>
               </div>
             </div>
           </div>
           
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
