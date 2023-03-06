import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <section className="lg:py-16 md:py-10 py-6 text-white bg-[#292d77]">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex items-center">
            <div className="">
              <h5 className="lg:text-5xl md:text-4xl text-3xl pl-5 border-l-[6px] border-[#f98f04]">
                Contact Us
              </h5>
              <div className="flex mt-2">
                <Link className="" href="/contect">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-4 hover:text-[#f98f04] "
                  />
                </Link>
                <spa className="px-2"> / </spa>
                <p className="text-xl redClr">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative lg:mb-20 lg:h-[500px]  2xl:-mt-20 lg:-mt-16 mt-8 overflow-hidden">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="relative flex flex-wrap w-full p-0 bg-white shadow-lg ">
            <div className="relative flex flex-col w-full p-3 md:p-8 lg:w-2/3">
              <div className="flex items-center">
                <div className="pl-5 border-l-[6px] border-[#f98f04]">
                  <p className="text-xl">GET IN TOUCH</p>
                  <h5 className="text-3xl ">Contact Form</h5>
                  <p>
                    We are a team of professional and skilled experts in all
                    domestic spheres. We offer a wide range of seryou with any
                    unconventional.
                  </p>
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
      <section className="py-10 lg:py-20 ">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex flex-col gap-4 mb-5 lg:gap-6 md:mb-8 lg:mb-16">
            <p className="text-center grayClr">OUR SERVICES</p>
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl md:w-[50%] flex mx-auto purpleClr">
              What You Will Get Form Us Check It
            </h2>
            <p className="font-thin text-center grayClr">
              We are a team of professional and skilled experts in all domestic
              spheres.
            </p>
          </div>
        </div>{" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d3607.3253985035867!2d55.4019075!3d25.2932692!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f5c633029586d%3A0xf4cf32933aeda7eb!2zQUwgUkFZQU4gU0VDVVJJVFkgJiBTQUZFVFkgVFJBRElORyDYp9mE2LHZitin2YYg2YTYqtis2KfYsdipINmF2LnYr9in2Kog2KfZhNin2YXZhiDZiNin2YTYs9mE2KfZhdipIDE1dGggU3QgQWwgUXVzYWlzIEluZHVzdHJpYWwgQXJlYSAtIEFsIFF1c2FpcyBJbmR1c3RyaWFsIEFyZWEgNCAtIER1YmFpIFVuaXRlZCBBcmFiIEVtaXJhdGVz4oCt!3m2!1d25.293269199999997!2d55.4019075!5e0!3m2!1sen!2s!4v1678077981833!5m2!1sen!2s"
          className="w-full"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
