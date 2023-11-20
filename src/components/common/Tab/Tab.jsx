import React, { Children, useState } from "react";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "درباره ی دوره ",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "سوالات متداول",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "ثبت نظر",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "همه نظرات",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="container">
      <div className="tabs flex justify-between">
        {tabs.map((tab, i) => (
          <button
            className="width-full p-12"
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p className="title mb-12">{tab.title}</p>

                <div className="TabContent">{tab.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
