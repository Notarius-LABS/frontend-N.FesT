import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegistrationButton() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button className="w-[770px] h-[55px] bg-[#EC78FF] text-center rounded-full flex items-center justify-center">
          Registration <FontAwesomeIcon icon={faArrowRight} className="w-5 ml-2"/>
        </button>
      </div>
    </div>
  );
}
