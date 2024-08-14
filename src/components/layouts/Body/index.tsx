import React from "react";
import ContainerCard from "../../fragments/Container/index";
import CardContainer from "@/components/core/Card/Card";

export default function Body() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-between">
      <ContainerCard text="Coming Soon">
        <CardContainer label={true}></CardContainer>
        <CardContainer label={true}></CardContainer>
        <CardContainer label={true}></CardContainer>
        <CardContainer label={true}></CardContainer>
        <CardContainer label={true}></CardContainer>
      </ContainerCard>
      <ContainerCard text="Merchandise">
        <CardContainer label={false} size="w-[425px] h-[230px]"></CardContainer>
        <CardContainer label={false} size="w-[425px] h-[230px]"></CardContainer>
        <CardContainer label={false} size="w-[425px] h-[230px]"></CardContainer>
      </ContainerCard>
    </div>
  );
}
