type Props = {
  label?: boolean;
  size?: string;
  text?: string;
  profile?: boolean;
};

export default function Card({ label = false, size, text, profile = false}: Props) {
  return (
    <div
      className={`text-center text-white cursor-pointer`}
    >
      <div className={`${size} mx-auto project rounded-xl bg-[#D9D9D9]`}></div>
      {label && (
        <p className="mx-auto mt-8 w-28 text-[16px]">{text || "lorem ipsum"}</p>
      )}
    </div>
  );
}
