import Card from "@/components/core/Card/Card";

type Props = {
  text?: string;
  size?: string;
  label?: boolean;
  cols?: string;
};

export default function DetailCard({ text, size, label, cols }: Props) {
  return (
    <div className="flex flex-col text-white">
      <div className="mx-16 my-10">
        <p className="text-[32px] font-bold italic">{text}</p>
      </div>
      <div className={`mx-auto grid max-h-[80vh] ${cols} gap-12 overflow-y-scroll`}>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
        <Card label={label} size={size}></Card>
      </div>
    </div>
  );
}
