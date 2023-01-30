import { EventType } from '@/types/event';
import Image from 'next/image';
import EventButton from './EventButton';
import EventContent from './EventContent';
import EventDate from './EventDate';
import EventLocation from './EventLocation';
import EventTitle from './EventTitle';
import classes from './index.module.css';

type Props = {
  event: EventType;
};

function Event({ event }: Props) {
  const date = new Date(event.date).toLocaleDateString('en-US');

  return (
    <li className={classes['list-item']}>
      <Image src={event.image} alt={event.location} width="320" height="240" />
      <EventContent
        summary={
          <>
            <EventTitle>{event.title}</EventTitle>
            <EventDate>{date}</EventDate>
            <EventLocation>{event.location}</EventLocation>
          </>
        }
        actions={<EventButton eventId={event.id} />}
      />
    </li>
  );
}

export default Event;
