import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.log("error", error);

  return (
    <>
      <p>Oops!</p>
      <p>Something wend wrong!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
}
