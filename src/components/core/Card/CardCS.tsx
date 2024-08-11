import Card from "./index";

export default function CardCS(props: any) {
  const { label = true, size = "w-[210px] h-[280px]" } = props;
  return (
    <div className="h-[350px] text-white text-center flex flex-col justify-between mx-[18px]">
      <Card size={size}></Card>
      {label && (
        <p className="text-[16px] mx-auto w-28">The Sound of The Project</p>
      )}
    </div>
  );
}
