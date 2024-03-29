import Button from "../buttons";
import Event from "./Event";
import styles from "./styles.module.css";

import NewEvent from "./NewEvent";
import { useEventContext } from "./EventContext";
import { useAuthContext } from "../authentication/AuthContext";

const Events = () => {
  const { events, showEvents, setShowEvents } = useEventContext();
  const { token } = useAuthContext();

  return (
    <div>
      <h1>Events</h1>
      <div className={styles.event__actions}>
        <Button primary onClick={() => setShowEvents(true)}>
          All Events
        </Button>
        {token && (
          <Button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            New Event
          </Button>
        )}
      </div>
      <div>
        {showEvents && (
          <>
            <h2>All Events</h2>
            {events.map(({ id, ...event }) => (
              <Event key={id} id={id} {...event} />
            ))}
          </>
        )}
        {!showEvents && <NewEvent />}
      </div>
    </div>
  );
};

export default Events;
