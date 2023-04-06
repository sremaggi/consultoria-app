export const TimeNowFormat = () => {
  var d = new Date(),
    dformat =
      [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("/") +
      " " +
      [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
  return dformat;
};

export function RangeDates(startDate, endDate, steps = 1) {
  const dateArray = [];
  var currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + 1);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    currentDate.setUTCDate(currentDate.getUTCDate() + steps);
  }

  dateArray.shift();
  dateArray.pop();
  return dateArray;
}
