"use client";

import NFest from "@/components/core/Label/NFest";
import DataInput from "@/components/core/Input/Data";
import DataTextarea from "@/components/core/Textarea/Data";
import WalletButton from "@/components/core/Button/Wallet";

export default function EoRegistration() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <NFest
        classname="flex-col justify-center items-center"
        size="text-[64px]"
      >
        <p className="text-white text-[32px]">Registration</p>
      </NFest>
      <DataInput></DataInput>
      <DataTextarea></DataTextarea>
      <div className="flex">
        <DataInput size="h-[62px] w-[506px]" walletButton={true}></DataInput>
      </div>
    </div>
  );
}
