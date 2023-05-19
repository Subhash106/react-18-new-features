import React from "react";

const MusicContext = React.createContext();

export const useMusicContext = () => React.useContext(MusicContext);
export default MusicContext;
