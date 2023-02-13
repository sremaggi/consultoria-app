import * as React from "react";
import { NewsContent } from "./content";
export const NewTabsContext = React.createContext();
const TabsHome = () => {
  const [news, setNews] = React.useState(true);
  const [about, setAbout] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  return (
    <div>
      <NewTabsContext.Provider
        value={{
          newsState: news,
          aboutState: about,
          contactState: contact,
        }}
      >
        <nav className="flex items-center justify-between border-b transition-all ">
          <a
            onClick={() => {
              setNews(true);
              setAbout(false);
              setContact(false);
            }}
            className={`text-black py-2 pr-4 ${
              news
                ? "text-[#dd8372] relative before:w-1/2 before:h-[3px] before:absolute before:bg-[#dd8372] before:left-0 before:rounded-full before:-bottom-[1px]"
                : ""
            } `}
          >
            News
          </a>
          <a
            onClick={() => {
              setNews(false);
              setAbout(true);
              setContact(false);
            }}
            className={`text-black py-2 pr-4 ${
              about
                ? "text-[#dd8372] relative before:w-1/2 before:h-[3px] before:absolute before:bg-[#dd8372] before:left-0 before:rounded-full before:-bottom-[1px]"
                : ""
            } `}
          >
            About
          </a>
          <a
            onClick={() => {
              setNews(false);
              setAbout(false);
              setContact(true);
            }}
            className={`text-black py-2 pr-4 ${
              contact
                ? "text-[#dd8372] relative before:w-1/2 before:h-[3px] before:absolute before:bg-[#dd8372] before:left-0 before:rounded-full before:-bottom-[1px]"
                : ""
            } `}
          >
            Contact
          </a>
        </nav>
        <div>
          <NewsContent />
        </div>
      </NewTabsContext.Provider>
    </div>
  );
};

export default TabsHome;
