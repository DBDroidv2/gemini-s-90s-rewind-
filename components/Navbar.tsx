import React, { useState } from 'react'; // Import useState for managing menu state
import { NavLink } from 'react-router-dom';
import { HomeIcon, InfoIconCircled, ImageIcon, LinkIcon, GameControllerIcon, MenuIcon, CloseIcon } from './icons'; // Import MenuIcon and CloseIcon

const Navbar: React.FC = () => {
  // State to manage the visibility of the mobile navigation menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu's open/closed state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkBaseClasses = "flex items-center px-3 py-2 md:px-4 font-display text-base md:text-lg border-2 border-black shadow-hard-dark hover:bg-opacity-80 transition-all duration-150 active:shadow-button-press active:translate-y-0.5 rounded-md";
  const activeLinkClasses = "bg-accent-yellow text-black scale-105";
  const inactiveLinkClasses = "bg-accent-pink text-black hover:bg-accent-cyan";

  return (
    <nav className="w-full bg-container-alt-bg p-3 mb-6 shadow-lg border-b-4 border-accent-pink sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between">
        {/* Brand Title/Logo */}
        {/* Added py-2 for vertical alignment and focus:outline-none to remove default focus border */}
        <NavLink to="/" end className="flex-shrink-0 py-2 focus:outline-none">
          <div className="text-xl sm:text-2xl font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-pink to-accent-lime hover:opacity-80 transition-opacity">
            Gemini's 90s Rewind!
          </div>
        </NavLink>

        {/* Hamburger menu button for small screens */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-md text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-yellow"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <CloseIcon className="w-6 h-6 text-accent-cyan" /> // Close icon when menu is open
          ) : (
            <MenuIcon className="w-6 h-6 text-accent-cyan" /> // Menu icon when menu is closed
          )}
        </button>

        {/* Navigation links - hidden on small screens by default, shown when menu is open or on medium+ screens */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden' // Show if isOpen is true, otherwise hide
          } w-full sm:flex sm:w-auto flex-col sm:flex-row items-center mt-4 sm:mt-0`} // Flex column on mobile, row on sm+
        >
          <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 md:space-x-4 w-full">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} w-full justify-center` // Full width on mobile
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label="Go to Home Page"
              >
                <HomeIcon className="w-5 h-5 mr-1.5 md:mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} w-full justify-center` // Full width on mobile
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label="Go to About Page"
              >
                <InfoIconCircled className="w-5 h-5 mr-1.5 md:mr-2" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} w-full justify-center` // Full width on mobile
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label="Go to Gallery Page"
              >
                <ImageIcon className="w-5 h-5 mr-1.5 md:mr-2" />
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/links"
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} w-full justify-center` // Full width on mobile
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label="Go to Links Page"
              >
                <LinkIcon className="w-5 h-5 mr-1.5 md:mr-2" />
                Links
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/games"
                className={({ isActive }) =>
                  `${linkBaseClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses} w-full justify-center` // Full width on mobile
                }
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label="Go to Games Page"
              >
                <GameControllerIcon className="w-5 h-5 mr-1.5 md:mr-2" />
                Games
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
