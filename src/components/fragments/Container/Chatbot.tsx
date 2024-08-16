import Card from "../../core/Card/index";
import NFest from "../../core/Label/NFest";

type Props = {
  children?: any;
};

export default function ChatbotContainer({ children }: Props) {
  return (
    <div className="flex flex-col overflow-y-auto max-h-[79vh]">
      <div className="mb-5 flex flex-col justify-center items-center min-h-[80vh] my-auto">
        <Card size="w-[452px] h-[190px]"></Card>
        <NFest classname="mt-5">
          <p className="text-white text-[32px]">Chat bot</p>
        </NFest>
      </div>
      <div className="">
        {children} {/* message list */}
      </div>
    </div>
  );
}
