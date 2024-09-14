"use client";

import NextButton from "@/components/core/Button/Next";
import DataInput from "@/components/core/Input/Data";
import Hero from "@/components/fragments/Hero";
import { faArrowRight, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  grade: React.ReactNode;
  event: React.ReactNode;
};

export default function CreateEventLayout({ grade, event }: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [forms, setForms] = useState<JSX.Element[]>([]);
  const [number, setNumber] = useState<number>(3);

  const handleNextButton = (e: any) => {
    e.preventDefault();
    setIsClick(true);
  };

  const handleAddButton = (e: any) => {
    e.preventDefault();
    setNumber(number + 1);
    setForms([
      ...forms,
      <div key={number} className="grid">
        <DataInput name={`class${number}`} text={`Class ${number}`}></DataInput>
        <DataInput name="price" text="Price"></DataInput>
        <div className="mx-auto grid grid-cols-2 gap-[30px]">
          <DataInput
            name="quantity"
            text="Quantity"
            size="w-[370px] h-[62px]"
          ></DataInput>
          <DataInput
            name="ticket"
            text="Ticket"
            size="w-[370px] h-[62px]"
            type="file"
          ></DataInput>
        </div>
      </div>,
    ]);
  };

  return (
    <>
      <Hero text="Buat Konser Baru" description={false} button={false}></Hero>
      <form action="" method="POST">
        <div className="mb-32 grid text-white">
          <div className="mx-auto my-16 max-w-2xl">
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nec elementum felis, ac commodo justo.
            </p>
          </div>
          {!isClick && (
            <>
              {event}
              <NextButton handleNextButton={handleNextButton}></NextButton>
            </>
          )}
          {isClick && (
            <>
              {grade}
              {forms}
              <div className="m-5 mx-auto">
                <button
                  onClick={(e) => {
                    handleAddButton(e);
                  }}
                  className="flex h-[62px] w-[770px] items-center justify-center rounded-full bg-[#6BCAFF] bg-opacity-[25%] text-center font-bold text-white duration-300 hover:bg-opacity-[40%]"
                >
                  <FontAwesomeIcon icon={faSquarePlus} className="mr-3 w-5" />
                  Add Class
                </button>
              </div>
              <div className="m-5 mx-auto">
                <button
                  onClick={(e) => handleNextButton(e)}
                  className="flex h-[62px] w-[770px] items-center justify-center rounded-full bg-[#EC78FF] text-center font-bold text-black duration-300 hover:bg-[#ea87f9]"
                >
                  Create Event
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5" />
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </>
  );
}
