import React, { useState } from "react";

const BlogTab = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "ثبت نظر",
      content: "",
    },
    {
      id: 2,
      tabTitle: "همه نظرات",
      content: "",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="tabs flex border-b-2 border-gray-300">
        {tabs.map((tab, i) => (
          <button
            className={`py-2 px-4 text-lg font-semibold ${
              currentTab === `${tab.id}`
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            key={i}
            id={tab.id}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content mt-4">
        {tabs.map((tab, i) => (
          <div
            key={i}
            style={{ display: currentTab === `${tab.id}` ? "block" : "none" }}
          >
            <div
              className="TabContent p-4 border border-gray-300 rounded-md overflow-y-auto"
              style={{ maxHeight: "320px" }}
            >
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTab;
