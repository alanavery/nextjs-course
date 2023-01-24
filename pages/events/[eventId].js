import Head from 'next/head';
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '../../components/input/comments';

const EventDetailPage = ({ event }) => {
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve." />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
};

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default EventDetailPage;
