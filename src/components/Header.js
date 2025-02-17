"use client";

import React, { useState } from "react";
import { Instagram, Youtube, Twitter, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e2a4a] text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-pink-500 text-2xl font-bold">
            <span className="flex items-center gap-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              e-satinalma.net
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            KURUMSAL
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            ÇÖZÜMLER
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            E-SATINALMA
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition-colors duration-200"
          >
            İLETİŞİM
          </a>
          <div className="relative group">
            <button className="hover:text-pink-500 transition-colors duration-200 flex items-center">
              PORTAL GİRİŞİ
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Action Buttons & Social Media */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Hesap Oluştur
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            ></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#1e2a4a] border-t border-gray-700">
          <div className="px-4 py-2 space-y-3">
            <a
              href="#"
              className="block py-2 hover:text-pink-500 transition-colors duration-200"
            >
              KURUMSAL
            </a>
            <a
              href="#"
              className="block py-2 hover:text-pink-500 transition-colors duration-200"
            >
              ÇÖZÜMLER
            </a>
            <a
              href="#"
              className="block py-2 hover:text-pink-500 transition-colors duration-200"
            >
              E-SATINALMA
            </a>
            <a
              href="#"
              className="block py-2 hover:text-pink-500 transition-colors duration-200"
            >
              İLETİŞİM
            </a>
            <a
              href="#"
              className="block py-2 hover:text-pink-500 transition-colors duration-200"
            >
              PORTAL GİRİŞİ
            </a>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Hesap Oluştur
            </button>
            <div className="flex items-center space-x-4 py-2">
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <WhatsApp size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
