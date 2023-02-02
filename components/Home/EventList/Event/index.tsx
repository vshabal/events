import { EventType } from '@/types/event';
import Image from 'next/image';
import EventButton from './EventButton';
import EventContent from './EventContent';
import EventData from './EventData';
import LocationIcon from '@/icons/location.svg';
import CalendarIcon from '@/icons/calendar.svg';
import EventTitle from './EventTitle';
import classes from './index.module.css';

type Props = {
  event: EventType;
};

function Event({ event }: Props) {
  const date = new Date(event.date).toLocaleDateString('en-US');

  return (
    <li className={classes.container}>
      <Image
        className={classes.image}
        src={event.image}
        alt={event.location}
        width="320"
        height="240"
      />
      <EventContent
        summary={
          <>
            <EventTitle>{event.title}</EventTitle>
            <EventData icon={CalendarIcon}>
              <time>{date}</time>
            </EventData>
            <EventData icon={LocationIcon}>
              <address>{event.location}</address>
            </EventData>
          </>
        }
        actions={<EventButton eventId={event.id} />}
      />
    </li>
  );
}

export default Event;
