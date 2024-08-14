import Link from "next/link";
import Button from "../../core/Button/index";
import WalletButton from "@/components/core/Button/Wallet";

export default function Highlight() {
  return (
    <div className="px-[67px] flex justify-between items-center text-white bg-white bg-opacity-10 min-h-[105px]">
      <div className="">
        <p className="text-[30px] font-[600] text-gradient">
          Live in the moment, dance to the beat!
        </p>
        <p className="text-[20px] font-[300]">
          Let's login to capture the euforia
        </p>
      </div>
      <div className="flex items-center justify-center ">
        <WalletButton></WalletButton>
      </div>
    </div>
  );
}
