import { useState } from "react";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";

import "./style.css";
import TabButton from "./TabButton";

const Transition = () => {
  console.log("transition called");
  const [tab, setTab] = useState("about");

  const selectTab = (tab) => {
    setTab(tab);
  };

  return (
    <div>
      <ul>
        <li>
          <TabButton
            onClick={() => selectTab("about")}
            style={{ background: tab === "about" ? "green" : "#eee" }}
          >
            About
          </TabButton>
        </li>
        <li>
          <TabButton
            onClick={() => selectTab("posts")}
            style={{ background: tab === "posts" ? "green" : "#eee" }}
          >
            Posts
          </TabButton>
        </li>
        <li>
          <TabButton
            onClick={() => selectTab("contact")}
            style={{ background: tab === "contact" ? "green" : "#eee" }}
          >
            Contact
          </TabButton>
        </li>
      </ul>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
};

export default Transition;
