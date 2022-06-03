import { Fragment } from "react";
import Head from "next/head";

import { getEventById, getFeaturedEvents } from "../../helper/api-until";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetail(props) {
  const event = props.event;

  if (!event) {
    return (
      <div className="center">
        <p>Loading ...</p>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.id;

  const event = await getEventById(eventId);
  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const eventsIds = await getFeaturedEvents();

  return {
    paths: eventsIds.map((event) => ({ params: { id: event.id } })),
    fallback: true,
  };
}
export default EventDetail;
