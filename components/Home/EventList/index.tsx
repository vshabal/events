import { EventType } from "@/types/event";
import Event from "./Event";
import classes from "./index.module.css";

type Props = {
  events: EventType[];
};

function EventList({ events }: Props) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}

export default EventList;
