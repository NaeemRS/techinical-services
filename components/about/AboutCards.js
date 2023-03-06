
import Link from "next/link";
import React from "react";

export default function AboutCards() {
  const cards = [
    {
      img: "/images/flag-solid.svg",
      name: "Our History",
      description: "We are a team of professional and skilled experts in all domestic spheres. We offer a wide range of services and at the same time",
    }, {
      img: "/images/bag.svg",
    
      name: "Our History",
      description: "We are a team of professional and skilled experts in all domestic spheres. We offer a wide range of services and at the same time",
    },
    {
      img: "/images/eye-regular.svg",
      
      name: "Our History",
      description: "We are a team of professional and skilled experts in all domestic spheres. We offer a wide range of services and at the same time",
    },
  ];
  return (
    <>
      <section className="lg:py-20 md:py-8 py-6">
        <div className="container 2xl:px-20 lg:px-6 md:px-6 px-4 mx-auto">

          <div className="grid justify-center grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
            {cards.map((cards, key) => {
              return (
                <>
                  <div className="relative w-full overflow-hidden bg-no-repeat bg-cover group grayS">
                    <div className="2xl:h-[400px] md:h-[350px] h-auto flex flex-col py-12 md:px-12 px-2 lg:gap-8 gap-4 justify-start text-center  w-full">
                      <div className="flex items-center justify-center"> <span className="inline-flex items-center justify-center w-20 h-20 rounded-full redBg">
                        <img src={cards.img} className="text-white text-wihte w-9 fill-white" />
                      </span></div>
                      <h4 className="md:text-2xl text-xl purpleClr hover:text-red-600">
                        <Link href=''>{cards.name}</Link></h4>
                      <p className="text-sm md:leading-6 grayClr">{cards.description}</p>
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
