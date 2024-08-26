"use client";

import Navbar from "@/components/fragments/Navbar/index";
import Hero from "../../../../components/fragments/Hero/index";
import Footer from "../../../../components/layouts/Footer/index";
import DetailCard from "../../../../components/fragments/Detail/Card";

export default function ComingsoonPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <DetailCard
        text="Coming Soon"
        size="w-[210px] h-[280px]"
        label={true}
      ></DetailCard>
      <Footer></Footer>
    </div>
  );
}
