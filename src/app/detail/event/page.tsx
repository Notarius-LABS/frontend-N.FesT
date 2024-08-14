import Navbar from "../../../components/fragments/Navbar/Navbar";
import Footer from "../../../components/layouts/Footer/index";
import DetailEvent from "../../../components/fragments/Detail/index";
import PaymentContainer from "@/components/fragments/Container/Payment";
import Payment from "../../../components/layouts/Payment/index";

export default function DetailEventPage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <DetailEvent></DetailEvent>
      <Footer></Footer>
    </div>
  );
}
