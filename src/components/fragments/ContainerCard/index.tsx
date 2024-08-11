import CardCS from "../../core/Card/CardCS";
import SeeAll from "../../core/Label/SeeAll";

export default function ContainerCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[428px] flex flex-col justify-between items-center mx-auto overflow-x-hidden my-auto">
      <div className="flex justify-between text-white w-[1240px] mx-auto">
        <p className="font-bold text-[24px]">Coming Soon</p>
        <SeeAll>See all</SeeAll>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
