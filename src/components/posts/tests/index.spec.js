import { render, renderHook } from "@testing-library/react";
import Posts from "../index";

import { Provider } from "react-redux";

describe("Posts", () => {
  it.skip("Should test useFetchPostsQuery hook", () => {
    render(
      <Provider store={{ posts: [{ id: "test" }] }}>
        <Posts />
      </Provider>
    );

    console.log(screen.debug());
  });
});
