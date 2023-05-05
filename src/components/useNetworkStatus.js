import { useEffect, useState } from "react";

function useNetworkStatus() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });

    window.addEventListener("online", () => {
      setOnline(true);
    });

    return () => {
      window.removeEventListener("online", () => {
        setOnline(true);
      });
      window.removeEventListener("offline", () => {
        setOnline(false);
      });
    };
  }, []);

  return online;
}

export default useNetworkStatus;
