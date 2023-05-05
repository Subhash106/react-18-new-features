import { useEffect } from "react";
import { useState } from "react";
import EventContext from "./EventContext";
import Events from "./Events";

const EventsContainer = () => {
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

  return (
    <EventContext.Provider value={{ events, showEvents, setShowEvents }}>
      <Events />
    </EventContext.Provider>
  );
};

export default EventsContainer;
