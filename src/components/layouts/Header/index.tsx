import Navbar from "../../fragments/Navbar/Navbar";
import Highlight from "../../fragments/Highlight";
import Carousel from "../../fragments/Carousel";

export default function Header() {
  return (
    <div className="min-h-[80vh]">
      <Navbar></Navbar>
      <Highlight></Highlight>
      <Carousel></Carousel>
    </div>
  );
}
