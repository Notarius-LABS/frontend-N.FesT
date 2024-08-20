import NFest from "../../core/Label/NFest";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="flex items-center my-auto min-h-[10vh] mx-[67px] justify-between">
        <NFest></NFest>
        <div className="flex gap-16">
          <Link href="/">
            <p className="hover:text-[#6BCAFF]">Home</p>
          </Link>
          <Link href="/profile">
            <p className="hover:text-[#6BCAFF]">My Order</p>
          </Link>
          <Link href="/chatbot">
            <p className="hover:text-[#6BCAFF]">Chat bot</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
