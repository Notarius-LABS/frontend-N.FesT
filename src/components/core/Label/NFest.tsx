type Props = {
  children?: React.ReactNode;
  classname?: string;
  size?: string;
};

export default function NFest({ size, children, classname }: Props) {
  return (
    <div className={`${classname} flex items-end gap-2`}>
      <p className={`text-[#6BCAFF] ${size && "text-8xl"} text-5xl font-bold`}>
        N<span className="text-white">.</span>F
        <span className="text-white">es</span>t
      </p>
      {children}
    </div>
  );
}
