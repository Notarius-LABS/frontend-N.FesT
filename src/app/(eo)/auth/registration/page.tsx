'use client'

import RegistrationButton from "@/components/core/Button/Registration";
import DataInput from "@/components/core/Input/Data"
import NFest from "@/components/core/Label/NFest";
import DataTextarea from "@/components/core/Textarea/Data";


export default function RegistrationPage() {
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
      <div className="flex mb-6">
        <DataInput size="h-[62px] w-[506px]" walletButton={true}></DataInput>
      </div>
      <RegistrationButton></RegistrationButton>
    </div>
  );
}