'use client'

import Footer from "@/components/layouts/Footer";


export default function DetailLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    {children}
    <Footer></Footer>
    </>
  )
}