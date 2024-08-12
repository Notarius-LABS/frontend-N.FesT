"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PaymentCard from "../../core/Card/Payment";

export default function PaymentContainer(props: any) {
  const { city } = props;
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = (e: any) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };

  return (
    <div
      className={`min-h-[114px] bg-white bg-opacity-10 text-white mx-auto max-w-[94%] rounded-2xl px-12 flex flex-col mb-4`}
    >
      <div className="flex items-center justify-between h-28">
        <div>
          <p className="text-[32px] font-bold">{city}, Indonesia</p>
          <p className="text-[20px]">17 Agustus 2024</p>
        </div>
        <div className="flex text-[24px] gap-3">
          <p>Mall Kelapa Gading</p>
          <button onClick={handleDropdown}>
            {dropdown ? (
              <FontAwesomeIcon icon={faChevronDown} className="w-5" />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} className="w-5" />
            )}
          </button>
        </div>
      </div>
      {dropdown === true && (
        <div className="flex items-center justify-center gap-4 h-[198px]">
          <PaymentCard
            color="#9AE7FF"
            textColor="text-[#9AE7FF]"
            text="Platinum"
          ></PaymentCard>
          <PaymentCard
            color="#DBAB00"
            textColor="text-[#DBAB00]"
            text="Gold"
          ></PaymentCard>
          <PaymentCard
            color="#FFFFFF"
            textColor="text-[#FFFFFF]"
            text="Reguler"
          ></PaymentCard>
        </div>
      )}
    </div>
  );
}
