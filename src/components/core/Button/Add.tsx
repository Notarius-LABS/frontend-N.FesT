import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddEvent() {
  return (
    <div className="flex items-center justify-center">
      <button className="h-[100px] w-[1236px] bg-[#EC78FF] bg-opacity-15 text-center text-[#EC78FF] rounded-xl flex items-center justify-center">
        <FontAwesomeIcon
          icon={faSquarePlus}
          className="w-5 mr-3"
        />
        Buat Event Baru
      </button>
    </div>
  );
}
