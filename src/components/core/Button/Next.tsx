"use client";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

type Props = {
  handleNextButton: any
  }

export default function NextButton({handleNextButton}: Props) {
  

  return (
    <div className="m-5 mx-auto">
      <button
        onClick={(e) => handleNextButton(e)}
        className="flex h-[62px] w-[770px] items-center justify-center rounded-full bg-[#EC78FF] text-center font-bold text-black hover:bg-[#ea87f9] duration-300"
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5" />
      </button>
    </div>
  );
}
