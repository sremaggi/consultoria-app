import * as React from "react";

export const WelcomeCard = (props) => {
  const { title } = props;
  return (
    <div className="h-full max-w-[700px] mx-3 rounded-lg shadow-lg bg-[#F3F3F3] text-gray-700 hidden md:block p-3">
      <div className="grid grid-cols-4">
        <div className="col-span-4   flex justify-center text-gray-600">
          <h1 className="text-2xl">{title}</h1>
        </div>
      </div>
    </div>
  );
};
