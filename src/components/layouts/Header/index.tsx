import Navbar from "../../fragments/Navbar/Navbar";
import Highlight from "../../fragments/Highlight";
import Carousel from "../../fragments/Carousel";

export default function Header() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Highlight></Highlight>
      <Carousel></Carousel>
    </div>
  );
}
