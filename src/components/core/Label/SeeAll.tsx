import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SeeAll({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="text-[20px] flex gap-2 text-[#EC78FF]">
        {children}
        <FontAwesomeIcon icon={faChevronRight} className="w-3 pb-2" />
      </p>
    </>
  );
}
