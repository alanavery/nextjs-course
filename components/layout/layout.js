import { useContext } from 'react';
import NotificationContext from '../../store/notification-context';
import MainHeader from './main-header';
import Notification from '../ui/notification';

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status} />}
    </>
  );
};

export default Layout;
