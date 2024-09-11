'use client'

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

export default function NextButton() {
  const handleNextButton = () => {
    
  };

  return (
    <div className="m-5 mx-auto">
      <button
        onClick={() => handleNextButton()}
        className="flex h-[62px] w-[770px] items-center justify-center rounded-full bg-[#EC78FF] text-center font-bold text-black"
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5" />
      </button>
    </div>
  );
}
