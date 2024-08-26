import AddEvent from "@/components/core/Button/Add";
import EditContainer from "@/components/fragments/Container/Edit";
import DetailEo from "@/components/fragments/Detail/Eo";
import Footer from "@/components/layouts/Footer";

export default function EoProfile() {
  return (
    <DetailEo>
      <AddEvent></AddEvent>
      <div className="min-h-[80vh] mx-auto flex flex-col justify-center max-w-screen-xl my-auto">
        <EditContainer></EditContainer>
        <EditContainer></EditContainer>
      </div>

      <Footer></Footer>
    </DetailEo>
  );
}
