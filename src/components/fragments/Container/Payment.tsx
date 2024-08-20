"use client";

import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PaymentCard from "../../core/Card/Payment";
import Link from "next/link";
import PaymentDropdown from "../../core/Dropdown/Payment";

export default function PaymentContainer(props: any) {
  const { city } = props;
  const [dropdown, setDropdown] = useState(false);
  const [showPaymentPlatinum, setShowPaymentPlatinum] = useState(false);
  const [showPaymentGold, setShowPaymentGold] = useState(false);
  const [showPaymentReguler, setShowPaymentReguler] = useState(false);

  const handleDropdown = (e: any) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  const handlePaymentPlatinum = (e: any) => {
    e.preventDefault();
    setShowPaymentPlatinum(!showPaymentPlatinum);
    setShowPaymentGold(false);
    setShowPaymentReguler(false);
  };

  const handlePaymentGold = (e: any) => {
    e.preventDefault();
    setShowPaymentGold(!showPaymentGold);
    setShowPaymentPlatinum(false);
    setShowPaymentReguler(false);
  };

  const handlePaymentReguler = (e: any) => {
    e.preventDefault();
    setShowPaymentReguler(!showPaymentReguler);
    setShowPaymentGold(false);
    setShowPaymentPlatinum(false);
  };

  return (
    <div
      className={`bg-white bg-opacity-10 text-white mx-auto max-w-[92%] rounded-2xl px-12 flex flex-col mb-4`}
    >
      <div className="flex items-center justify-between h-28">
        <div>
          <p className="text-[32px] font-bold">{city}, Indonesia</p>
          <p className="text-[20px]">17 Agustus 2024</p>
        </div>
        <button onClick={handleDropdown}>
          <div className="flex items-center text-[24px] gap-3">
            <p>Mall Kelapa Gading</p>
            {dropdown ? (
              <FontAwesomeIcon icon={faChevronDown} className="w-5" />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} className="w-5" />
            )}
          </div>
        </button>
      </div>
      {dropdown === true && (
        <div className="">
          <div className="flex items-center justify-center gap-4 h-[198px] ">
            <PaymentCard
              color="bg-[#9AE7FF]"
              textColor="text-[#9AE7FF]"
              text="Platinum"
              showPayment={showPaymentPlatinum}
              onClick={handlePaymentPlatinum}
            ></PaymentCard>
            <PaymentCard
              color="bg-[#DBAB00]"
              textColor="text-[#DBAB00]"
              text="Gold"
              showPayment={showPaymentGold}
              onClick={handlePaymentGold}
            ></PaymentCard>
            <PaymentCard
              color="bg-[#FFFFFF]"
              textColor="text-[#FFFFFF]"
              text="Reguler"
              showPayment={showPaymentReguler}
              onClick={handlePaymentReguler}
            ></PaymentCard>
          </div>
          <div>
            <PaymentDropdown
              showPaymentState={showPaymentPlatinum}
            ></PaymentDropdown>
            <PaymentDropdown
              showPaymentState={showPaymentGold}
            ></PaymentDropdown>
            <PaymentDropdown
              showPaymentState={showPaymentReguler}
            ></PaymentDropdown>
          </div>
        </div>
      )}
    </div>
  );
}
