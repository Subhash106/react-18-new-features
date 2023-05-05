import useNetworkStatus from "../useNetworkStatus";

const StatusBar = () => {
  const online = useNetworkStatus();

  return <p>{online ? `✅ Online` : `❌ Offline`}</p>;
};

export default StatusBar;
