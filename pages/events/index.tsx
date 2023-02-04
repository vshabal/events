import Events from '@/components/Events';
import { getAllEvents } from '@/dummy-data';
import { EventSearchParams } from '@/types/eventSearchForm';
import { createFilteredEventsUrl } from '@/utils/filteredEventsUrl';
import { useRouter } from 'next/router';

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const onSearch = (searchParams: EventSearchParams) => {
    router.push(createFilteredEventsUrl(searchParams));
  };

  return <Events events={events} onSearch={onSearch} />;
}

export default EventsPage;
