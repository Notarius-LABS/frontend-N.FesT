export default function Card(props: any) {
  const { color = "bg-[#D9D9D9]" } = props;
  return (
    <div
      className={`h-[440px] ${color} mx-[23px] rounded-xl cursor-pointer relative project `}
    >
      Project
    </div>
  );
}
