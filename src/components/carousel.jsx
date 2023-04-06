import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
  },
];

function CarouselFade() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previusSlide = () => {
    return currentIndex == 0
      ? setCurrentIndex(slides.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };
  const nextSlide = () => {
    return currentIndex == slides.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const goToSlide = (i) => {
    setCurrentIndex(i);
  };

  return (
    <div className="max-w-[1400px] h-[315px] lg:h-[550px] w-full m-auto relative group">
      <div
        className="w-full h-full rounded-md bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div>
        {/** Left Arrow */}
        <BsChevronCompactLeft
          onClick={previusSlide}
          size={50}
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-[#28b622]/20 text-white cursor-pointer`}
        />
      </div>

      <div>
        {/** Roght Arrow */}
        <BsChevronCompactRight
          onClick={nextSlide}
          size={50}
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-[#28b622]/20 text-green cursor-pointer`}
        />
      </div>
      <div className="absolute flex left-0 right-0 bottom-0 justify-center ml-auto mr-auto text-[#28b622] ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselFade;
