"use client";

import Navbar from "@/components/fragments/Navbar/index";
import Hero from "@/components/fragments/Hero";
import Footer from "@/components/layouts/Footer/index";
import ProfileContainer from "@/components/fragments/Container/Profile";

export default function ProfilePage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero description={false} text="My Ticket" button={true}></Hero>
      <div className="min-h-[60vh] mx-auto flex flex-col justify-center max-w-screen-xl my-14">
          <ProfileContainer></ProfileContainer>
          <ProfileContainer></ProfileContainer>
      </div>

      <Footer></Footer>
    </div>
  );
}
