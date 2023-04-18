import * as React from "react";

import CarouselFade from "../carousel";
import TitlebarImageList from "../imageList";
import { WelcomeCard } from "../welcomeCard";

export const NewsBody = () => {
  return (
    <div className="h-screen w-screen flex mt-12 ">
      <div className="grid grid-cols-4 w-full h-full items-center gap-y-0 auto-rows-max">
        <div className=" bg-red-600 col-span-2">
          <CarouselFade title="Casa inferior" />
        </div>

        <div className=" bg-red-600 col-span-2">
          <CarouselFade title="Casa inferior" />
        </div>
      </div>
    </div>
  );
};
