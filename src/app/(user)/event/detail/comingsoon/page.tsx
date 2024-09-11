"use client";

import Hero from "@/components/fragments/Hero";
import DetailCard from "@/components/fragments/Detail/Card";

export default function ComingsoonPage() {
  return (
    <div>
      <Hero></Hero>
      <DetailCard
        text="Coming Soon"
        size="w-[210px] h-[280px]"
        label={true}
      ></DetailCard>
    </div>
  );
}
