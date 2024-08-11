import Header from "../components/layouts/Header/index";
import Body from "../components/layouts/Body/index";
import Footer from "../components/layouts/Footer/index";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#030303] to-[#111340]">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </main>
  );
}
