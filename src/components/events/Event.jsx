import { useAuthContext } from "../authentication/AuthContext";
import Button from "../buttons";
import { useEventContext } from "./EventContext";
import styles from "./styles.module.css";

const Event = ({ id, title, description, image, date }) => {
  const { token } = useAuthContext();
  const { eventDeleteHandler, setShowEvents, setEvent } = useEventContext();

  return (
    <>
      <div className={styles.event}>
        <img src={image} alt={title} height="200" />
        <div>
          <h2>
            {title} - {date}
          </h2>
          <p>{description}</p>
        </div>
        {token && (
          <div className={styles.event__ctas}>
            <Button
              primary
              onClick={() => {
                setEvent({ id, title, description, image, date });
                setShowEvents(false);
              }}
            >
              Edit
            </Button>
            <Button onClick={() => eventDeleteHandler(id)}>Delete</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
