import React from "react";
const MainContent = (props) => {
  return (
    <>
      <main className="max-w-5xl">
        <div className="container">{props.children}</div>
      </main>
    </>
  );
};

export default MainContent;
