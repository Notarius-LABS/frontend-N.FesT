import Navbar from "@/components/fragments/Navbar";
import Footer from "@/components/layouts/Footer";

type Props = {
  children?: React.ReactNode;
};

export default function EoLayout({ children }: Props) {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
