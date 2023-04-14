import * as React from "react";

import CarouselFade from "../carousel";
import TitlebarImageList from "../imageList";
import { WelcomeCard } from "../welcomeCard";

export const NewsBody = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="grid grid-cols-2 gap-2 w-full ">
        <div className="col-span-2 lg:col-span-1">
          <CarouselFade title="Casa principal" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <WelcomeCard title="Bienvenid@s" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <CarouselFade title="Casa inferior" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <WelcomeCard title="Iniciar sesión" />
        </div>
      </div>
    </div>
  );
};
