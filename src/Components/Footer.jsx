import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black px-20 text-gray-400 pt-10 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="text-white font-bold text-2xl">
                TattooSphere
              </span>
            </a>
            <p className="mt-2 text-gray-400 text-sm text-center md:text-left">
              Crafting your personal stories into timeless art.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 mt-4 md:mt-0">
            <a
              href="/about"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-sm"
            >
              About Us
            </a>
            <a
              href="/services"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-sm"
            >
              Services
            </a>
            <a
              href="/portfolio"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-sm"
            >
              Portfolio
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-500 text-xs md:text-sm">
              &copy; 2024 TattooSphere. All Rights Reserved.
            </p>
            <div className="flex mt-4 md:mt-0">
              <a
                href="/terms"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-xs md:text-sm mr-4"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-xs md:text-sm"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
