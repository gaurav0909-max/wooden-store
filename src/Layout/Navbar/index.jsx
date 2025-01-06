import React, { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#collections', label: 'Collections' },
    { href: '#craftsmanship', label: 'Craftsmanship' },
    { href: '#custom', label: 'Custom Design' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className=" bg-[#2C1810] text-white shadow-lg z-50 rounded-md">
      <div className="container mx-auto px-4 py-3 max-w-[1024px]">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="WoodCraft Logo"
              className="h-10 w-10 rounded-lg"
            />
            <span className="font-bold text-xl md:text-2xl text-amber-500">WoodCraft</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative 
                  text-white 
                  text-sm lg:text-base
                  hover:text-amber-500 
                  transition-colors 
                  duration-300 
                  group
                "
              >
                {link.label}
                <span
                  className="
                    absolute 
                    bottom-[-4px] 
                    left-0 
                    w-0 
                    h-0.5 
                    bg-amber-500 
                    transition-all 
                    duration-300 
                    group-hover:w-full
                  "
                />
              </a>
            ))}
            <div className="ml-4">
              <button className="
                bg-amber-500 
                text-[#2C1810] 
                px-3 lg:px-4 
                py-2 
                rounded-lg 
                text-sm lg:text-base
                hover:bg-amber-600 
                transition-colors 
                flex 
                items-center 
                space-x-2
              ">
                <ShoppingCart size={16} />
                <span>Cart</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden 
          fixed 
          top-16 
          left-0 
          w-full 
          bg-[#2C1810] 
          transition-transform 
          duration-300 
          ease-in-out 
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="container mx-auto px-4 py-6 max-w-[1024px] space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                block 
                py-3 
                px-4 
                text-white 
                hover:bg-amber-500/20 
                rounded-lg 
                transition-colors
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="
            w-full 
            bg-amber-500 
            text-[#2C1810] 
            py-3 
            rounded-lg 
            flex 
            items-center 
            justify-center 
            space-x-2 
            hover:bg-amber-600
          ">
            <ShoppingCart size={18} />
            <span>View Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;