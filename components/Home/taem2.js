import React from "react";

export default function Teams2() {
  const cards = [
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Painting, Plumbing",
      status: "Plumbing",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Tiles repair",
      status: "Home Maintenance",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Flooring, Plumbing",
      status: "Floor Flooring",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Flooring, Home Maintenance",
      status: "Drywall Insulation",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Electrical, Painting",
      status: "Co-founder & CEO",
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
      name: "Shoaib Akmal",
      status: "Co-founder & CEO",
    },
  ];
  return (
    <section className="lg:py-20 Latest-Projects">
      <div className="container px-10 mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-white">
          <p className="text-center grayClr">RECENTLY COMPLETED</p>
          <h2 className="flex mx-auto text-5xl text-center ">
          Our Latest Projects
          </h2>
         
        </div>
        <div className="grid grid-cols-1 gap-2 p-6 bg-white 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {cards.map((cards, key) => {
            return (
              <>
                <div className="relative w-full overflow-hidden lg:h-[280px] bg-no-repeat bg-cover group">
                  <img
                    src={cards.img}
                    className="w-full 2xl:h-[420px] md:h-[350px] h-[220px]"
                    alt="Louvre"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full h-[80%] opacity-0 group-hover:opacity-100 overflow-hidden text-center p-0  group-hover:p-5 yellow transition duration-300 ease-in-out bg-gradient-to-r bg-[#0000008a] group-hover:h-full"
                    style={{ transition: "all .3s ease-in-out" }}
                  >
                    <div className="relative flex items-center justify-center w-full h-full border">
                      <div className="">
                        <h4 className="txet-[#d8232a]">{cards.name}</h4>
                        <a className="hover:yellow text-white text-2xl cursor-pointer font-medium ">
                          {cards.status}
                        </a>
                        <div className="w-12 pt-4 mx-auto border-b-4 border-[#d8232a]"></div>
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
