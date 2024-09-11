"use client";

import Hero from "@/components/fragments/Hero";

type Props = {
  children?: React.ReactNode;
};

export default function CreateEventLayout({ children }: Props) {
  return (
    <>
      <Hero text="Buat Konser Baru" description={false} button={false}></Hero>
      {children}
    </>
  );
}
