import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";

export default function TabsIndex() {
  return (
    <Tabs>
      <Tab title="Tab 1">
        <div>Content of Tab 1</div>
      </Tab>
      <Tab title="Tab 2">
        <div>Content of Tab 2</div>
      </Tab>
      <Tab title="Tab 3">
        <div>Content of Tab 3</div>
      </Tab>
    </Tabs>
  );
}
