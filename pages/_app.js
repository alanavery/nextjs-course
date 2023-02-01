import { NotificationContextProvider } from '../store/notification-context';
import Layout from '../components/layout/layout';
import Head from 'next/head';
import Notification from '../components/ui/notification';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <title>NextJS Events</title>
          <meta name="description" content="One heck of a website." />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
