import Navbar from "@/components/fragments/Navbar";


export default function EventLayout({children}: {children: React.ReactNode}) {
  return (
    <>
    <Navbar></Navbar>
    {children}
    </>
  )
}