import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddEvent() {
  return (
    <div className="flex items-center justify-center">
      <button className="flex h-[100px] w-[1236px] items-center justify-center rounded-xl bg-[#EC78FF] bg-opacity-15 text-center text-[#EC78FF] duration-300 hover:bg-[#ea87f9]">
        <FontAwesomeIcon icon={faSquarePlus} className="mr-3 w-5" />
        Buat Event Baru
      </button>
    </div>
  );
}
