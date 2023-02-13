import { HeaderApp } from "../components/header";
import { SearchBar } from "../components/search";
import Tabs from "../components/home/tabs";

const ProductsScreen = () => {
  return (
    <div className="flex flex-col gap-2">
      <HeaderApp title="Products" />
      <SearchBar />
    </div>
  );
};

export default ProductsScreen;
