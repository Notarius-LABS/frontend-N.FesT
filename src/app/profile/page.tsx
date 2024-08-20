"use client";

import Navbar from "@/components/fragments/Navbar/Navbar";
import Highlight from "../../components/fragments/Highlight/index";
import Footer from "../../components/layouts/Footer/index";
import Profile from "@/components/fragments/Container/Profile";

export default function ProfilePage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Highlight profile={true} text="My Ticket"></Highlight>
      <div className="min-h-[60vh] mx-auto flex flex-col justify-center max-w-screen-2xl my-14">
          <Profile></Profile>
          <Profile></Profile>
      </div>

      <Footer></Footer>
    </div>
  );
}
