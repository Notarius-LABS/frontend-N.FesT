"use client";

import Slider from "react-slick";
import { useRef } from "react";
import Card from "../../core/Card/index";

export default function SliderComp() {
  const sliderRef = useRef(null);
  let settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
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
    <Slider ref={sliderRef} {...settings}>
      <Card color="bg-green-500"></Card>
      <Card color="bg-slate-500"></Card>
      <Card color="bg-red-500"></Card>
      <Card color="bg-sky-500"></Card>
      <Card color="bg-slate-500"></Card>
    </Slider>
  );
}
