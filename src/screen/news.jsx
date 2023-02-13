import * as React from "react";
import { HeaderApp } from "../components/header";
import { SearchBar } from "../components/search";
import TabsHome, { UserContext } from "../components/home/tabs";
import { NewsBody } from "../components/home/newsBody";

const NewsScreen = () => {
  const [news, setNews] = React.useState(true);
  const [about, setAbout] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  return (
    <div className="flex flex-col gap-2">
      <HeaderApp title="Home" />
      <NewsBody />
    </div>
  );
};

export default NewsScreen;
