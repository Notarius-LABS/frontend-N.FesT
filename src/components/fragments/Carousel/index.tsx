import SliderComp from "./Slider";

export default function Carousel() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto pt-[40px] text-center">
        <div className="text-white">
          <SliderComp></SliderComp>
        </div>
        <h1 className="text-white text-[28px] font-extrabold">
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
    </div>
  );
}
