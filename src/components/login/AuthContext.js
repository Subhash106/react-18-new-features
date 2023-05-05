import React from "react";

const AuthContext = React.createContext();

export const useAuthContext = () => React.useContext(AuthContext);
export default AuthContext;
