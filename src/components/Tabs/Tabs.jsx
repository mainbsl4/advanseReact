// import { Icon } from '@iconify/react';
import React, { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  console.log(activeTab);

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {children.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? "active" : ""}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.title}
            <div className="acrivetabsBtnRounded"></div>
          </button>
        ))}
      </div>
      <div className="tab-content">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs; 
                           