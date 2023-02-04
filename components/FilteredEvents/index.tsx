import { EventType } from '@/types/event';
import { EventSearchParams } from '@/types/eventSearchForm';
import EventList from '../Shared/EventList';
import EventSearchForm from '../Shared/EventSearchForm';

type Props = {
  events: EventType[];
  onSearch: (searchParams: EventSearchParams) => void;
  eventSearchParams?: EventSearchParams;
};

function FilteredEvents({ events, onSearch, eventSearchParams }: Props) {
  return (
    <>
      <EventSearchForm onSearch={onSearch} values={eventSearchParams} />
      <EventList events={events} />
    </>
  );
}

export default FilteredEvents;
