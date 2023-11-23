import React, { useState } from "react";
import Accordion from "../Accordion";
import ContactForm from "../ContactForm";
import NewsTestimonial from "../NewsTestimonials";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "درباره ی دوره ",
      content: "xxxx",
    },
    {
      id: 2,
      tabTitle: "سوالات متداول",
      content: <Accordion />,
    },
    {
      id: 3,
      tabTitle: "ثبت نظر",
      content: <ContactForm />,
    },
    {
      id: 4,
      tabTitle: "همه نظرات",
      content: <NewsTestimonial />,
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
            className="width-full p-12 "
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
