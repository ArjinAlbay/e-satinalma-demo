"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const menuItems = [
    {
      title: "Kurumsal",
      links: ["Hakkımızda", "İletişim"],
    },
    {
      title: "Çözümler",
      links: ["Hastane", "Dental", "İşletme"],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF size={16} />, url: "#", label: "Facebook" },
    { icon: <FaTwitter size={16} />, url: "#", label: "Twitter" },
    { icon: <FaInstagram size={16} />, url: "#", label: "Instagram" },
    { icon: <FaLinkedinIn size={16} />, url: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#1e2a4a] border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-semibold text-white">e-satinalma.net</div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-white  transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {menuItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-white mb-3">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-lg text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h3 className="text-lg font-medium text-white">İletişim</h3>
            <div className="flex items-start gap-2 text-lg text-white">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>Vadişehir Seyrantepe Plaza D Blok, İstanbul</p>
            </div>
            <div className="flex items-center gap-2 text-lg text-white">
              <Phone size={16} />
              <p>+90 530 109 51 71</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs text-white">
              <a href="#" className="text-white">
                Gizlilik
              </a>
              <a href="#" className="text-white">
                KVKK
              </a>
            </div>
            <div className="text-xs text-gray-400">© 2025 E-satınalma.Net</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
