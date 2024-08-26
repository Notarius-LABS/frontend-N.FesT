type Props = {
  label?: boolean;
  size?: string;
  text?: string;
  profile?: boolean;
};

export default function Card({ label = false, size, text, profile = false}: Props) {
  return (
    <div
      className={`text-white text-center ${
        !profile && "m-[18px]"
      } cursor-pointer`}
    >
      <div className={`${size} mx-auto bg-[#D9D9D9] rounded-xl project`}></div>
      {label && (
        <p className="text-[16px] mx-auto w-28 mt-8">{text || "lorem ipsum"}</p>
      )}
    </div>
  );
}
