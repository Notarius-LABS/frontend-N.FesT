import DetailEvent from "@/components/fragments/Detail/Event";
import Footer from "@/components/layouts/Footer";
import Payment from "@/components/layouts/Payment";

export default function DetailEventPage() {
  return (
    <div className="">
      <DetailEvent isEO={true}>
        <Payment></Payment>
      </DetailEvent>
    </div>
  );
}
