const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    location: "Somerstreeet 25, 12345 San Somewhere",
    date: "2021-04-12",
    image: "/images/coding-event.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Programming for somebody",
    location: "Somerstreeet 52, 54321 San Somewhere",
    date: "2021-04-12",
    image: "/images/coding-event-1.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

type DateFilter = {
  year: number;
  month: number;
};
export function getFilteredEvents({ year, month }: DateFilter) {
  return DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    const eventDateFullYear = eventDate.getFullYear();
    const doesEventYearMatchesFilter = eventDateFullYear === year;
    const eventDateMonth = eventDate.getMonth();
    const doesEventMonthMatchesFilter = eventDateMonth === month - 1;

    return doesEventYearMatchesFilter && doesEventMonthMatchesFilter;
  });
}

export function getEventById(eventId: string) {
  return DUMMY_EVENTS.find((event) => event.id === eventId);
}
