import Head from "next/head";

import { getFeaturedEvents } from "../helper/api-until";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great that allow you to evolve"
        />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 100, // in seconds
  };
}

export default HomePage;
