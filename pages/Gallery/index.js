import LatestGallery from "@/components/gallery/LatestGallery";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <section className="lg:py-16  md:py-10 py-6 text-white bg-[#292d77]">
        <div className="container px-4 mx-auto 2xl:px-20 lg:PX-6">
          <div className="flex items-center">
            <div className="">
              <h5 className="lg:text-5xl md:text-4xl text-3xl pl-5 border-l-[6px] border-[#f98f04]">
                Gallery
              </h5>
              <div className="flex mt-2">
                <Link className="" href="/contect">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-4 hover:text-[#f98f04] "
                  />
                </Link>
                <spa className="px-2"> / </spa>
                <p className="text-xl redClr">Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <LatestGallery />
    </>
  );
}
