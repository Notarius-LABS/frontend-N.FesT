import Navbar from "../../../components/fragments/Navbar/index";
import DetailEvent from "../../../components/fragments/Detail/Event";
import Footer from "../../../components/layouts/Footer/index";
import Payment from "@/components/layouts/Payment";

export default function DetailEventPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <DetailEvent>
        <Payment></Payment>
      </DetailEvent>
      <Footer></Footer>
    </div>
  );
}
