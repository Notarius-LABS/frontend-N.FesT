import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditButton() {
  return (
    <div>
      <button className="w-[239px] h-[49px] text-black font-bold bg-[#EC78FF] text-center rounded-full flex items-center justify-center">
        Edit Event
        <FontAwesomeIcon icon={faArrowRight} className="w-5 ml-2" />
      </button>
    </div>
  );
}
