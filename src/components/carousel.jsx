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

function CarouselFade(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { title } = props;
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
    <div
      className={` max-w-[600px] h-[200px] shadow-md   lg:h-[225px] w-full m-auto relative group`}
    >
      <div
        className="flex items-center justify-center border-[1px] border-[#28b622] w-full h-full rounded-md bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <h1 className="bg-black/30 text-white py-2 w-full flex items-center justify-center">
          {title}
        </h1>
      </div>
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
          className={`hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-[#28b622]/20 text-white cursor-pointer`}
        />
      </div>
      <div className="absolute flex left-0 right-0 bottom-0 justify-center ml-auto mr-auto text-white ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => {
              goToSlide(slideIndex);
            }}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled
              className={
                slide.url == slides[currentIndex].url ? "text-[#28b622]" : ""
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselFade;
