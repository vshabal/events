import { Layout } from '@/components/Shared/Layout';
import { EventType } from '@/types/event';
import EventContainer from '../EventContainer';
import EventLogistics from '../EventLogistics';
import EventTitle from '../EventTitle';

type Props = {
  event: EventType;
};

function EventDetailContent({ event }: Props) {
  return (
    <Layout title="Event detail page">
      <EventContainer>
        <EventTitle>{event.title}</EventTitle>
        <EventLogistics event={event} />
      </EventContainer>
    </Layout>
  );
}

export default EventDetailContent;
