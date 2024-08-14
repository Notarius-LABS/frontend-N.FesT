import Navbar from "../../../components/fragments/Navbar/Navbar";
import Highlight from "../../../components/fragments/Highlight/index";
import EventRegister from "@/components/fragments/Auth/Register/Event";

export default function OrderTicketPage() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Highlight></Highlight>
      <EventRegister></EventRegister>
    </div>
  );
}
