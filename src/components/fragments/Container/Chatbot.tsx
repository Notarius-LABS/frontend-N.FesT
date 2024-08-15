import Card from "../../core/Card/index";
import NFest from "../../core/Label/NFest";

export default function ChatbotContainer() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh]">
      <Card size="w-[452px] h-[190px]"></Card>
      <NFest classname="mt-5">
        <p className="text-white text-[32px]">Chat bot</p>
      </NFest>
    </div>
  );
}
