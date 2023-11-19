import React from "react";
const MainContent = (props) => {
  return (
    <>
      <main className="max-w-5xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {props.children}
        </div>
      </main>
    </>
  );
};

export default MainContent;

// export default function Example() {
//   return <div className="container mx-auto px-4 sm:px-6 lg:px-8">{/* Content goes here */}</div>
// }
