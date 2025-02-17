import React from "react";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import References from "@/components/References";
import EProcurementSystem from "@/components/EProcurementSystem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <References />
      <EProcurementSystem />
      <Footer />
    </main>
  );
}
