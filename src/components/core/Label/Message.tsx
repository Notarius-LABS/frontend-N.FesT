type Props = {
  user?: boolean;
  text?: string;
};

export default function Message({ user, text }: Props) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className={`flex ${!user ? "justify-start" : "justify-end"}`}>
        <div
          className={`${
            user && "bg-white bg-opacity-10"
          } p-7 w-[791px] flex text-white max-w-[791px] rounded-2xl my-4`}
        >
          <p
            className="text-xl text-justify"
            dangerouslySetInnerHTML={{ __html: text || "Invalid" }}
          />
  
        </div>
      </div>
    </div>
  );
}
