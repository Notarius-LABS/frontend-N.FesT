import Navbar from "../../fragments/Navbar/index";
import Hero from "../../fragments/Hero";
import Carousel from "../../fragments/Carousel";

export default function Header() {
  return (
    <div className="min-h-[80vh]">
      <Navbar></Navbar>
      <Hero></Hero>
      <Carousel></Carousel>
    </div>
  );
}
