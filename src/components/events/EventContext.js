import React from "react";

const EventContext = React.createContext();

export const useEventContext = () => React.useContext(EventContext);
export default EventContext;
