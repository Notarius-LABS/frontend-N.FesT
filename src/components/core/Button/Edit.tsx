import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditButton() {
  return (
    <div>
      <button className="flex h-[49px] w-[239px] items-center justify-center rounded-full bg-[#EC78FF] text-center font-bold text-black duration-300 hover:bg-[#ea87f9]">
        Edit Event
        <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5" />
      </button>
    </div>
  );
}
