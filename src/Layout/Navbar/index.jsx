import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import MobileMenu from '../../Components/Menu/MobileMenu';
import DesktopMenu from './../../Components/Menu/DesktopMenu/index';
import Logo from "../../Components/navbar-ui/Logo"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#craftsmanship', label: 'Craftsmanship' },
    { href: '#custom', label: 'Custom Design' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#2C1810] text-white shadow-lg z-50 rounded-md">
      <div className="container mx-auto px-4 py-3 max-w-[1024px]">
        <div className="flex justify-between items-center">
          <Logo />

          <DesktopMenu navLinks={navLinks} />

          <div className="ml-4 flex items-center">
            <button className="bg-amber-500 text-[#2C1810] px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base hover:bg-amber-600 transition-colors flex items-center space-x-2">
              <ShoppingCart size={16} />
              <span>Cart</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
};

export default Navbar;
