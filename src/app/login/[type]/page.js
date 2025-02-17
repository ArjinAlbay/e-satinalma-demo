"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const LoginPage = () => {
  const { type } = useParams();

  const getTitle = () => {
    switch (type) {
      case "isletme":
        return "İşletme Giriş";
      case "hastane":
        return "Hastane Giriş";
      case "dental":
        return "Dental-Medikal Giriş";
      default:
        return "Portal Giriş";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-lg overflow-hidden flex">
        <div className="hidden lg:block lg:w-1/2 relative p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="relative h-full flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {getTitle()}
              </h2>
              <p className="text-gray-600 mb-12">
                Tedarik zinciri yönetiminde dijital dönüşüm için güvenli giriş
                yapın.
              </p>
              <Image
                src="/images/isletme.png"
                alt="Login"
                width={600}
                height={600}
                className="rounded-2xl shadow-md"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
          <div className="space-y-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
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

              <p className="text-gray-600">Portalına hoşgeldiniz</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
                    placeholder="(000) 000-0000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                </div>

                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all"
                    placeholder="Şifre"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-md">
                Giriş Yap
              </button>

              <div className="text-center">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                >
                  Şifremi Unuttum
                </a>
              </div>
            </form>

            <div className="pt-8 border-t border-gray-100">
              <div className="flex justify-center space-x-6">
                <div className="bg-gray-50 p-3 rounded-xl">
                  <Image
                    src="https://static.e-satinalma.net/images/iyzico.svg"
                    alt="Forbis"
                    width={400}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
