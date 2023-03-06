import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Slider from "react-slick";
export default function Slider2() {
  const Carousals = [
    {
      Image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      heading: "rELIABLE",
      subHeading: "professional in UAE",
      text: " Some representative placeholder content for the first slide. Some representative placeholder content for the first slide.",
      button: "REQUEST A QUOTE",
      button2: "How We Work",
    },
    {
      Image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp",
      subHeading: "Second slide label",
      button: "REQUEST A QUOTE",

      text: "  Some representative placeholder content for the second slide.",
    },
    {
      Image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp",
      button: "REQUEST A QUOTE",
      heading: "This is the heading",
      text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <FontAwesomeIcon icon={faChevronRight} className="w-20 text-black" />
    ),
    prevArrow: (
      <FontAwesomeIcon icon={faChevronLeft} className="w-20 text-black" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="relative">
      <Slider className="relative grid grid-cols-1" {...settings}>
        {Carousals.map((Carousals, idx) => {
          return (
            <>
              <div className="relative w-full active">
                <img
                  src={Carousals.Image}
                  className="block w-full 2xl:h-[700px] lg:h-[550px] "
                  alt="Motorbike Smoke"
                />

                <div className="absolute top-0 items-center hidden grid-cols-2 text-start carousel-caption md:block gird">
                  <div className="flex flex-col items-start justify-center h-full gap-5 my-4">
                    <div className="">
                      <button className="p-3 px-5 mb-2 text-white redBg">
                        NO:1 Technical Company{" "}
                      </button>
                      <div className="flex flex-col gap-1 mb-2 font-bold text-black uppercase">
                        <h5 className=" 2xl:text-8xl lg:text-7xl md:text-4xl text-3xl">
                          {Carousals.heading}
                        </h5>
                        <h5 className=" 2xl:text-8xl lg:text-7xl md:text-4xl text-3xl">
                        
                          {Carousals.subHeading}{" "}
                        </h5>
                      </div>
                      <p className="mb-5 text-black lg:pr-80">
                        {Carousals.text}
                      </p>
                      <div className="flex gap-3 text-black">
                        <button className="border p-3 px-5 border-[#292d77] hover:bg-[#292d77] hover:text-white purpleClr text-sm">
                          {Carousals.button}
                        </button>
                        <span class="w-14 h-14 rounded-full  p-0.5 redBg hover:bg-[#292d77]  rotate-90"></span>
                        {Carousals.button2}
                        <button> </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
}
