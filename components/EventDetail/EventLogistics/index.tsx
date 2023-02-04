import CalendarIcon from '@/icons/calendar.svg';
import LocationIcon from '@/icons/location.svg';
import { EventType } from '@/types/event';
import Image from 'next/image';
import classes from './index.module.css';
import EventData from './EventData';

type Props = {
  event: EventType;
};

function EventLogistics({ event }: Props) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US');

  return (
    <section className={classes.container}>
      <Image
        className={classes.image}
        src={event.image}
        alt={event.title}
        width="320"
        height="240"
      />
      <ul className={classes.list}>
        <EventData icon={CalendarIcon}>
          <time>{formattedDate}</time>
        </EventData>
        <EventData icon={LocationIcon}>
          <address>{event.location}</address>
        </EventData>
      </ul>
    </section>
  );
}

export default EventLogistics;
