import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllEvents } from '../../helpers/api-utils';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/events-search';

const EventsPage = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events that allow you to evolve." />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default EventsPage;
