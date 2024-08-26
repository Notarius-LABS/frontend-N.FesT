"use client";

import Navbar from "@/components/fragments/Navbar/index";
import Highlight from "@/components/fragments/Highlight/index";
import Footer from "@/components/layouts/Footer/index";
import ProfileContainer from "@/components/fragments/Container/Profile";

export default function ProfilePage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Highlight profile={true} text="My Ticket"></Highlight>
      <div className="min-h-[60vh] mx-auto flex flex-col justify-center max-w-screen-xl my-14">
          <ProfileContainer></ProfileContainer>
          <ProfileContainer></ProfileContainer>
      </div>

      <Footer></Footer>
    </div>
  );
}
