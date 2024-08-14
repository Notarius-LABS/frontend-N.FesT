import { PropsWithChildren } from "react";
import Button from "../../../core/Button/index";

export interface Props {}

export default function EventRegister(props: PropsWithChildren<Props>) {
  return (
    <div className="text-white">
      <div>
        <p>Registration</p>
        <p>The Sound of The Project 2024</p>
        <p>Jakarta - Indonesia | 17 Agustus 2024</p>
      </div>
      <form action="" className="flex flex-col">
        <label htmlFor="">Quantity</label>
        <input type="text" />
        <Button size="px-[89px] py-[19px]"></Button>
      </form>
    </div>
  );
}
