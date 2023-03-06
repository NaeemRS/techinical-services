import React from "react";

export default function GetSolutions() {
  return (
    <>
      <section className="Latest-Projects lg:py-20 lg:h-[500px] bg-cover md:h-[300px] h-52">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="flex flex-col ">
            <p className="text-center  font-semibold tracking-widest text-[#ffffff] mb-3">
              Don't Know What To Start With?
            </p>
            <h2 className="flex mx-auto lg:text-6xl lg:max-w-3xl md:text-4xl text-3xl text-center text-[#ffffff]">
              Get A Solutions For All Your Services
            </h2>
          </div>
        </div>
      </section>
      <section className="relative lg:mb-20 lg:h-[500px]  2xl:-mt-20 lg:-mt-16 mt-8 overflow-hidden">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="relative flex flex-wrap w-full p-0 bg-white shadow-lg ">
            <div className="relative flex flex-col w-full p-3 md:p-8 lg:w-2/3">
              <div className="flex items-center">
                <div className="pl-5 border-l-[6px] border-[#f98f04]">
                  <p className="text-xl">FREE CONSULTATION</p>
                  <h5 className="text-3xl ">Get a Free Quote</h5>
                </div>
              </div>
              <div className="grid mt-2 mb-4 gap-x-5 gap-y-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                  className="w-full px-3 bg-white border border-gray-100 h-14 focus:border-gray-200 active:border-gray-200 "
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full px-3 bg-white border border-gray-100 h-14 focus:border-gray-200 active:border-gray-200 "
                />
                <input
                  type="munber"
                  id="number"
                  placeholder="Phone Number"
                  className="w-full px-3 bg-white border border-gray-100 h-14 focus:border-gray-200 active:border-gray-200 "
                />
                <input
                  type="text"
                  id="email"
                  placeholder="Zepcode"
                  className="w-full px-3 bg-white border border-gray-100 h-14 focus:border-gray-200 active:border-gray-200 "
                />
              </div>
              <textarea
                id="message"
                placeholder="Your Massage"
                name="message"
                className="w-full h-32 px-3 py-3 bg-white border border-gray-100 rounded focus:border-gray-200 active:border-gray-200"
              ></textarea>

              <button className="text-white bg-[#f98f04] border-0 lg:mt-8 md:mt-5 mt-4 h-14 px-6 focus:outline-none hover:bg-[#f98f04] rounded text-lg">
                GET A FREE QUOTE
              </button>
            </div>
            <div className="relative w-full mt-4 lg:mt-0 lg:w-1/3">
              <div className="relative w-full mx-auto bg-no-repeat bg-cover lg:w-full md:w-1/2 group">
                <img
                  src="/images/col-bgimage-3.jpg"
                  className="w-full h-[100%]"
                  alt="Louvre"
                />

                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-center w-full opacity-100 overflow-hidden  yellow  bg-[#0000008a] h-full"
                  style={{ transition: "all .3s ease-in-out" }}
                >
                  <div className="relative flex items-center justify-start w-full h-full border">
                    <div className="p-5">
                      <h4 className="text-[#f98f04] md:text-5xl text-3xl lg:text-6xl">
                        LETS <br /> <span className="text-white">GROW</span>{" "}
                        <br /> TOGETHER
                      </h4>
                      <div className="mt-4 lg:mt-12 md:mt-6">
                        <button className=" w-fit flex hover:bg-[#f98f04] hover:border-[#f98f04] hover:text-[#ffffff] text-white  p-3 px-12 uppercase   border-[#ffffff] border-2">
                          Contect Us
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
