import React from "react";
import ContainerCard from "../../fragments/ContainerCard/index";
import CardCS from "@/components/core/Card/CardCS";

export default function Body() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-between">
      <ContainerCard>
        <CardCS label={true}></CardCS>
        <CardCS label={true}></CardCS>
        <CardCS label={true}></CardCS>
        <CardCS label={true}></CardCS>
        <CardCS label={true}></CardCS>
      </ContainerCard>
      <ContainerCard>
        <CardCS label={false} size="w-[400px] h-[200px]"></CardCS>
        <CardCS label={false} size="w-[400px] h-[200px]"></CardCS>
        <CardCS label={false} size="w-[400px] h-[200px]"></CardCS>
      </ContainerCard>
    </div>
  );
}
