import React from "react";

export default function LatestGallery() {
  const cards = [
    {
      img: "/images/01.jpg",
      name: "Painting, Plumbing",
      status: "Plumbing",
    },
    {
      img: "/images/02.jpg",
      name: "Tiles repair",
      status: "Home Maintenance",
    },
    {
      img: "/images/03.jpg",
      name: "Flooring, Plumbing",
      status: "Floor Flooring",
    },
    {
      img: "/images/04.jpg",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "/images/05.jpg",
      name: "Electrical, Painting",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/061.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/07.jpg",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "/images/08.jpg",
      name: "Electrical, Painting",
      status: "Co-founder & CEO",
    },
    {
      img: "/images/09.jpg",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
  ];
  return (
    <section className="py-6 lg:py-20 md:py-10 ">
  
      <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
        <div className="grid grid-cols-1 gap-8 bg-white lg:grid-cols-3 md:grid-cols-2">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative w-full overflow-hidden lg:h-[280px] bg-no-repeat bg-cover group">
                        <img
                    src={cards.img}
                    className="w-full 2xl:h-[420px] md:h-[35\00px] h-[220px]"
                    alt="Louvre"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full h-[80%] opacity-0 group-hover:opacity-100 overflow-hidden text-center p-0  group-hover:p-5 yellow transition duration-300 ease-in-out bg-gradient-to-r bg-[#0000008a] group-hover:h-full"
                    style={{ transition: "all .3s ease-in-out" }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full border-white/[0.3] border">
                      <div className="">
                        <h4 className="txet-[#d8232a]">{cards.name}</h4>
                        <a className="text-2xl font-medium text-white cursor-pointer hover:yellow ">
                          {cards.status}
                        </a>                      
                        <div className="w-12 pt-4 mx-auto border-b-4 border-[#f98f04]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
