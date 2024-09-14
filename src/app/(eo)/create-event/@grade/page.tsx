import DataInput from "@/components/core/Input/Data";

export default function FormNewClass() {
  return (
    <div  className="grid">
      <DataInput name="class1" text="Class 1"></DataInput>
      <DataInput name="price" text="Price"></DataInput>
      <div className="mx-auto grid grid-cols-2 gap-[30px]">
        <DataInput
          name="quantity"
          text="Quantity"
          size="w-[370px] h-[62px]"
        ></DataInput>
        <DataInput
          name="ticket"
          text="Ticket"
          size="w-[370px] h-[62px]"
          type="file"
        ></DataInput>
      </div>
      <DataInput name="class2" text="Class 2"></DataInput>
      <DataInput name="price" text="Price"></DataInput>
      <div className="mx-auto grid grid-cols-2 gap-[30px]">
        <DataInput
          name="quantity"
          text="Quantity"
          size="w-[370px] h-[62px]"
        ></DataInput>
        <DataInput
          name="ticket"
          text="Ticket"
          size="w-[370px] h-[62px]"
          type="file"
        ></DataInput>
      </div>
    </div>
  );
}
