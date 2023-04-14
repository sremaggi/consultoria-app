import * as React from "react";
import { HeaderApp } from "../components/header";
import { NewsBody } from "../components/home/newsBody";
import { FooterApp } from "../components/footer";
import { NavBarApp } from "../components/navbar";

export const NewsScreen = () => {
  return (
    <div>
      <NavBarApp />
      <div className="flex flex-col">
        <NewsBody />
      </div>
      <FooterApp />
    </div>
  );
};
