import Card from "../../core/Card/Card";

type Props = {
  children?: React.ReactNode;
};

export default function DetailEo({ children }: Props) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute min-h-[80vh] items-center flex justify-between gap-16 mx-16">
        <Card size="w-[330px] h-[441px]"></Card>
        <div className="text-white flex flex-col justify-between gap-y-14">
          <div className="h-10">
            <p className="font-bold text-[48px]">Amirullah Hamdan zarkashi</p>
          </div>
          <div className="h-10">
            <p className="text-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              ex placeat illum velit, magnam nostrum laudantium veritatis. Autem
              distinctio repellendus asperiores quos illo quibusdam hic,
              voluptas possimus molestiae numquam nisi?.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#333232] min-h-[40vh]"></div>
      <div className="mt-[365px]">{children}</div>
    </div>
  );
}
