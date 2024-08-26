import Card from "@/components/core/Card/Card";

type Props = {
  text?: string;
  size?: string;
  label?: boolean;
};

export default function DetailCard({ text, size, label }: Props) {
  return (
    <div className="flex flex-col text-white">
      <div className="my-10 mx-16">
        <p className="text-[32px] italic font-bold">{text}</p>
      </div>
      <div className="flex flex-wrap justify-center max-w-[100%] mx-auto max-h-[80vh] overflow-y-auto">
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
