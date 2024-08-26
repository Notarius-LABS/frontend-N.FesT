import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  classname?: string;
  size?: string;
};

export default function NFest({ size, children, classname }: Props) {
  return (
    <Link href="/">
      <div className={`${classname} flex gap-2`}>
        <p className={`text-[#6BCAFF] ${size || "text-5xl"}  font-bold`}>
          N<span className="text-white">.</span>F
          <span className="text-white">es</span>t
        </p>
        {children}
      </div>
    </Link>
  );
}
