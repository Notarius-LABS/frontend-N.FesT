import React from "react";
import WalletButton from "../Button/Wallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  size?: string;
  text?: string;
  name?: string;
  type?: string;
  walletButton?: boolean;
};

export default function DataInput({
  size = "h-[62px] w-[770px]",
  text = "Event Organizer Name",
  name = "name",
  type = "text",
  walletButton = false,
}: Props) {
  return (
    <div className="m-5 mx-auto text-white">
      <label htmlFor={name} className="ml-6">
        {text}
      </label>
      <div className="relative grid items-center gap-5">
        <div
          className={`${size} my-4 grid items-center rounded-full border bg-white bg-opacity-10`}
        >
          <input
            type={type}
            name={name}
            id={name}
            className={` ${
              type === "file" && "hidden"
            } mx-8 bg-white bg-opacity-0 shadow-none outline-none`}
          />
        </div>
        {type === "file" && (
          <div
            className={`absolute rounded-full duration-300 hover:bg-gray-100 hover:bg-opacity-10`}
          >
            <label
              htmlFor={name}
              className={`flex cursor-pointer items-center justify-center ${size}`}
            >
              <FontAwesomeIcon icon={faSquarePlus} className="mr-3 w-5" />
              {name !== "ticket" && <p>Poster Upload</p>}
              {name === "ticket" && <p>Upload Ticket Design</p>}
            </label>
          </div>
        )}
        {walletButton && <WalletButton color="bg-[#6BCAFF]"></WalletButton>}
      </div>
    </div>
  );
}
