'use client'

import Navbar from "@/components/fragments/Navbar";
import Hero from "@/components/fragments/Hero";
import Footer from "@/components/layouts/Footer";


export default function CreateEventPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero description={false} button={false} text="Buat Konser Baru"></Hero>
      <Footer></Footer>
    </div>
  );
}