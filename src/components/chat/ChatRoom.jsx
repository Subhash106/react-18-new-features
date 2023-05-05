import { useEffect } from "react";
import createConnection from "./chat";

const ChatRoom = ({ roomId, serverUrl }) => {
  useEffect(() => {
    const connection = createConnection(roomId, serverUrl);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId]);

  return <p>Welcome to the chat</p>;
};

export default ChatRoom;
