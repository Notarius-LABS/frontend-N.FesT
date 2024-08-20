import Card from "@/components/core/Card/Card";

export default function ProfileContainer() {
  return (
    <div className="text-white flex m-5">
      <div className="flex items-center">
        <Card size="w-[180px] h-[240px]" profile={true}></Card>
      </div>
      <div className="flex flex-col justify-center min-w-[90%]">
        <div className="bg-white bg-opacity-10 h-[186px] flex flex-col justify-center rounded-r-xl px-16">
          <p className="text-4xl">The Sound of The Project 2024</p>
          <p className="pt-2 pb-5">Jakarta | 27 Agustus 2024</p>
          <p className="text-[#DBAB00]">4 Gold Tickets</p>
        </div>
      </div>
    </div>
  );
}
