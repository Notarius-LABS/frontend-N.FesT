"use client";

import Navbar from "@/components/fragments/Navbar/Navbar";
import Highlight from "../../../../components/fragments/Highlight/index";
import Footer from "../../../../components/layouts/Footer/index";
import DetailCard from "../../../../components/fragments/Detail/Card";

export default function ComingsoonPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Highlight></Highlight>
      <DetailCard
        text="Coming Soon"
        size="w-[300px] h-[370px]"
        label={true}
      ></DetailCard>
      <Footer></Footer>
    </div>
  );
}
