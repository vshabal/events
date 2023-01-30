import { Layout } from '@/components/Shared/Layout';
import { EventType } from '@/types/event';
import EventList from './EventList';

type Props = {
  featuredEvents: EventType[];
};

function Home({ featuredEvents }: Props) {
  return (
    <Layout title="The Home Page">
      <EventList events={featuredEvents} />
    </Layout>
  );
}

export default Home;
