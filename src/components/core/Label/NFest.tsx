export default function NFest(props: any) {
  const { color } = props;
  return (
    <>
      <p className={`${color} text-5xl font-bold`}>
        N<span className="text-white">.</span>F
        <span className="text-white">es</span>t
      </p>
    </>
  );
}
