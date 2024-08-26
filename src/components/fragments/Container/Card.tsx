import { PropsWithChildren } from "react";
import SeeAll from "@/components/core/Label/SeeAll";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function CardContainer({ text, children }: Props) {
  return (
    <div className="flex flex-col items-center overflow-x-hidden gap-y-10 my-12">
      <div className="flex justify-between text-white w-[1335px] mx-auto">
        <p className="font-bold text-[24px]">{text}</p>
        <SeeAll isText={text}>See all</SeeAll>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
