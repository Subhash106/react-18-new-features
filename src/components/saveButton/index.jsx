import useNetworkStatus from "../useNetworkStatus";

const SaveButton = () => {
  const online = useNetworkStatus();

  return (
    <button disabled={!online}>
      {online ? "Save progress" : "Connecting..."}
    </button>
  );
};

export default SaveButton;
