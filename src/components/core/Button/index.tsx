import Link from "next/link";
export default function Button() {
  return (
    <>
      <Link href="/">
        <button className="bg-[#EC78FF] rounded-full py-4 px-[55px] text-black">
          Connect to Wallet
        </button>
      </Link>
    </>
  );
}
