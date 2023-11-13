import { StarIcon } from "@heroicons/react/20/solid";

const reviews = {
  average: 4,
  totalCount: 1624,

  // More reviews...
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Rate() {
  return (
    <div className="bg-white ">
      <div className="lg:col-span-4 ">
        <div className=" pr-2 mt-3 flex items-center">
          <div>
            <div className="flex items-center pr-2 border-black border-r">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="py-5 pr-2 border-black border-r ">
              <p>رتبه بندی: پایتون</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
