import * as React from "react";

import CarouselFade from "../carousel";
import TitlebarImageList from "../imageList";

export const NewsBody = () => {
  return (
    <div className="grid grid-cols-8 lg:grid-cols-8 h-full mt-2">
      <div className="col-span-8 md:col-span-5 lg:pr-3 h-full">
        <CarouselFade></CarouselFade>
        <TitlebarImageList />
      </div>
      <div className="col-span-8 md:col-span-3 lg:pr-3 h-full mx-3 rounded-sm bg-slate-500 hidden md:block">
        asdas
      </div>
    </div>
  );
};
