import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import AuthContext from "./components/authentication/AuthContext";
import { getAuthToken, getExpirationDuration } from "./utils/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContext.Provider
      value={{
        token: getAuthToken(),
        expirationDuration: getExpirationDuration(),
      }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContext.Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
