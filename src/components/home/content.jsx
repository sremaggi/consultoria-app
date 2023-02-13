import { NewsBody } from "./newsBody";
import { NewTabsContext } from "./tabs";

export const NewsContent = () => {
  return (
    <NewTabsContext.Consumer>
      {(value) => {
        if (value.newsState) {
          return <NewsBody />;
        }
        if (value.aboutState) {
          return <h1 className="text-black">about</h1>;
        }
        if (value.contactState) {
          return <h1 className="text-black">contact</h1>;
        }
      }}
    </NewTabsContext.Consumer>
  );
};
