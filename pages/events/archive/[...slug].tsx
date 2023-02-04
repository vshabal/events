import FilteredEvents from '@/components/FilteredEvents';
import { getFilteredEvents } from '@/dummy-data';
import { EventType } from '@/types/event';
import { EventSearchParams } from '@/types/eventSearchForm';
import { createFilteredEventsUrl, getEventSearchParamsFromSlug } from '@/utils/filteredEventsUrl';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function FilteredEventsPage() {
  const [eventSearchParams, setEventSearchParams] = useState<EventSearchParams>();
  const {
    query: { slug }
  } = useRouter();
  useEffect(() => {
    if (slug) {
      setEventSearchParams(getEventSearchParamsFromSlug(slug as string[]));
    }
  }, [slug]);

  const [filteredEvents, setFilteredEvents] = useState<EventType[]>([]);
  useEffect(() => {
    if (eventSearchParams) {
      const filterParams = composeFilterParams(eventSearchParams);
      setFilteredEvents(getFilteredEvents(filterParams));
    }
  }, [eventSearchParams]);
  const router = useRouter();
  const onSearch = (searchParams: EventSearchParams) => {
    router.push(createFilteredEventsUrl(searchParams));
  };

  if (!eventSearchParams) {
    return null;
  }

  return (
    <FilteredEvents
      events={filteredEvents}
      onSearch={onSearch}
      eventSearchParams={eventSearchParams}
    />
  );
}

export default FilteredEventsPage;

function composeFilterParams(eventSearchParams: EventSearchParams) {
  return {
    year: composeFilterParam(eventSearchParams.year),
    month: composeFilterParam(eventSearchParams.month)
  };
}

function composeFilterParam(value?: string) {
  return value ? Number(value) : undefined;
}
