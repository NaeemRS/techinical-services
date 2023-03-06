import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Services() {
  const cards = [
    {
      img: "/images/05.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/06.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/07.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/08.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/09.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/02.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/image17.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/image18.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
  ];
  return (
    <>
      <section className="py-16 text-white bg-[#292d77]">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex items-center">
            <div className="">
              <h5 className="lg:text-5xl md:text-4xl text-3xl pl-5 border-l-[6px] border-[#f98f04]">
                Services
              </h5>
              <div className="flex mt-2">
                <Link className="" href="/About">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-4 hover:text-[#f98f04] "
                  />
                </Link>
                <spa className="px-2 "> / </spa>
                <p className="text-xl redClr">Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-20 md:py-10 ">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex flex-col gap-3 mb-5 lg:gap-6 lg:mb-10 md:mb-6">
            <p className="text-center grayClr">OUR SERVICES</p>
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl w-[50%] flex mx-auto purpleClr">
              What You Will Get Form Us Check It
            </h2>
            <p className="font-thin text-center grayClr">
              We are a team of professional and skilled experts in all domestic
              spheres.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
            {cards.map((cards, key) => {
              return (
                <>
                  <div className="relative w-full overflow-hidden bg-no-repeat bg-cover shadow-md group">
                    <img
                      src={cards.img}
                      className="w-full 2xl:h-[270px] md:h-[250px] h-[220px]"
                      alt="Louvre"
                    />
                    <div className="flex items-center justify-center w-full text-center p-9">
                      <div className="relative">
                        <h4 className="text-2xl purpleClr hover:text-[#f98f04]">
                          <Link href="">{cards.name}</Link>
                        </h4>
                        <a className="mb-3">{cards.status}</a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
