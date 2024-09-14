import React from "react";
import ContainerCard from "../../fragments/Container/Card";
import Card from "@/components/core/Card/Card";

export default function Body() {
  return (
    <div className="flex min-h-[90vh] flex-col justify-between">
      <ContainerCard text="Coming Soon">
        <div className="grid grid-cols-5 gap-14">
          <Card label={true} size="w-[210px] h-[280px]"></Card>
          <Card label={true} size="w-[210px] h-[280px]"></Card>
          <Card label={true} size="w-[210px] h-[280px]"></Card>
          <Card label={true} size="w-[210px] h-[280px]"></Card>
          <Card label={true} size="w-[210px] h-[280px]"></Card>
        </div>
      </ContainerCard>
      <ContainerCard text="Merchandise">
        <div className="grid grid-cols-3 gap-9">
          <Card label={false} size="w-[400px] h-[200px]"></Card>
          <Card label={false} size="w-[400px] h-[200px]"></Card>
          <Card label={false} size="w-[400px] h-[200px]"></Card>
        </div>
      </ContainerCard>
    </div>
  );
}
