import { PropsWithChildren } from "react";
import PaymentButton from "../../core/Button/Payment";

export default function EventOrder() {
  return (
    <div className="text-white min-h-[60vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto ">
        <div className="mb-10">
          <p className="text-[24px] font-bold text-[#6BCAFF]">Registration</p>
          <p className="text-[40px] font-bold my-2">
            The Sound of The Project 2024
          </p>
          <p className="text-xl">Jakarta - Indonesia | 17 Agustus 2024</p>
        </div>
        <form action="" className="flex flex-col">
          <label htmlFor="">Quantity</label>
          <div className="h-[62px] w-[770px] bg-white bg-opacity-10 border rounded-full my-4 flex items-center pl-10">
            <p className="text-2xl">1 Platinum</p>
          </div>
          <div className="flex justify-end">
            <PaymentButton price={20000}></PaymentButton>
          </div>
        </form>
      </div>
    </div>
  );
}
