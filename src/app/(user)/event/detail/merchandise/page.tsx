"use client";

import DetailCard from "@/components/fragments/Detail/Card";
import Hero from "@/components/fragments/Hero";

export default function MerchandisePage() {
  return (
    <div>
      <Hero></Hero>
      <DetailCard
        text="Merchandise"
        size="w-[400px] h-[200px]"
        cols="grid-cols-3"
        label={false}
      ></DetailCard>
    </div>
  );
}
