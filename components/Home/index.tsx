import { EventType } from '@/types/event';
import EventList from '../Shared/EventList';

type Props = {
  featuredEvents: EventType[];
};

function Home({ featuredEvents }: Props) {
  return <EventList events={featuredEvents} />;
}

export default Home;
