import {
  faLightbulb,
  faPaintRoller,
  faStarHalfAlt,
  faStarSharp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

function Countsup() {
  return (
    <>
      <section className="py-1 mb-0 countsup h-60">
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6">
          <div className="flex flex-col gap-8 my-6 md:flex-row">
            <div className="flex flex-col w-full gap-2 text-center">
              <span className="">
                {" "}
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="w-[40px] mx-auto h-[40px]"
                />
              </span>
              <h1 className="w-16 mx-auto text-[40px]">
                <CountUp start={0} end={215} duration={2.75}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h1>{" "}
              <span class="w-[70px] mx-auto p-0.5 bg-[#e8e8e8] "></span>
              <p className="text-white ">Completed Projects</p>
            </div>{" "}
            <div className="flex flex-col w-full gap-2 text-center">
              <span className="">
                {" "}
                <FontAwesomeIcon
                  icon={faPaintRoller}
                  className="w-[40px] mx-auto h-[40px]"
                />
              </span>
              <h1 className="w-16 mx-auto text-[40px]">
                <CountUp start={0} end={123} duration={2.75}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h1>{" "}
              <span class="w-[70px] mx-auto p-0.5 bg-[#e8e8e8] "></span>
              <p className="text-white ">Expert Worker</p>
            </div>{" "}
            <div className="flex flex-col w-full gap-2 text-center">
              <span className="">
                {" "}
                <img src="/images/star-stoke.svg" 
                  className="w-[40px] mx-auto h-[40px]"
                />
              </span>
              <h1 className=" mx-auto text-[40px]">
                <CountUp start={0} end={3245} duration={2.75}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h1>{" "}
              <span class="w-[70px] mx-auto p-0.5 bg-[#e8e8e8] "></span>
              <p className="text-white ">Happy Customers</p>
            </div>
            <div className="flex flex-col w-full gap-2 text-center">
              <span className="">
                {" "}
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="w-[40px] mx-auto h-[40px]"
                />
              </span>
              <h1 className="w-16 mx-auto text-[40px]">
                <CountUp start={0} end={15} duration={2.75}>
                  {({ countUpRef, start }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              </h1>{" "}
              <span class="w-[70px] mx-auto p-0.5 bg-[#e8e8e8] "></span>
              <p className="text-white ">Award Winner</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#292d77]">
        <div className=" text-white lg:py-36 py-10">
          <div className="container relative w-full px-4 mx-auto 2xl:px-20 lg:px-6 ">
            <div className="flex flex-col lg:gap-6 gap-4">
              <p className="text-center ">MEET OUR TEAM</p>
              <h2 className="text-center lg:text-5xl md:text-4xl text-3xl justify-center flex mx-auto ">
                A Professional Our Team
              </h2>
              <div className="w-16 h-[6px] mx-auto redBg"></div>
              <p className="font-thin text-center ">
                Boldman has 10+ years of experience with providing wide area of
                specialty services works listed below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Countsup;
