"use client";

import Navbar from "../../../components/fragments/Navbar/index";
import Hero from "../../../components/fragments/Hero/index";
import EventRegister from "@/components/fragments/Auth/Register/Event";

export default function OrderTicketPage() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <EventRegister></EventRegister>
    </div>
  );
}
