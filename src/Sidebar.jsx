import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, idx: null });
  const tooltipRefs = useRef([]);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    {
      label: 'Dashboard',
      icon: <i className="fa-solid fa-gauge"></i>,
      dropdown: [
        { label: 'Home', to: '/Dashboardhome' },
        { label: 'Updates', to: '/Dashbordupdated' }
      ]
    },
    {
      label: 'Posts',
      icon: <i className="fa-solid fa-thumbtack"></i>,
      dropdown: [
        { label: 'All Posts', to: '/Allpost' },
        { label: 'Add Post', to: '/Addpost' },
        { label: 'Categories', to: '/Categories' },
        { label: 'Tags', to: '/Posttage' }
      ]
    },
    {
      label: 'Media',
      icon: <i className="fa-solid fa-photo-film"></i>,
      dropdown: [
        { label: 'Library', to: '/Library' },
        { label: 'Add Media File', to: '/NewMedia' }
      ]
    },
    {
      label: 'Pages',
      icon: <ion-icon name="copy-outline"></ion-icon>,
      dropdown: [
        { label: 'All Page', to: '/Allpage' },
        { label: 'Add Page', to: '/Addpage' }
      ]
    },
    {
      label: 'Comments',
      to: '/Comments',
      icon: <ion-icon name="chatbox-outline"></ion-icon>
    },
    {
      label: 'Appearance',
      icon: <i className="fa-solid fa-brush"></i>,
      dropdown: [
        { label: 'Themes', to: '/Themes' },
        { label: 'Editor', to: '/Editor' }
      ]
    },
   
    {
      label: 'Users',
      icon: <i className="fa-solid fa-user"></i>,
      dropdown: [
        { label: 'All User', to: '/Alluser' },
        { label: 'Add User', to: '/Adduser' },
        { label: 'Profile', to: '/Profile' }
      ]
    },
    {
      label: 'Tools',
      icon: <i className="fa-solid fa-wrench"></i>,
      dropdown: [
        { label: 'Available Tools', to: '/Tools' },
        { label: 'Import', to: '/Imports' },
        { label: 'Export', to: '/Export' },
        { label: 'Site Health', to: '/Sitehealth' },
        { label: 'Export Personal Data', to: '/ExportPersonalData' },
        { label: 'Erase Personal Data', to: '/ErasePersonalData' },
        { label: 'Theme File Editor', to: '/posts/categories' },
        { label: 'Plugin File Editor', to: '/posts/tags' }
      ]
    },
    {
      label: 'Setting',
      icon: <i className="fa-solid fa-sliders"></i>,
      dropdown: [
        { label: 'General', to: '/GeneralSettings' },
        { label: 'Writing', to: '/WritingSettings' },
        { label: 'Reading', to: '/ReadingSettings' },
        { label: 'Discussion', to: '/DiscussionSettings' },
        { label: 'Media', to: '/MediaSettings' },
        { label: 'Permalinks', to: '/PermalinkSettings' },
        { label: 'Privacy', to: '/PrivacySettings' }
      ]
    }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setOpenDropdown(null);
  };

  const handleMenuClick = (item, index) => {
    if (item.dropdown) {
      setOpenDropdown(openDropdown === index ? null : index);
      // Navigate to first dropdown item if exists
      if (item.dropdown.length > 0) {
        navigate(item.dropdown[0].to);
      }
    } else if (item.to) {
      navigate(item.to);
      setOpenDropdown(null);
    }
  };

  const showTooltip = (idx) => setTooltip({ show: true, idx });
  const hideTooltip = () => setTooltip({ show: false, idx: null });

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="lg:hidden fixed top-15  right-4 z-50 text-black p-2 cursor-pointer"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open sidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40  lg:hidden ${isMobileOpen ? '' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 opacity-40 ${isMobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileOpen(false)} />
        <aside className={`bg-[#23282d] text-white !overflow-y-auto mt-10 left-0 h-full w-40  transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button className="ab w-40ght-4 text-white cursor-pointer" onClick={() => setIsMobileOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
           <ul className="flex flex-col gap-1 mt-1 px-2">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="text-sm flex flex-col gap-1 relative">
              <div
                ref={(el) => (tooltipRefs.current[idx] = el)}
                onClick={() => {
                  handleMenuClick(item, idx);
                  // Close tooltip when clicking on another menu item
                  if (openDropdown !== idx) {
                    hideTooltip();
                  }
                }}
                onMouseEnter={() => showTooltip(idx)}
                onMouseLeave={hideTooltip}
                className={`flex items-center gap-2 py-2 px-2  cursor-pointer transition-colors duration-200 ${openDropdown === idx ? 'bg-[#2a6caf]' : 'hover:bg-[#2a6caf]'} ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span>{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
                {/* Tailwind Tooltip */}
                {item.dropdown && tooltip.show && tooltip.idx === idx && (
                  <div className="absolute left-full top-1/2 ml-1 -translate-y-1/2 min-w-[180px] bg-[#34383d] text-white  shadow-lg ">
                    <ul className="wp-submenu wp-submenu-wrap flex flex-col gap-0 px-0 pb-2 pt-0" style={{background: 'none', boxShadow: 'none', margin: 0, padding: '8px 0 8px 0'}}>
                      {item.dropdown.map((subItem, index) => (
                          <Link
                            to={subItem.to}
                            onClick={() => {
                              setOpenDropdown(null);
                              hideTooltip();
                              navigate(subItem.to);
                            }}
                            className={`block !text-gray-300 hover:text-white hover:bg-[#23282d] !no-underline px-4 py-1 rounded transition-colors duration-150 text-sm ${index === 0 ? 'wp-first-item' : ''}`}
                            style={{textDecoration: 'none', cursor: 'pointer'}}
                          >
                            {subItem.label}
                          </Link>
                        
                      ))}
                    </ul>
                    <span className="absolute left-[-8px] top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#34383d]"></span>
                  </div>
                )}
              </div>
              {!isCollapsed && openDropdown === idx && item.dropdown && (
                <ul className="mt-1 mb-2 p-0 !no-underline bg-[#34383d0] ">
                  {item.dropdown.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={sub.to}
                        onClick={() => setOpenDropdown(null)}
                        className="block py-1 text-sm m-0 text-white !no-underline hover:bg-[#2a6caf] cursor-pointer transition-colors duration-200"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="nav-item px-2 flex text-sm gap-4 items-center">
            <button 
              className="bg-transparent p-0 cursor-pointer hover:bg-[#2a6caf] rounded transition-colors duration-200" 
              onClick={toggleSidebar}
              data-tooltip-target="tooltip-collapse"
              data-tooltip-trigger="hover"
              onMouseEnter={(e) => showTooltip({ label: 'Collapse Menu' }, e)}
              onMouseLeave={() => {
                // Do nothing - tooltip stays open until another action
              }}
            >
              <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
            </button>
            {!isCollapsed && <span>Collapse Menu</span>}
          </li>
        </ul>
        </aside>
      </div>

      {/* Desktop Sidebar */}
      <aside 
        ref={sidebarRef}
        className={`bg-[#23282d] text-white fixed top-8 py-4 left-0 hidden lg:flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-46'}`} 
        style={{ height: 'calc(100vh - 2rem)' }}
      >
        
        <ul className="flex flex-col gap-1 mt-1 px-2">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="text-sm flex flex-col gap-1 relative">
              <div
                ref={(el) => (tooltipRefs.current[idx] = el)}
                onClick={() => {
                  handleMenuClick(item, idx);
                  // Close tooltip when clicking on another menu item
                  if (openDropdown !== idx) {
                    hideTooltip();
                  }
                }}
                onMouseEnter={() => showTooltip(idx)}
                onMouseLeave={hideTooltip}
                className={`flex items-center gap-2 py-2 px-2 z-30 cursor-pointer transition-colors duration-200 ${openDropdown === idx ? 'bg-[#2a6caf]' : 'hover:bg-[#2a6caf]'} ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span>{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
                {/* Tailwind Tooltip */}
                {item.dropdown && tooltip.show && tooltip.idx === idx && (
                  <div className="absolute left-43 top-1/2  -translate-y-1/2 min-w-[180px] bg-[#34383d] text-white    shadow-lg ">
                    <ul className="wp-submenu wp-submenu-wrap flex flex-col gap-0 px-0 pb-2 pt-0" style={{background: 'none', boxShadow: 'none', margin: 0, padding: '8px 0 8px 0'}}>
                      {item.dropdown.map((subItem, index) => (
                          <Link
                            to={subItem.to}
                            onClick={() => {
                              setOpenDropdown(null);
                              hideTooltip();
                              navigate(subItem.to);
                            }}
                            className={`block !text-gray-300 hover:text-white hover:border-l-2 hover:border-blue-500 !no-underline px-4 py-1  transition-colors duration-150 text-sm ${index === 0 ? 'wp-first-item' : ''}`}
                            style={{textDecoration: 'none', cursor: 'pointer'}}
                          >
                            {subItem.label}
                          </Link>
                        
                      ))}
                    </ul>
                    <span className="absolute left-[-6px] top-2   w-20 h-20 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#34383d]"></span>
                  </div>
                )}
              </div>
              {!isCollapsed && openDropdown === idx && item.dropdown && (
                <ul className="mt-1 mb-2 p-0 !no-underline bg-[#34383d0] ">
                  {item.dropdown.map((sub, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={sub.to}
                        onClick={() => setOpenDropdown(null)}
                        className="block py-1 text-sm m-0 text-white !no-underline hover:bg-[#2a6caf] cursor-pointer transition-colors duration-200"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="nav-item px-2 flex text-sm gap-4 items-center">
            <button 
              className="bg-transparent p-0 cursor-pointer hover:bg-[#2a6caf] rounded transition-colors duration-200" 
              onClick={toggleSidebar}
              data-tooltip-target="tooltip-collapse"
              data-tooltip-trigger="hover"
              onMouseEnter={(e) => showTooltip({ label: 'Collapse Menu' }, e)}
              onMouseLeave={() => {
                // Do nothing - tooltip stays open until another action
              }}
            >
              <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
            </button>
            {!isCollapsed && <span>Collapse Menu</span>}
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
