import WalletButton from "@/components/core/Button/Wallet";

type Props = {
  text?: string;
  description?: boolean;
  button?: boolean;
};

export default function Hero({
  text = "Live in the moment, dance to the beat!",
  description = true,
  button = true,
}: Props) {
  return (
    <div className="px-[67px] flex justify-between items-center text-white bg-white bg-opacity-10 min-h-[105px]">
      <div className="">
        <p className="text-[30px] font-[600] text-gradient">{text}</p>
        {description && (
          <p className="text-[20px] font-[300]">
            Let&apos;s login to capture the euforia
          </p>
        )}
      </div>
      {button && (
        <div className="flex items-center justify-center ">
          <WalletButton></WalletButton>
        </div>
      )}
    </div>
  );
}
