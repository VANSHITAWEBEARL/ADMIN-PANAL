import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, item: null, x: 0, y: 0 });
  const tooltipRefs = useRef([]);
  const tooltipInstances = useRef([]);
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
    const style = document.createElement('style');
    style.innerHTML = `
      .tooltip-inner {
        background-color: rgb(36, 42, 49);
        color: #f0f0f1;
        border-radius: 4px;
        text-align: left;
        max-width: 300px;
      }
      .bs-tooltip-end .tooltip-arrow::before {
        border-right-color: rgb(37, 46, 53);
      }
      .tooltip-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .tooltip-list li {
        padding: 0;
        white-space: wrap;
      }
    `;
    document.head.appendChild(style);

    tooltipInstances.current = tooltipRefs.current.map((el, idx) => {
      if (el) {
        const item = menuItems[idx];
        if (item.dropdown) {
          el.setAttribute('data-bs-html', 'true');
          el.setAttribute(
            'title',
            `<ul class="tooltip-list">${item.dropdown
              .map((subItem) => `<li>${subItem.label}</li>`)
              .join('')}</ul>`
          );
        }
        return new Tooltip(el, {
          trigger: 'hover',
          placement: 'right'
        });
      }
      return null;
    });

    return () => {
      tooltipInstances.current.forEach((instance) => {
        if (instance && instance._element) instance.dispose();
      });
      document.head.removeChild(style);
    };
  }, []);

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
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        if (item.dropdown[0]?.to) navigate(item.dropdown[0].to);
        setOpenDropdown(index);
      }
    } else if (item.to) {
      navigate(item.to);
      setOpenDropdown(null);
    }
  };

  const showTooltip = (item, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    console.log('Showing tooltip for:', item.label, 'at position:', rect.right + 10, rect.top + rect.height / 2);
    setTooltip({
      show: true,
      item,
      x: rect.right + 10,
      y: rect.top + rect.height / 2
    });
  };

  const hideTooltip = () => {
    setTooltip({ show: false, item: null, x: 0, y: 0 });
  };

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
        <aside className={`bg-[#23282d] text-white !overflow-y-auto mt-10 left-0 h-full w-full max-w-xs transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button className="absolute top-7 right-4 text-white cursor-pointer" onClick={() => setIsMobileOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="flex flex-col gap-1 !mt-15 px-2 !overflow-y-auto">
            {menuItems.map((item, idx) => (
              <li key={item.label} className="text-sm flex flex-col gap-1 relative">
                <div
                  ref={(el) => (tooltipRefs.current[idx] = el)}
                  onClick={() => handleMenuClick(item, idx)}
                  onMouseEnter={() => {
                    tooltipInstances.current.forEach((instance, i) => {
                      if (instance) {
                        if (i === idx) {
                          instance.show();
                        } else {
                          instance.hide();
                        }
                      }
                    });
                  }}
                  onMouseLeave={() => {
                    // Do nothing, so tooltip stays until another is hovered
                  }}
                  className={`flex items-center gap-2 py-2 px-2 rounded cursor-pointer ${openDropdown === idx ? 'bg-[#2a6caf]' : 'hover:bg-[#2a6caf]'}`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {openDropdown === idx && item.dropdown && (
                  <ul className="mt-1 bg-[#34383d0] p-0">
                    {item.dropdown.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sub.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block text-white text-sm  py-1.5 !no-underline hover:bg-[#3e4348] rounded"
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
              <button className="bg-transparent p-0 cursor-pointer" onClick={toggleSidebar}>
                <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
              </button>
              <span>Collapse Menu</span>
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
                data-tooltip-target={`tooltip-${idx}`}
                data-tooltip-trigger="hover"
                onMouseEnter={(e) => {
                  tooltipInstances.current.forEach((instance, i) => {
                    if (instance) {
                      if (i === idx) {
                        instance.show();
                      } else {
                        instance.hide();
                      }
                    }
                  });
                  showTooltip(item, e);
                }}
                onMouseLeave={() => {
                  // Do nothing - tooltip stays open until another action
                }}
                className={`flex items-center gap-2 py-2 px-2 cursor-pointer transition-colors duration-200 ${openDropdown === idx ? 'bg-[#2a6caf]' : 'hover:bg-[#2a6caf]'} ${isCollapsed ? 'justify-center' : ''}`}
              >
                <span>{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
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

      {/* Custom Tooltips */}
      {menuItems.map((item, idx) => (
        <div
          key={idx}
          id={`tooltip-${idx}`}
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700 min-w-[200px] cursor-pointer"
          style={{
            left: tooltip.show && tooltip.item === item ? tooltip.x : '0px',
            top: tooltip.show && tooltip.item === item ? tooltip.y : '0px',
            transform: tooltip.show && tooltip.item === item ? 'translateY(-50%)' : 'none',
            opacity: tooltip.show && tooltip.item === item ? '1' : '0',
            visibility: tooltip.show && tooltip.item === item ? 'visible' : 'visible'
          }}
        >
          <div className="font-semibold text-white mb-2">{item.label}</div>
          {item.dropdown && (
            <div className="space-y-1">
              {item.dropdown.map((subItem, index) => (
                <Link
                  key={index}
                  to={subItem.to}
                  onClick={() => {
                    setOpenDropdown(null);
                    hideTooltip();
                  }}
                  className="block text-gray-300 hover:text-white hover:bg-[#2a6caf] px-2 py-1 rounded cursor-pointer transition-colors duration-200 text-sm"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      ))}
      
      {/* Collapse Menu Tooltip */}
      <div
        id="tooltip-collapse"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700 cursor-pointer"
        style={{
          left: tooltip.show && tooltip.item?.label === 'Collapse Menu' ? tooltip.x : '0px',
          top: tooltip.show && tooltip.item?.label === 'Collapse Menu' ? tooltip.y : '3px',
          transform: tooltip.show && tooltip.item?.label === 'Collapse Menu' ? 'translateY(-70%)' : '',
          opacity: tooltip.show && tooltip.item?.label === 'Collapse Menu' ? '5' : '1',
          visibility: tooltip.show && tooltip.item?.label === 'Collapse Menu' ? 'visible' : 'visible'
        }}
      >
        Collapse Menu
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default Sidebar;