/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
function Footer() {
  return (
    <>
      {" "}
      <section className=""></section>{" "}
      <div className="text-white pt-20 bg-[#120A03]">
        <div className="container relative px-4   mx-auto 2xl:px-20 lg:px-6">
          <div className="py-5 grayS absolute grid px-4 md:grid-cols-2  items-center left-0 right-0 -top-10 bg-white">
            <div class=" flex items-center">
              <img src="/images/inbox-icon.png" className=" h-[40px]" />
              <div className="pl-3">
                <h1 class="  text-2xl font-medium   purpleClr">
                  Subscribe To Our Newsletter
                </h1>
                <p className="grayClr">
                  At vero eos et accusamus et iusto oddummy.
                </p>
              </div>
            </div>
            <div class="relative flex border  border-gray-300 w-full">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                class="w-full bg-transparent rounded border-0  focus:border-0 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button class="text-white redBg border-0 py-2 px-8 focus:outline-none hover:redBg  text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto 2xl:px-20 lg:px-6 items-center justify-between pt-10 md:flex">
          <div className="flex flex-col">
            <h2 className="text-[24px] leading-none md:text-[48px]">
              Interested in Collaboration?
            </h2>
            <p className="mt-2 mb-2 md:mt-0 md:mb-0">
              Challenge us.We want to work with you to create the really cool
              stuff.
            </p>
          </div>
          <button className="bg-[#F5931E] rounded-full  text-white hover:text-black h-[57px] w-[179px] ">
            Contact Us{" "}
          </button>
        </div>
        <div className="container mx-auto mt-28 md:mt-0 xl:pt-20">
          <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="">
              <div className="">
                <Link href="/">
                  <img
                    className="h-10 md:h-20"
                    src="./images/footer-logo.png"
                    alt="AmazonPublishigPros"
                  />
                </Link>
                <p className="pt-4 font-thin text-justify">
                  Got a book inside you but not sure how to make it happen?
                  We’re here to help. Amazon Publishing Pros is one of the most
                  successful platforms for self-publishing authors. From
                  writing, designing, publishing to distribution – we take care
                  of everything. Becoming an accomplished author has never been
                  easier!
                </p>
              </div>
            </div>
            <div className="justify-center md:flex">
              {" "}
              <div className="">
                <h3 className="text-[28px]">About Us</h3>
                <ul className="pt-2 font-thin">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <a href="about-us">About Us</a>
                  </li>
                  <li>
                    <a href="our-services">Our Services </a>
                  </li>
                  <li>
                    <a href="our-portfolio">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="client-testimonials">Client Testimonial</a>
                  </li>
                  <li>
                    <a href="contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="amazon-publishing-service">Amazon Publishing </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:justify-center md:flex">
              <div className="">
                <h3 className="text-[28px]">Services</h3>
                <ul className="pt-2 font-thin">
                  <li>
                    <a href="book-writing-service">Book Writing Services</a>
                  </li>
                  <li>
                    <a href="audio-book-service">Audio Book Service</a>
                  </li>
                  <li>
                    <a href="book-editing-proofreading-service">
                      Book Proofreading &amp; Editing
                    </a>
                  </li>
                  <li>
                    <a href="book-cover-designing">Book Cover Design</a>
                  </li>
                  <li>
                    <a href="book-illustrations-designing">
                      Book Illustrations
                    </a>
                  </li>
                  <li>
                    <a href="book-publishing-service">
                      Book Publishing Services
                    </a>
                  </li>
                  <li>
                    <a href="book-printing-service">Book Marketing Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              <div className="">
                <h3 className="text-[28px]">Contact Us</h3>
                <ul className="flex flex-col gap-3 pt-2 font-thin">
                  <li className="flex items-start gap-1">
                    <img
                      className="h-4 w-6 mt-1.5"
                      src="/images/mapIcon.png"
                      alt="image"
                    />
                    <Link className="flex" href="/">
                      {" "}
                      999 Riverview Drive - Suite 201, Totowa, NJ 07512
                    </Link>
                  </li>
                  <li className="flex gap-2 mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi mt-1.5 bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    <a href="mailto:  info@amazaon-publications.com">
                      {" "}
                      info@amazaon-publications.com
                    </a>
                  </li>
                  <li className="flex ">
                    <img
                      className="h-4 w-6 mt-1.5"
                      src="/images/mobiel.svg"
                      alt="image"
                    />
                    <a href="tel:+1 (646) 458-4222"> +1 (646) 458-4222</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container justify-between py-8 mx-auto md:py-16 md:flex ">
          <div className="flex flex-row justify-between">
            <img
              className="w-20 md:mx-2 h-7"
              src="./images/googlePlay.png"
              alt=""
            />
            <img
              className="w-20 md:mx-2 h-7"
              src="./images/scribd.png"
              alt=""
            />
            <img className="w-20 md:mx-2 h-7" src="./images/kobo.png" alt="" />
            <img className="w-20 md:mx-2 h-7" src="./images/ibook.png" alt="" />
            <img className="w-20 md:mx-2 h-7" src="./images/hac.png" alt="" />
          </div>
          <div>
            <p className=" mt-4 md:mt-0  text-[13px]">
              <a href="/Term" className="">
                Terms and Conditions
              </a>{" "}
              <a href="/Policy" className="underline"></a>
              <a className="mx-1">|</a>
              <a href="/Policy" className="">
                Privacy Policy
              </a>
            </p>{" "}
            <p className="  text-[13px]">
              <a href="/Term" className="">
                © 2023 - Amazon Publishing | All right reserved.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
