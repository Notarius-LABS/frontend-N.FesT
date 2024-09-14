import { PropsWithChildren } from "react";
import SeeAll from "@/components/core/Label/SeeAll";

type Props = {
  text: string;
  children: React.ReactNode;
};

export default function CardContainer({ text, children }: Props) {
  return (
    <div className="my-12 flex flex-col items-center gap-y-10 overflow-x-hidden">
      <div className="mx-auto flex w-[1335px] justify-between text-white">
        <p className="text-[24px] font-bold">{text}</p>
        <SeeAll isText={text}>See all</SeeAll>
      </div>
      {children}
    </div>
  );
}
