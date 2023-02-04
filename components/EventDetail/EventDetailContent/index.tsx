import { EventType } from '@/types/event';
import EventContainer from '../EventContainer';
import EventLogistics from '../EventLogistics';
import EventTitle from '../EventTitle';

type Props = {
  event: EventType;
};

function EventDetailContent({ event }: Props) {
  return (
    <EventContainer>
      <EventTitle>{event.title}</EventTitle>
      <EventLogistics event={event} />
    </EventContainer>
  );
}

export default EventDetailContent;
