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
      <p className="text-[20px] flex items-center gap-2 text-[#EC78FF]">
        {children}
        <FontAwesomeIcon icon={faChevronRight} className="w-3" />
      </p>
    </Link>
  );
}
