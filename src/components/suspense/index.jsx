import { Suspense, lazy } from "react";
const Posts = lazy(() => import("./posts"));

const SuspenseBasics = () => {
  return (
    <Suspense fallback={<p>Posts Loading...</p>}>
      <Posts />
    </Suspense>
  );
};

export default SuspenseBasics;
