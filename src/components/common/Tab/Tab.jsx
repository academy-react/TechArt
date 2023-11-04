import { useState } from "react";
import { CustomInput } from "../customElements/CustomInput";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center max-w-xl">
          <ul className="flex space-x-2">
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-purple-600 text-blue" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                نظرات
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-purple-600 text-blue" : ""
                } inline-block px-4 py-2 text-gray-600 bg-white rounded shadow`}
              >
                درج نظرات
              </a>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-red border">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </div>
            <div className={openTab === 2 ? "block" : "hidden"}>
              React JS with Tailwind CSS Tab 2 Content show
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
