let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "RESERVA",
    start: "2023-04-01",
    end: "2023-04-04",
    color: "red",
    editable: false,
    allDay: true,
  },
];

export function createEventId() {
  return String(eventGuid++);
}
