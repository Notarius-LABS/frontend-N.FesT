import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren<any> {
  size?: string;
}

export default function Button({ size = "px-[55px]" }: Props) {
  return (
    <>
      <Link href="/">
        <button className={`bg-[#EC78FF] rounded-full py-4 ${size} text-black`}>
          Connect to Wallet
        </button>
      </Link>
    </>
  );
}
