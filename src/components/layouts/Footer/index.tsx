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
    <div className="bg-black bg-opacity-[40%] h-[237px] flex flex-col">
      <div className="flex justify-between m-auto min-w-full px-[67px] overflow-x-hidden">
        <div className="text-white">
          <NFest></NFest>
          <p className="text-[24px] py-3">
            Live in the moment, dance to the beat!
          </p>
          <Link href="/">
            <p className="text-[20px] text-[#EC78FF] ">Contact us here...</p>
          </Link>
        </div>
        <div className="flex gap-4 items-center text-5xl text-white">
          <Link href="/">
            <FontAwesomeIcon icon={faInstagram} className="w-10" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faXTwitter} className="w-10" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faTiktok} className="w-10" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faLinkedinIn} className="w-10" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center bg-black h-[45px] ">
        <p className="text-white">copyright 2024</p>
      </div>
    </div>
  );
}
