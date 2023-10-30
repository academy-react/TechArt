import React from "react";
import image from "../../assets/image/CourseDetails/01.png";

const CourseUlike = () => {
  const cardData = [
    {
      imageUrl: "../../assets/image/CourseDetails/01.png",
      title: "Single User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      imageUrl: "../../assets/image/CourseDetails/01.png",
      title: "Double User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
    {
      imageUrl: "../../assets/image/CourseDetails/01.png",
      title: "Triple User",
      price: "$149",
      features: ["500 GB Storage", "1 Granted User", "Send up to 2 GB"],
    },
  ];
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300`}
          >
            <img
              className="rounded-2xl		 mx-auto mt-[-3rem] bg-white"
              src={image}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              {card.title}
            </h2>
            <p className="text-center text-4xl font-bold">{card.price}</p>
            <div className="text-center font-medium">
              {card.features.map((feature, index) => (
                <p
                  key={index}
                  className={`py-2 border-b mx-8 ${index === 0 ? "mt-8" : ""}`}
                >
                  {feature}
                </p>
              ))}
            </div>
            <button
              className={`bg-teal-500 hover:text-white	 hover:bg-blue-500 duration-150 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3`}
            >
              شروع دوره
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseUlike;
