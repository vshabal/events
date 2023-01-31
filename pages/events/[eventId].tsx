import EventDetail from '@/components/EventDetail';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';

type ParsedQuery = {
  eventId: string;
}

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query as ParsedQuery;
  const event = getEventById(eventId);

  return <EventDetail event={event} />;
}

export default EventDetailPage;
