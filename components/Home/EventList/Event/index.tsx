import { EventType } from "@/types/event";
import Image from "next/image";
import Link from "next/link";

type Props = {
  event: EventType;
};

function Event({ event }: Props) {
  const date = new Date(event.date).toLocaleDateString("en-US");

  return (
    <li>
      <Image src={event.image} alt={event.location} width="320" height="240" />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{date}</time>
          </div>
          <div>
            <address>{event.location}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${event.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default Event;
