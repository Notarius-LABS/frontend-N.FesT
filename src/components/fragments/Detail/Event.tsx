import EditButton from "@/components/core/Button/Edit";
import Card from "../../core/Card/Card";

type Props = {
  children?: React.ReactNode;
  isEO?: boolean;
};

export default function DetailEvent({ children, isEO }: Props) {
  return (
    <div className="relative flex flex-col">
      <div className="absolute min-h-[80vh] items-center flex justify-center gap-16 mx-16">
        <Card size="w-[330px] h-[441px]"></Card>
        <div className="text-white flex flex-col justify-between gap-y-20">
          <div className="h-10">
            <h1 className="font-bold text-[48px] pt-7">
              THE SOUND OF <br /> THE PROJECT 2024
            </h1>
          </div>
          <div className="h-10 pt-20">
            {!isEO && (
              <>
                <p className="text-[20px]">20 Agustus 2024 - 15 Maret 2025</p>
                <p>Jakarta | Bandung | Surabaya | Maluku | Riau</p>
              </>
            )}
            {isEO && (
              <>
                <EditButton></EditButton>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#333232] min-h-[40vh]"></div>
      <div className="mb-32 mt-[365px]">{children}</div>
    </div>
  );
}
