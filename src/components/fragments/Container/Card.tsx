import Card from "../../core/Card/index";

export default function CardContainer(props: any) {
  const { label = true, size = "w-[240px] h-[310px]" } = props;
  return (
    <div
      className={`h-[350px] text-white text-center flex flex-col justify-between mx-[18px]`}
    >
      <Card size={size}></Card>
      {label && (
        <p className="text-[16px] mx-auto w-28 mt-8">
          The Sound of The Project
        </p>
      )}
    </div>
  );
}
