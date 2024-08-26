import Card from "@/components/core/Card/Card";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditContainer() {
  return (
    <div className="text-white flex m-5">
      <div className="flex items-center">
        <Card size="w-[180px] h-[240px]" profile={true}></Card>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="bg-white bg-opacity-10 h-[186px] flex flex-col justify-center rounded-r-xl px-16">
          <p className="text-4xl">The Sound of The Project 2024</p>
          <p className="pt-2 pb-5">Jakarta | 27 Agustus 2024</p>
          <button className="text-[#EC78FF] cursor-pointer max-w-28 text-left font-bold flex">
            Edit Event <FontAwesomeIcon icon={faArrowRight} className="w-4 my-auto ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
