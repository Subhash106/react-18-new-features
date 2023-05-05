import { getAuthToken } from "../../utils/getAuthToken";
import Button from "../buttons";
import styles from "./styles.module.css";

const Event = ({ id, title, description, image, date }) => {
  const eventDeleteHandler = () => {
    const token = getAuthToken();
    fetch("http://localhost:3002/events/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
  };

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
        <div className={styles.event__actions}>
          <Button primary>Edit</Button>
          <Button onClick={eventDeleteHandler}>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default Event;
