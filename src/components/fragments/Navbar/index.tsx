import NFest from "../../core/Label/NFest";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="mx-[67px] flex min-h-[10vh] items-center justify-between">
        <NFest></NFest>
        <div className="flex gap-16">
          <Link href="/">
            <p className="duration-300 hover:text-[#6BCAFF]">Home</p>
          </Link>
          <Link href="/profile-user">
            <p className="duration-300 hover:text-[#6BCAFF]">My Order</p>
          </Link>
          <Link href="/chatbot">
            <p className="duration-300 hover:text-[#6BCAFF]">Chat bot</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
