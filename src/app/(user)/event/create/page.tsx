'use client'

import Hero from "@/components/fragments/Hero";
import Footer from "@/components/layouts/Footer";

export default function CreateEventPage() {
  return (
    <div>
      <Hero description={false} button={false} text="Buat Konser Baru"></Hero>
      <Footer></Footer>
    </div>
  );
}