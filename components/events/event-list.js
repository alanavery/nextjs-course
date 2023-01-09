import EventItem from './event-item';
import classes from './event-list.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return <EventItem image={item.image} title={item.title} date={item.date} location={item.location} id={item.id} key={item.id} />;
      })}
    </ul>
  );
};

export default EventList;
