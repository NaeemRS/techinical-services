/* eslint-disable @next/next/no-img-element */
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: (
        <FontAwesomeIcon icon={faChevronRight} className="w-20 text-black" />
      ),
      prevArrow: (
        <FontAwesomeIcon icon={faChevronLeft} className="w-20 text-black" />
      ),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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
    const data = [
      {
        Image: "/images/02.jpg",
        heading: "Floor and Wall Tiling",
        text: "Floor and Wall Tiling Work including supplying tiles, installation, replacement, and repair.",
      },
      {
        Image: "/images/05.jpg",
        heading: "Painting Services",
        text: "We provide Contracting Services for Interior and Exterior Painting as well as Repainting for Apartments, villas and offices.",
      },
      {
        Image: "/images/07.jpg",
        heading: "Air Conditioner",
        text: "We specialize in the Installation and Maintenance of AC(Air Conditioning) Ventilation and Air Filtration Systems.",
      },
      {
        Image:
          "/images/08.jpg",
        heading: "Home Maintainance",
        text: "We provide Contracting Services for Interior and Exterior Painting as well as Repainting for Apartments, villas and offices.",
      },
  
    ];
    return (
      <div className=" bg-[url('/images/bgImage.jpg')] bg-no-repeat bg-cover py-5">
        <div className="flex flex-col gap-6 mb-3 lg:mb-7 md:mb6">
          <p className="text-center grayClr">OUR SERVICES</p>
          <h2 className="text-center text-3xl lg:text-5xl md:text-4xl md:w-[50%] flex mx-auto purpleClr">
            What You Will Get Form Us Check It
          </h2>
          <p className="font-thin text-center grayClr">
            We are a team of professional and skilled experts in all domestic
            spheres.
          </p>
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className="container 2xl:px-20 lg:px-6 px-4 py-3 mx-auto">
          <div className="gap-4">
            <Slider ref={(slider) => (this.slider = slider)} {...settings}>
              {data.map((val, key) => {
                return (
                  <>
                    <div className="pb-4 mb-8 lg:mb-16 md:mb-12">
                      <div className="flex mx-3 lg:h-[520px] md:h-[500px] h-auto  shadow-xl flex-col bg-white">
                        <div className="md:h-[280px] h-40">
                          <img
                            src={val.Image}
                            alt="Image"
                            className="w-full object-cover h-full"
                          />
                        </div>

                        <div className="flex flex-col gap-3  mb-4 text-center 2xl:p-7 lg:p-5 p-3">
                          <h2 className="md:text-2xl text-xl purpleClr">{val.heading}</h2>
                          <p className="text-sm leading-6 grayClr">
                            {val.text}
                          </p>
                          <button className=" w-fit flex mx-auto hover:bg-[#292D77] hover:text-white  p-3 px-12 uppercase purpleClr  border-[#292D77] border-2">
                            Learn More{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
