type Props = {
  user?: boolean;
  text?: string;
};

export default function Message({ user }: Props) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className={`flex ${!user ? "justify-start" : "justify-end"}`}>
        <div
          className={`${
            user && "bg-white bg-opacity-10"
          } p-10 h-[203px] w-[791px] flex justify-center items-center text-white max-w-[791px] rounded-2xl my-4`}
        >
          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec elementum felis, ac commodo justo. Mauris at turpis purus.
            Quisque venenatis ultrices laoreet. Integer aliquam lectus nec neque
            facilisis eleifend. Ut blandit nibh eros, id euismod lectus interdum
            ut. Nam nec bibendum mi, eget tincidunt felis. Nunc ut velit sapien.
            Ut eget posuere diam.
          </p>
        </div>
      </div>
    </div>
  );
}
