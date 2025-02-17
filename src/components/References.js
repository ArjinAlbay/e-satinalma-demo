"use client";

import React from "react";
import Image from "next/image";

const References = () => {
  const logos = [
    {
      name: "Azra Galvaniz",
      image: "/images/azra.png",
    },
    {
      name: "Batı Hastanesi",
      image: "/images/batihastane.png",
    },
    {
      name: "Formis Yapı",
      image: "/images/forbis.png",
    },
    {
      name: "Şimşek Alüminyum",
      image: "/images/simsek.png",
    },
    {
      name: "Ay Yapı",
      image: "/images/ay.png",
    },
    {
      name: "FM Koparan",
      image: "/images/koparan.png",
    },
    {
      name: "Forte Grup",
      image: "/images/forte.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-blue-900">Referanslarımız</h2>
          <div className="mt-2 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center flex-wrap gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group relative w-[180px] h-[80px] bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={150}
                  height={60}
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default References;
