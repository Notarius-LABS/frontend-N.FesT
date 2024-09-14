import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegistrationButton() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="flex h-[55px] w-[770px] items-center justify-center rounded-full bg-[#EC78FF] text-center duration-300 hover:bg-[#ea87f9]">
          Registration{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-5" />
        </button>
      </div>
    </div>
  );
}
