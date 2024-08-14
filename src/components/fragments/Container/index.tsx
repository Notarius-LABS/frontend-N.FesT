import { PropsWithChildren } from "react";
import SeeAll from "../../core/Label/SeeAll";

export interface Props {
  text: string;
}

export default function ContainerCard(props: PropsWithChildren<Props>) {
  return (
    <div className="h-[428px] flex flex-col justify-between items-center  overflow-x-hidden my-auto">
      <div className="flex justify-between text-white w-[1335px] mx-auto">
        <p className="font-bold text-[24px]">{props.text}</p>
        <SeeAll>See all</SeeAll>
      </div>
      <div className="flex items-center justify-center">{props.children}</div>
    </div>
  );
}
