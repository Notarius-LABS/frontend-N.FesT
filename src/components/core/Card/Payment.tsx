import { useState } from "react";

export default function PaymentCard(props: any) {
  const { text, color, textColor } = props;
  const [displayUI, setDisplayUI] = useState(false);
  const handleUI = (e: any) => {
    e.preventDefault();
    setDisplayUI(!displayUI);
  };

  return (
    <button onClick={handleUI}>
      <div
        className={`bg-[${color}] group bg-opacity-15 flex items-center h-[121px] w-[390px] justify-center gap-8 rounded-xl cursor-pointer hover:bg-opacity-100 hover:text-black`}
      >
        <div>
          <p className="text-4xl font-bold">{text}</p>
          <p>1.000 tiket tersedia</p>
        </div>
        <p className={`text-2xl ${textColor} group-hover:text-black`}>
          <span
            className={`text-opacity-50 group-hover:text-black ${textColor}`}
          >
            Rp
          </span>
          1.200.000
        </p>
        <p></p>
      </div>
    </button>
  );
}
