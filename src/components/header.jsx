import { TimeNowFormat } from "../utils/time";

export const HeaderApp = (props) => {
  const { title } = props;
  return (
    <header className="text-black">
      <div className="">
        <h1 className="text-2xl text-gray-600">{title}</h1>
      </div>
    </header>
  );
};
