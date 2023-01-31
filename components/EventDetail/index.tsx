import { Layout } from '@/components/Shared/Layout';
import { EventType } from '@/types/event';

type Props = {
  event?: EventType;
};

function EventDetail({ event }: Props) {
  return (
    <Layout title="Event detail page">
      <div>
        {event ? JSON.stringify(event) : 'Event was not found'}
      </div>
    </Layout>
  );
}

export default EventDetail;
