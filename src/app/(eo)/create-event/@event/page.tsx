import DataInput from "@/components/core/Input/Data";

export default function FormNewEvent() {
  return (
    <div className="grid">
      <DataInput name="event" text="Event"></DataInput>
      <DataInput name="urlTrailer" text="URL Trailer"></DataInput>
      <div className="mx-auto grid grid-cols-2 gap-[30px]">
        <DataInput
          name="isComingSoon"
          text="Is Coming Soon"
          size="w-[370px] h-[62px]"
        ></DataInput>
        <DataInput
          name="posterUpload"
          text="Poster Upload"
          size="w-[370px] h-[62px]"
          type="file"
        ></DataInput>
      </div>
    </div>
  );
}
