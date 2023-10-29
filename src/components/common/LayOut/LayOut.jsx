import React from "react";
const MainContent = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container">{props.children}</div>
      </div>
    </>
  );
};

export default MainContent;
