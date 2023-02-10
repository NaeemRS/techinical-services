import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    };
    
    const data = [
      {
        Image: "http://www.thamesglobaluae.com/images/blog/07.jpg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "http://www.thamesglobaluae.com/images/blog/07.jpg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "http://www.thamesglobaluae.com/images/blog/07.jpg",
        heading: "This is the heading2",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "http://www.thamesglobaluae.com/images/blog/07.jpg",
        heading: "This is the heading3",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
      {
        Image: "http://www.thamesglobaluae.com/images/blog/07.jpg",
        heading: "This is the heading",
        text: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of adocument or a typeface without relying on meaningful content.  Lorem ipsum may be used as a placeholder before final copy is available.",
      },
    ];
    return (
      <div className="bg-[url('/images/bgImage.jpg')] bg-no-repeat bg-cover">
      <div className="lg:p-[80px] py-12 container mx-auto ">
        <div className="flex flex-col md:gap-6 gap-2 mb-16">
          <p className="text-center grayClr">OUR SERVICES</p>
          <h2 className="text-center md:text-5xl text-xl w-[50%] flex mx-auto purpleClr">
            What You Will Get Form Us Check It
          </h2>
          <p className="text-center grayClr font-thin">
            We are a team of professional and skilled experts in all domestic
            spheres.
          </p>
        </div>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <div className=" gap-4 px-8   ">
          <Slider ref={(slider) => (this.slider = slider)} {...settings}>
            {data.map((val, key) => {
              return (
                <>
                  <div className="flex mx-2 p-1 shadow-xl flex-col bg-white">
                    <img src={val.Image} />
                    <div className="my-4 flex flex-col gap-6 text-center">
                      <h2 className="text-2xl purpleClr">{val.heading}</h2>
                      <p className="text-sm grayClr leading-7">{val.text}</p>
                      <button className=" w-fit flex mx-auto hover:bg-[#292D77] hover:text-white  p-3 px-12 uppercase purpleClr  border-[#292D77] border-2">
                        Learn More{" "}
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div></div>
    );
  }
}
