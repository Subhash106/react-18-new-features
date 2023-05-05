import { useTransition } from "react";

const TabButton = ({ children, onClick }) => {
  const [isPending, startTransition] = useTransition();
  if (isPending) {
    return <p>Loading...</p>;
  }
  return (
    <button
      onClick={() =>
        startTransition(() => {
          onClick();
        })
      }
    >
      {children}
    </button>
  );
};

export default TabButton;
