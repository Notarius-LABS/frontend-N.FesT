

export default function DataTextarea() {
  return (
    <div className="text-white">
      <label htmlFor="description" className="ml-6">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        className="h-[203px] w-[770px] bg-white bg-opacity-10 border rounded-3xl my-4 flex items-center p-7 resize-none text-wrap text-justify"
      ></textarea>
    </div>
  );
}