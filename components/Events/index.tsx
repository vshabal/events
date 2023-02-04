import { EventType } from '@/types/event';
import EventList from '../Shared/EventList';

type Props = {
  events: EventType[];
};

function Events({ events }: Props) {
  return <EventList events={events} />;
}

export default Events;
