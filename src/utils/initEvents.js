let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "RESERVA",
    start: todayStr,
    end: "2023-02-27",
    color: "red",
  },
  {
    id: createEventId(),
    title: "RESERVA",
    start: "2023-03-01",
    end: "2023-03-04",
    color: "red",
  },
];

export function createEventId() {
  return String(eventGuid++);
}
