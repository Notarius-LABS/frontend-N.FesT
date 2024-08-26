"use client";

import Slider from "react-slick";
import { useRef } from "react";
import Card from "@/components/core/Card/Card";

export default function SliderComp() {
  const sliderRef = useRef(null);
  let settings = {
    className: "center",
    centerMode: true,
    snapToGrid: false,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        <Card size="w-[330px] h-[420px]"></Card>
        <Card size="w-[330px] h-[420px]"></Card>
        <Card size="w-[330px] h-[420px]"></Card>
        <Card size="w-[330px] h-[420px]"></Card>
        <Card size="w-[330px] h-[420px]"></Card>
      </Slider>
    </>
  );
}
