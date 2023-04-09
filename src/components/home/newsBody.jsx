import * as React from "react";

import CarouselFade from "../carousel";
import TitlebarImageList from "../imageList";
import { WelcomeCard } from "../welcomeCard";

export const NewsBody = () => {
  return (
    <div className="grid grid-cols-8 lg:grid-cols-8 h-full mt-2">
      <div className="col-span-8 md:col-span-5 lg:pr-3 h-full">
        <CarouselFade></CarouselFade>
        <TitlebarImageList />
      </div>
      <WelcomeCard />
    </div>
  );
};
