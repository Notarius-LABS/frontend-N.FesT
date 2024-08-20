import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PaymentDropdown(props: any) {
  const { showPaymentState } = props;
  return (
    <>
      {showPaymentState === true && (
        <Link href="/event/order">
          <div className="flex font-bold text-[20px] items-center float-right mx-auto max-w-[22%] mb-10 text-[#EC78FF]">
            <p>Pesan tiket</p>
            <FontAwesomeIcon icon={faChevronRight} className="w-5 " />
          </div>
        </Link>
      )}
    </>
  );
}
