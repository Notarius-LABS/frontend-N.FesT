import React from "react";
import WalletButton from "../Button/Wallet";

type Props = {
  size?: string;
  walletButton?: boolean;
};

export default function DataInput({
  size = "h-[62px] w-[770px]",
  walletButton = false,
}: Props) {
  return (
    <div className="text-white">
      <label htmlFor="name" className="ml-6">
        Event Organizer Name
      </label>
      <div className="flex items-center gap-5">
        <input
          type="text"
          name="name"
          id="name"
          className={`${size} bg-white bg-opacity-10 border rounded-full my-4 flex items-center pl-6`}
        ></input>
        {walletButton && <WalletButton color="bg-[#6BCAFF]"></WalletButton>}
      </div>
    </div>
  );
}
