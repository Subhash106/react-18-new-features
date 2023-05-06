import { useReducer } from "react";
import Button from "../buttons";
import { useEventContext } from "./EventContext";
import eventReducer from "./eventReducer";
import styles from "./styles.module.css";
import moment from "moment";

const NewEvent = () => {
  const { event, eventSubmitHandler } = useEventContext();
  const [{ id, title, description, date, image }, dispatch] = useReducer(
    eventReducer,
    event
  );

  return (
    <div>
      <h2>New Event</h2>
      <form
        className={styles.new__event}
        onSubmit={(e) => {
          e.preventDefault();
          eventSubmitHandler({ id, title, description, date, image });
        }}
      >
        <div className={styles.form__group}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className={styles.form__input}
            value={moment(date).format("YYYY-MM-DD")}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DATE", date: e.target.value })
            }
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="title">Title</label>
          <input
            className={styles.form__input}
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) =>
              dispatch({ type: "UPDATE_TITLE", title: e.target.value })
            }
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="description">Description</label>
          <textarea
            className={styles.form__input}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) =>
              dispatch({ type: "UPDATE_DESC", description: e.target.value })
            }
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="image">Image url</label>
          <input
            className={styles.form__input}
            type="text"
            name="image"
            id="image"
            value={image}
            onChange={(e) =>
              dispatch({ type: "UPDATE_IMAGE", image: e.target.value })
            }
          />
        </div>
        <div className={styles.form__actions}>
          <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
          <Button primary>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
