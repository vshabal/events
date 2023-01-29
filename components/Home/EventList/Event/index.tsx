import { EventType } from "@/types/event";
import Image from "next/image";
import Link from "next/link";
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
          <h2>{event.title}</h2>
          <div className={classes.dateContainer}>
            <time>{date}</time>
          </div>
          <div className={classes.addressContainer}>
            <address>{event.location}</address>
          </div>
        </div>
        <div className={classes.actionsContainer}>
          <Link href={`/events/${event.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default Event;
