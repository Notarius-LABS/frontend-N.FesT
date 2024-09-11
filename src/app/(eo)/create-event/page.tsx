import DataInput from "@/components/core/Input/Data";
import NextButton from "@/components/core/Button/Next";

export default function CreateEventPage() {
  return (
    <div>
      <form action="" method="POST">
        <div className="mb-32 grid text-white">
          <div className="mx-auto my-16 max-w-2xl">
            <p className="text-center text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse nec elementum felis, ac commodo justo.
            </p>
          </div>
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
          <NextButton></NextButton>
        </div>
      </form>
    </div>
  );
}
