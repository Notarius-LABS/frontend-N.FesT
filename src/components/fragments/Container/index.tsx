import { PropsWithChildren } from "react";
import SeeAll from "../../core/Label/SeeAll";
import Link from "next/link";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function ContainerCard({ text, children }: Props) {
  return (
    <div className="h-[428px] flex flex-col justify-between items-center  overflow-x-hidden my-auto">
      <div className="flex justify-between text-white w-[1335px] mx-auto">
        <p className="font-bold text-[24px]">{text}</p>
        <SeeAll isText={text}>See all</SeeAll>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
