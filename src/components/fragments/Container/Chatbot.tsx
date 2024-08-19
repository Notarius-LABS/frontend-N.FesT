import Card from "../../core/Card/index";
import NFest from "../../core/Label/NFest";
import "@/app/assets/css/chatbot.css";

type Props = {
  children?: any;
};

export default function ChatbotContainer({ children }: Props) {
  return (
    <div className="flex flex-col overflow-y-auto max-h-[79vh] custom-scrollbar">
      <div className="mb-5 flex flex-col justify-center items-center min-h-[80vh] my-auto">
        <NFest classname="mt-5" size="text-8xl"></NFest>
        <p className="text-white text-[32px] italic my-4">Chat bot</p>
        <p className="text-white text-center">
          Kamu bisa bertanya terkait event terdekat, euforia, konsultasi
          penggunaan app, <br /> dan apapun tentang event yang akan membawamu
          hanyut dalam suasana bersama yang lain
        </p>
      </div>
      <div className="">
        {children} {/* message list */}
      </div>
    </div>
  );
}
