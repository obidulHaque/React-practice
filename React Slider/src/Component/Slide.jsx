import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slide() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false, // Set to true for reverse scroll
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => {
      // Logic to auto-reverse the direction
      if (next === 0 || next === settings.slidesToShow - 1) {
        settings.rtl = !settings.rtl;
      }
    },
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative container mx-auto my-8 px-10 ">
      <Slider ref={sliderRef} {...settings}>
        <div className="h-[20vw] p-4">
          <img src="Image 1.jpg" alt="" />
        </div>
        <div className="h-[20vw] p-4">
          <img src="image 2.jpg" alt="" />
        </div>
        <div className="h-[20vw] p-4">
          <img src="image 3.jpg" alt="" />
        </div>
        <div className="h-[20vw] p-4">
          <img src="image 5.jpg" alt="" />
        </div>
      </Slider>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black p-2 rounded-full "
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Slide;
