import { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../helper/api-until";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/events-search";

function EventsPage(props) {
  const events = props.events;
  const router = useRouter();

  function findEventHandler(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
