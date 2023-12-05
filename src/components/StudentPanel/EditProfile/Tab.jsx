function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tab = ({ tabObject }) => {
  return (
    <div className="mx-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex flex-col sm:flex-row" aria-label="Tabs">
          {tabObject.map((tab) => (
            <a
              key={tab.name}
              className={classNames(
                tab.current
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm sm:ml-8"
              )}
              aria-current={tab.current ? "page" : undefined}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
export { Tab };
