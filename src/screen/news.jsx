import * as React from "react";
import { HeaderApp } from "../components/header";
import { NewsBody } from "../components/home/newsBody";
import { FooterApp } from "../components/footer";

export const NewsScreen = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <HeaderApp title="Home" />
        <NewsBody />
      </div>
    </div>
  );
};
