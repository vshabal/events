import LinkButton from "@/components/Shared/LinkButton";
import { EventType } from "@/types/event";
import Image from "next/image";
import EventDate from "./EventDate";
import EventLocation from "./EventLocation";
import EventTitle from "./EventTitle";
import classes from "./index.module.css";

type Props = {
  event: EventType;
};

function Event({ event }: Props) {
  const date = new Date(event.date).toLocaleDateString("en-US");

  return (
    <li className={classes.listItem}>
      <Image src={event.image} alt={event.location} width="320" height="240" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <EventTitle>{event.title}</EventTitle>
          <EventDate>{date}</EventDate>
          <EventLocation>{event.location}</EventLocation>
        </div>
        <div className={classes.actionsContainer}>
          <LinkButton url={`/events/${event.id}`}>Explore Event</LinkButton>
        </div>
      </div>
    </li>
  );
}

export default Event;
