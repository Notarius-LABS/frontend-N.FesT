"use client";

import Slider from "react-slick";
import { useRef } from "react";
import Card from "../../core/Card/index";

export default function SliderComp() {
  const sliderRef = useRef(null);
  let settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
    </>
  );
}