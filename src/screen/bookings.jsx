import FullCalendarApp from "../components/bookings/calendar";
import { HeaderApp } from "../components/header";

export const BookingsScreen = () => {
  return (
    <div className="flex flex-col rounded-lg">
      <div className="grid grid-cols-4 ">
        <div className="col-span-2 lg:col-span-6">
          <HeaderApp title="Calendario" />
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="hidden md:block col-span-2">
          <FullCalendarApp />
        </div>
      </div>
    </div>
  );
};
