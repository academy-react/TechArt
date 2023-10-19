import React from "react";
const products = [
  {
    id: 1,
    name: "دوره  React",
    color: "استاد 1",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    imageAlt: "تصویر در دسترس نیست",
    price: "1400",
  },
    {
      id: 2,
      name: "دوره  React",
      color: "استاد 2",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
    },
    {
      id: 3,
      name: "دوره  React",
      color: "استاد 3",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      imageAlt: "تصویر در دسترس نیست",
      price: "1400",
    },

  // More products...
];

const ProfessorCard = () => {
  return (
    <div className="bg-white font-sans ">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className=" text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
          اساتید برتر
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative ">
                <div className="relative h-52 w-full overflow-hidden rounded-lg border shadow-[-5px_-8px_15px_5px_rgba(0,0,0,0.1),_5px_8px_15px_5px_rgba(45,78,255,0.15)]   ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className=" absolute w-[25%] left-5  m-2  rounded-full object-contain object-center "
                  />
                  <div className=" mt-4">
                    <h3 className="text-l  font-bold text-gray-800 drop-shadow-l   text-right p-2 ">
                      {product.name}
                    </h3>
                    <a
                      href="#"
                      className="relative flex items-center m-2  w-20  h-8 justify-center rounded-xl border border-transparent border-stone-500 hover:bg-amber-100 py-3  p-2 text-sm font-medium hover:text-amber-600 bg-amber-600 text-white"
                    >
                      ثبت
                    </a>
                    <p className="mt-1 text-sm text-gray-500 justify-center text-right p-4">
                      {product.color}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProfessorCard };
