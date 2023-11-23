import React from "react";

export default function Accordion() {
  return (
    <div className="container flex flex-col justify-center px-4  mx-auto ">
      <div className="space-y-6">
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">What is React?</summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            React is a front-end JavaScript library developed by Facebook in
            2011.
          </p>
        </details>
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">
            What is Props and how to use it give some example?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            Props is the shorthand for Properties in React.
          </p>
        </details>
        <details className="w-full rounded-lg ring-1 ring-purple-600">
          <summary className="px-4 py-6">
            How to install tailwind css in react js ?
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            What are synthetic events in React?
          </p>
        </details>
      </div>
    </div>
  );
}
