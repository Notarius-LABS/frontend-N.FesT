"use client";

import Navbar from "@/components/fragments/Navbar";
import Hero from "@/components/fragments/Hero";
import EventOrder from "@/components/fragments/Order/Event";

export default function OrderTicketPage() {
  return (
    <div className="min-h-[80vh]">
      <Hero></Hero>
      <EventOrder></EventOrder>
    </div>
  );
}
