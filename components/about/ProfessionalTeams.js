import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function ProfessionalTeams() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <FontAwesomeIcon icon={faChevronRight} className="w-20 text-black" />
    ),
    prevArrow: (
      <FontAwesomeIcon icon={faChevronLeft} className="w-20 text-black" />
    ),
    responsive: [
      {
        breakpoint: 1600,
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
    ],
  };
  const cards = [
    {
      img: "/images/team-img01.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/team-img02.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/team-img03.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/team-img04.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },

  ];
  return (
    
    <section className="lg:pb-32 py-6 lg:-mt-20 ">
      <div className="container mx-auto 2xl:px-20 lg:px-6 px-4">
        <div className="grid grid-cols-1 gap-4">
          <Slider
            ref={(slider) => (cards.slider = slider)}
            {...settings}
            className="grid grid-cols-1 gap-4"
          >
            {cards.map((cards, key) => {
              return (
                <>
                  <div className="pb-4 mb-8 lg:mb-16 md:mb-12">
                    <div className="flex flex-col mx-4 bg-white shadow-xl">
                      <div className="relative w-full bg-no-repeat bg-cover group">
                        <div className="2xl:h-[500px] md:h-[360px] h-[220px]">
                        <img
                          src={cards.img}
                          className="w-full h-full"
                          alt="Louvre"
                        /></div>
                        <div
                          className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full h-24 overflow-hidden text-center transition duration-300 ease-in-out bg-white group-hover:h-32"
                          style={{ transition: "all .3s ease-in-out" }}
                        >
                          <div className="relative">
                            <h4 className="purpleClr text-xl">{cards.name}</h4>
                            <p className="grayClr text-sm">{cards.status}</p>
                            <ul
                              className="flex justify-center gap-5 -mb-5 text-xl font-bold opacity-0 group-hover:mb-0 group-hover:opacity-100"
                              style={{ transition: "all .3s ease-in-out" }}
                            >
                              <li>
                                <Link
                                  className="hover:text-redClr grayClr"
                                  href=""
                                >
                                  f
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="hover:text-redClr grayClr"
                                  href=""
                                >
                                  in
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="hover:text-redClr grayClr"
                                  href=""
                                >
                                  G +
                                </Link>
                              </li>
                            </ul>
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
      </div>
    </section>
  );
}
