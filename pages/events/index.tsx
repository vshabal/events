import Events from '@/components/Events';
import { getAllEvents } from '@/dummy-data';

function EventsPage() {
  const events = getAllEvents();

  return <Events events={events} />;
}

export default EventsPage;
