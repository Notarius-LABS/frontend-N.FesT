import SliderComp from "./Slider";

export default function Carousel() {
  return (
    <div className="w-[80%] max-w-[1222px] mx-auto pt-[140px] text-center">
      <div className="text-white">
        <SliderComp></SliderComp>
      </div>
      <h1 className="text-white text-[28px] font-extrabold mt-[58px]">
        THE SOUND OF THE PROJECT 2024
      </h1>
      <div className="text-white w-[28rem] mx-auto py-[1rem] text-[0.9rem] ">
        <p className="text-xl font-light pb-3">
          20 Agustus 2024 - 15 Maret 2025
        </p>
        <p className="text-base">
          Jakarta | Bandung | Surabaya | Maluku | Riau
        </p>
      </div>
    </div>
  );
}
