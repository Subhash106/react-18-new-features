import { useState } from "react";
import ChatRoom from "./ChatRoom";

const ChatController = () => {
  const serverUrl = "https://localhost:1234";
  const [room, setRoom] = useState("general");
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <label>Choose a chat room</label>
          <select value={room} onChange={(e) => setRoom(e.target.value)}>
            <option value="general">General</option>
            <option value="music">Music</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <button onClick={clickHandler}>
          {show ? "Close chat" : "Open chat"}
        </button>
      </div>

      {show && <ChatRoom roomId={room} serverUrl={serverUrl} />}
    </div>
  );
};

export default ChatController;
