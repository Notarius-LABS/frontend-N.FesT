import React from "react";
import ContainerCard from "../../fragments/Container/Card";
import Card from "@/components/core/Card/Card";

export default function Body() {
  return (
    <div className="min-h-[90vh] flex flex-col justify-between">
      <ContainerCard text="Coming Soon">
        <Card label={true} size="w-[240px] h-[310px]"></Card>
        <Card label={true} size="w-[240px] h-[310px]"></Card>
        <Card label={true} size="w-[240px] h-[310px]"></Card>
        <Card label={true} size="w-[240px] h-[310px]"></Card>
        <Card label={true} size="w-[240px] h-[310px]"></Card>
      </ContainerCard>
      <ContainerCard text="Merchandise">
        <Card label={false} size="w-[425px] h-[230px]"></Card>
        <Card label={false} size="w-[425px] h-[230px]"></Card>
        <Card label={false} size="w-[425px] h-[230px]"></Card>
      </ContainerCard>
    </div>
  );
}
