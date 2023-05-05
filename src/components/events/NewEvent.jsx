import { useReducer } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { getAuthToken } from "../../utils/getAuthToken";
import Button from "../buttons";
import { useEventContext } from "./EventContext";
import eventReducer from "./eventReducer";
import styles from "./styles.module.css";

const NewEvent = () => {
  const { setShowEvents } = useEventContext();
  const [event, dispatch] = useReducer(eventReducer, {
    title: "",
    description: "",
    date: "",
    id: "",
    image: "",
  });

  const { title, description, date, image } = event;

  const eventSubmitHandler = (e) => {
    const token = getAuthToken();
    e.preventDefault();
    fetch("http://localhost:3002/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ ...event, id: String(Date.now()) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setShowEvents(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>New Event</h2>
      <form className={styles.new__event} onSubmit={eventSubmitHandler}>
        <div className={styles.form__group}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className={styles.form__input}
            value={date}
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
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default NewEvent;
