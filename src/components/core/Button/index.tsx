import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Button() {
  return (
    <>
      <Link href="/">
        <ConnectButton label="Connect to Wallet"   accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }} />
        {/* <button className="bg-[#EC78FF] rounded-full py-4 px-[55px] text-black">
          Connect to Wallet
        </button> */}
      </Link>
    </>
  );
}
