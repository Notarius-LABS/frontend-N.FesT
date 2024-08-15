type Props = {
  children?: React.ReactNode;
  classname?: string;
};

export default function NFest({ children, classname }: Props) {
  return (
    <div className={`${classname} flex items-end gap-2`}>
      <p className={`text-[#6BCAFF] text-5xl font-bold`}>
        N<span className="text-white">.</span>F
        <span className="text-white">es</span>t
      </p>
      {children}
    </div>
  );
}
