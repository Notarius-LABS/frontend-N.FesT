export default function Card(props: any) {
  const { size = "h-[440px] w-[330px]" } = props;
  return (
    <div
      className={`${size} mx-auto bg-[#D9D9D9] rounded-xl cursor-pointer project`}
    ></div>
  );
}
