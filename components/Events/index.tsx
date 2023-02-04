import { EventType } from '@/types/event';
import { EventSearchParams } from '@/types/eventSearchForm';
import EventList from '../Shared/EventList';
import EventSearchForm from '../Shared/EventSearchForm';

type Props = {
  events: EventType[];
  onSearch: (searchParams: EventSearchParams) => void;
};

function Events({ events, onSearch }: Props) {
  return (
    <>
      <EventSearchForm onSearch={onSearch} />
      <EventList events={events} />
    </>
  );
}

export default Events;
