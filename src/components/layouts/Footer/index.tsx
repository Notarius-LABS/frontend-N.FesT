import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NFest from "../../core/Label/NFest";
import Link from "next/link";
import {
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-black bg-opacity-[40%] h-[237px] flex flex-col ">
      <div className="flex justify-between m-auto min-w-full px-[67px]">
        <div className="text-white">
          <NFest color="text-[#9146FF]"></NFest>
          <p className="text-[24px] py-3">
            Live in the moment, dance to the beat!
          </p>
          <Link href="/">
            <p className="text-[20px] text-[#EC78FF] ">Contact us here...</p>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/">
            <FontAwesomeIcon icon={faInstagram} className="w-10 text-white" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faXTwitter} className="w-10 text-white" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faTiktok} className="w-10 text-white" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-10 text-white" />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center text-white bg-black h-[45px]">
          copyright 2024
        </p>
      </div>
    </div>
  );
}
