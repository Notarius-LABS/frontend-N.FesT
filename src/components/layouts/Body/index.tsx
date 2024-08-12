import React from "react";
import ContainerCard from "../../fragments/Container/index";
import ComingSoonCard from "@/components/core/Card/ComingSoon";

export default function Body() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-between">
      <ContainerCard>
        <ComingSoonCard label={true}></ComingSoonCard>
        <ComingSoonCard label={true}></ComingSoonCard>
        <ComingSoonCard label={true}></ComingSoonCard>
        <ComingSoonCard label={true}></ComingSoonCard>
        <ComingSoonCard label={true}></ComingSoonCard>
      </ContainerCard>
      <ContainerCard>
        <ComingSoonCard
          label={false}
          size="w-[400px] h-[200px]"
        ></ComingSoonCard>
        <ComingSoonCard
          label={false}
          size="w-[400px] h-[200px]"
        ></ComingSoonCard>
        <ComingSoonCard
          label={false}
          size="w-[400px] h-[200px]"
        ></ComingSoonCard>
      </ContainerCard>
    </div>
  );
}
