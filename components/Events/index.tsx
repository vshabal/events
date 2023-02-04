import { EventType } from '@/types/event';
import { EventSearchParams } from '@/types/eventSearchForm';
import EventList from '../Shared/EventList';
import EventSearchForm from '../Shared/EventSearchForm';

type Props = {
  events: EventType[];
};

function Events({ events }: Props) {
  const mockSearchParams = {
    year: '',
    month: ''
  };
  const mockOnSearch = (values: EventSearchParams) => {
    console.log(values);
  };
  return (
    <>
      <EventSearchForm onSearch={mockOnSearch} values={mockSearchParams} />
      <EventList events={events} />
    </>
  );
}

export default Events;
