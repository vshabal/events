import Home from '@/components/Home';
import { getFeaturedEvents } from '@/dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return <Home featuredEvents={featuredEvents} />;
}

export default HomePage;
