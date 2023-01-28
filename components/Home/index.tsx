import { Layout } from "@/components/Shared/Layout";
import { Event } from "@/types/event";

type Props = {
  featuredEvents: Event[];
};

function Home({ featuredEvents }: Props) {
  return (
    <Layout title="The Home Page">
      <span>{JSON.stringify(featuredEvents)}</span>
    </Layout>
  );
}

export default Home;
