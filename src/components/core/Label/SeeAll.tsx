import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  isText: string;
  children: React.ReactNode;
};

export default function SeeAll({ isText, children }: Props) {
  return (
    <Link
      href={`${
        (isText === "Coming Soon" && "/event/detail/comingsoon") ||
        (isText === "Merchandise" && "/event/detail/merchandise")
      }`}
    >
      <p className="flex items-center gap-2 text-[20px] text-[#EC78FF] duration-300 hover:text-[#ea87f9]">
        {children}
        <FontAwesomeIcon icon={faChevronRight} className="w-3" />
      </p>
    </Link>
  );
}
