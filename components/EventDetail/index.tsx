import { EventType } from '@/types/event';
import EventDetailContent from './EventDetailContent';
import EventNotFound from './EventNotFound';

type Props = {
  event?: EventType;
};

function EventDetail({ event }: Props) {
  if (!event) {
    return <EventNotFound />;
  }

  return <EventDetailContent event={event} />;
}

export default EventDetail;
