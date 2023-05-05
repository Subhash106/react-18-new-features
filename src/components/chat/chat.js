export default function createConnection(roomId, serverUrl) {
  return {
    connect() {
      console.log(
        `%cConnecting... to ${roomId} at ${serverUrl}`,
        "color:green"
      );
    },
    disconnect() {
      console.log(
        `%cDisconnecting... to ${roomId} at ${serverUrl}`,
        "color:orangered"
      );
    },
  };
}
