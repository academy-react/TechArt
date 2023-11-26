/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import CardHeading from "./CardHeading";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  return (
    <div className="relative mx-auto max-w-xl">
      <CardHeading />
      <div className="mt-6">
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              پیام شما
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-lg focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              ثبت نظر
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
