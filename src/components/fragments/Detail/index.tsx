import Card from "../../core/Card/index";

export default function DetailEvent({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-[80vh] ">
      <div className="absolute min-h-[80vh] items-center flex justify-center gap-16 mx-16">
        <Card></Card>
        <div className="text-white pt-12">
          <h1 className="font-bold text-[48px]">
            THE SOUND OF <br /> THE PROJECT 2024
          </h1>
          <p className="text-[20px]">20 Agustus 2024 - 15 Maret 2025</p>
          <p>Jakarta | Bandung | Surabaya | Maluku | Riau</p>
        </div>
      </div>
      <div className="bg-[#333232] min-h-[40vh]"></div>
      <div className="mb-32 mt-[365px]">{children}</div>
    </div>
  );
}
