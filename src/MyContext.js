import React from "react";

const MyContext = React.createContext();

export const useMyContext = () => React.useContext(MyContext);

export default MyContext;
