import { EventType } from '@/types/event';
import EventList from './EventList';

type Props = {
  featuredEvents: EventType[];
};

function Home({ featuredEvents }: Props) {
  return <EventList events={featuredEvents} />;
}

export default Home;
