export interface Props {
  text: string;
  color: string;
  textColor: string;
  showPayment: boolean;
  onClick: any;
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";

export default function PaymentCard(props: PropsWithChildren<Props>) {
  return (
    <button onClick={props.onClick}>
      <div
        className={`${props.color} ${
          props.showPayment !== true && "bg-opacity-15  text-white"
        } flex items-center h-[121px] w-[390px] justify-center gap-8 rounded-xl cursor-pointer text-black`}
      >
        <div
          className={`${
            props.showPayment !== true && "bg-opacity-15 text-white"
          } text-black flex flex-col items-start`}
        >
          <p className="text-4xl font-bold">{props.text}</p>
          <p>1.000 tiket tersedia</p>
        </div>
        <p
          className={`text-2xl ${props.textColor} ${
            props.showPayment === true && "text-black"
          }`}
        >
          <span
            className={`text-opacity-50 ${
              props.showPayment === true && "text-black"
            } ${props.textColor} bg-opacity-15 `}
          >
            Rp
          </span>
          1.200.000
        </p>
      </div>
    </button>
  );
}
