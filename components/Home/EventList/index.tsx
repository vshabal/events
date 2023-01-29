import { EventType } from "@/types/event";
import Event from "./Event";

type Props = {
  events: EventType[];
};

function EventList({ events }: Props) {
  return (
    <ul>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
