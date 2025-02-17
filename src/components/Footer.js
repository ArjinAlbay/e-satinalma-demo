"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const menuItems = [
    {
      title: "İletişim",
      links: ["İletişim"],
    },
    {
      title: "e-Satınalma",
      links: ["E-Satınalma"],
    },
    {
      title: "Çözümler",
      links: ["Çözümler"],
    },
    {
      title: "Kurumsal",
      links: ["Kurumsal"],
    },
  ];

  return (
    <footer className="bg-[#1e2a4a] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-pink-500 text-xl font-bold">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-6 h-6"
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
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors duration-200"
              ></a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors duration-200"
              ></a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors duration-200"
              ></a>
              <a
                href="#"
                className="text-white hover:text-pink-500 transition-colors duration-200"
              ></a>
            </div>
          </div>

          {/* Menu Links */}
          {menuItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>
                  İstanbul Head Office Hamidiye Mah. Selçuklu Cad. No:10 34408
                  Vadişehir Seyrantepe Plaza D Blok, Kat:2 D:3
                </p>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={20} />
                <div>
                  <p>SATIŞ: +90 530 109 51 71</p>
                  <p>DESTEK: +90 538 586 69 30</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-48 bg-gray-700 rounded-lg overflow-hidden">
              <img
                src="/api/placeholder/600/300"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Links and Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm text-gray-300">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                İnternet Sitesi Aydınlatma Metni
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                KVKK ve Gizlilik Bildirimi
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Çerez Politikası
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Açık Rıza Beyanı
              </a>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 E-satınalma.Net TÜM HAKLARI SAKLIDIR
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
