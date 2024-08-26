import WalletButton from "@/components/core/Button/Wallet";

type Props = {
  text?: string;
  profile?: boolean;
};

export default function Highlight({
  text = "Live in the moment, dance to the beat!",
  profile = false,
}: Props) {
  return (
    <div className="px-[67px] flex justify-between items-center text-white bg-white bg-opacity-10 min-h-[105px]">
      <div className="">
        <p className="text-[30px] font-[600] text-gradient">{text}</p>
        {!profile && (
          <p className="text-[20px] font-[300]">
            Let's login to capture the euforia
          </p>
        )}
      </div>
      <div className="flex items-center justify-center ">
        <WalletButton></WalletButton>
      </div>
    </div>
  );
}
