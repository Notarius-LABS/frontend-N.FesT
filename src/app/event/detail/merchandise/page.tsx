"use client";

import Navbar from "@/components/fragments/Navbar/Navbar";
import Highlight from "../../../../components/fragments/Highlight/index";
import Footer from "../../../../components/layouts/Footer/index";
import DetailCard from "@/components/fragments/Detail/Card";

export default function MerchandisePage() {
  return (
    <div>
      <Navbar></Navbar>
      <Highlight></Highlight>
      <DetailCard
        text="Merchandise"
        size="w-[550px] h-[300px]"
        label={false}
      ></DetailCard>
      <Footer></Footer>
    </div>
  );
}
