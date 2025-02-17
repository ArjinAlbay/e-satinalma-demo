"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e2a4a] text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            <button className="flex items-center text-white hover:text-pink-500 transition-colors duration-200">
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

            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
              <a
                href="/login/isletme"
                target="_blank"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
              >
                İşletme Giriş
              </a>
              <a
                href="/login/hastane"
                target="_blank"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
              >
                Hastane Giriş
              </a>
              <a
                href="/login/dental"
                target="_blank"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
              >
                Dental-Medikal Giriş
              </a>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200">
            Hesap Oluştur
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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
              ></a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              ></a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              ></a>
              <a
                href="#"
                className="hover:text-pink-500 transition-colors duration-200"
              ></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
