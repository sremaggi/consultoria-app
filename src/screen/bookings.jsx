import FullCalendarApp from "../components/bookings/calendar";
import { HeaderApp } from "../components/header";

export const BookingsScreen = () => {
  return (
    <div className="flex flex-col rounded-lg p-2">
      <div className="grid grid-cols-4 ">
        <div className="col-span-2 lg:col-span-6">
          <HeaderApp title="Calendario" />
        </div>
      </div>
      <div className="grid grid-cols-4 pt-2">
        <div className="flex col-span-2 bg-lime-500 justify-center">a</div>
        <div className="flex col-span-2 bg-orange-900 justify-center">a</div>
      </div>
      <div className="grid grid-cols-2">
        <div className="col-span-2 bg-green-400/20 ">
          <FullCalendarApp />
        </div>
        <div className="col-span-2">
          <FullCalendarApp />
        </div>
      </div>
    </div>
  );
};
