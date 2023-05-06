import { useEffect } from "react";
import { useState } from "react";
import EventContext from "./EventContext";
import Events from "./Events";
import { useAuthContext } from "../authentication/AuthContext";

const EventsContainer = () => {
  const { token } = useAuthContext();
  const [event, setEvent] = useState({});
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setEvents(data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [showEvents]);

  const eventDeleteHandler = (id) => {
    fetch("http://localhost:3002/events/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json();
      })
      .then((data) => {
        setEvents(events.filter((evnt) => evnt.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const eventSubmitHandler = (event) => {
    const { id } = event;
    fetch(`http://localhost:3002/events/${id ? id : ""}`, {
      method: event.id ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ ...event }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }

        return res.json();
      })
      .then((data) => {
        setShowEvents(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <EventContext.Provider
      value={{
        event,
        events,
        showEvents,
        setEvent,
        setShowEvents,
        eventDeleteHandler,
        eventSubmitHandler,
      }}
    >
      <Events />
    </EventContext.Provider>
  );
};

export default EventsContainer;
