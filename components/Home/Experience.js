/* eslint-disable @next/next/no-img-element */
import React from "react";
import CountUp from "react-countup";
function Experience() {
  return (
    <div className="md:my-[98px] my-[40px] md:px-0 px-2">
      <div className="flex xl:flex-row flex-col xl:px-[80px] lg:px-4 container mx-auto ">
        <div className="order-2 w-full xl:w-3/5 xl:mx-16 xl:order-1">
          <div className="flex flex-col items-center lg:flex-row lg:items-center md:items-start ">
            <h2 className="text-High text-[90px] font-semibold">1997</h2>
            <span class="w-20 lg:block hidden h-full p-0.5 redBg  rotate-90"></span>
            <div className="">
              <div className="flex flex-col ">
                <p className="text-xs font-medium grayClr">
                  24 YEARS EXPERIENCE
                </p>
                <h1 className="mx:text-[36px] text-3xl purpleClr">
                  Success Experiences
                </h1>
              </div>
            </div>
          </div>
          <h3 className="grayClr text-sm md:text-[17px] my-5 ">
            We are a team of professional and skilled experts in all domestic
            spheres. We offer a wide range of services and at the same time
          </h3>
          <p className="text-sm grayClr  md:leading-[27px] ">
            Thames Global is one the leading technical companies in the UAE and
            we are located at Al Qusais Industrial area 4,Dubai, United Arab
            Emirates. We provide Air Conditioning,Electrical, Plumbing painting
            and all types of technical supports.We work to ensure people’s
            comfort at their home, and to provide the best and the fastest help
            at fair prices. We stand for quality, safety and credibility, so you
            could be sure about our work. Initially we started as a company
            specializing in Thames Shipping Cargo Services . During our
            successful work we expanded our list of services. Now we are proud
            that we can help people with Air Conditioning,Electrical, Plumbing
            and painting services.
          </p>
          <div className="flex flex-col gap-8 my-6 md:flex-row">
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4   items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <div className="w-[40px] h-[40px]">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/briefcase.png"
                    alt="iamge"
                  />
                </div>
                <div className="w-16">
                  <CountUp start={0} end={350} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr ">
                Projects Completed
              </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4  items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <span className="">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/manIcon.png"
                    alt="image"
                  />
                </span>
                <div className="w-16">
                  <CountUp start={0} end={125} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr">
                Work Employed
              </p>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex redClr gap-4  items-center xl:justify-center  xl:px-0 px-2  text-[40px]">
                <span className="">
                  {" "}
                  <img
                    className="w-[40px] h-[40px]"
                    src="/images/cup.png"
                    alt="image"
                  />
                </span>
                <div className="w-16">
                  <CountUp start={0} end={24} duration={2.75}>
                    {({ countUpRef, start }) => (
                      <div>
                        <span ref={countUpRef} />
                      </div>
                    )}
                  </CountUp>
                </div>
                <span>+</span>
              </div>
              <span class="w-full  p-0.5 bg-[#e8e8e8] "></span>
              <p className="xl:px-0 lg:px-2 text-[17px] xl:text-center  purpleClr">
                Years Experiance
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 mx-auto xl:w-2/5 xl:mx-0 xl:order-2">
          <img src="/images/experience.png" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
