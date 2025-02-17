"use client";

import React from "react";
import { FileText, Send, FileCheck } from "lucide-react";
import Image from "next/image";

const EProcurementSystem = () => {
  const features = [
    {
      icon: <FileText size={32} />,
      title: "Talep Oluşturun",
      description:
        "Alıcılar E-satınalma platformu üzerinden platform üzerinde bulunan bir ürün veya hizmet için belgeyle talep oluşturarak çok sayıda alternatif tedarikçiye duyuru yapmış olur.",
    },
    {
      icon: <Send size={32} />,
      title: "Teklif Verin",
      description:
        "Üretici ve tedarikçiler, E-satınalma platformu üzerinde oluşturulan talepleri görerek uygunluk ölçüsünde yenilikçi tekliflerini sunarak işbirliği fırsatlarını değerlendirebilirler.",
    },
    {
      icon: <FileCheck size={32} />,
      title: "Sipariş Oluşturun",
      description:
        "Alıcılar taleplerine gelen teklifleri değerlendirerek fiyat ve diğer hususlar bakımından en uygun olan ve firmanın iç işleyişlerine uygun gelen e-satınalma platformu üzerinde oluşturulur.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            e-satınalma Sistemi
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Tüm satınalma işlemlerinizi tek platformda gerçekleştirin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0F7BB8] rounded-3xl p-6 text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/image.png"
              alt="Digital Platform"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Satınalma Süreçlerini Dijitalleştiren Platform
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Tedarikçi ve Alıcıların en büyük topluluklarının amaçlarını
              gerçekleştirmede olağanüstü şekilde uzmanlaşıp bugüne kadar elde
              ettiğimiz tecrübelerle kurduğumuz e-satınalma platformumuz ve
              sağladığımız profesyonel destekle, dünya genelinde ve tüm
              sektörlerde, kurumların satınalma kazanımlarını sağlamasına imkân
              veriyoruz.
            </p>
            <div className="pt-4">
              <button className="bg-[#0F7BB8] text-white px-8 py-3 rounded-lg hover:bg-[#0F7BB8] transition-colors duration-200">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EProcurementSystem;
