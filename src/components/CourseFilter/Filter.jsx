import React from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
const Filter = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full rounded-lg bg-slate-600 overflow-hidden  text-white flex flex-col gap-[1px]">
      <div className="item group is-active">
        <div className="header p-6 group-[.is-active]:font-bold  bg-slate-900 font-bold flex justify-between justify-items-center cursor-pointer ">
          <div>
            <div>step1</div>
          </div>
          <div className="inactive-icon">
           
            <BsChevronDown />
          </div>
          <div className="active-icon">
          
            <BsChevronUp />
          </div>
        </div>
        <div className="content h-0 overflow-hidden transition-all duration-500 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellendus, quo, laudantium voluptatibus placeat voluptatem
            reiciendis deserunt ducimus culpa delectus porro aliquid tempore
            nostrum excepturi ipsam fugit minus neque ex!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            repellendus, quo, laudantium voluptatibus placeat voluptatem
            reiciendis deserunt ducimus culpa delectus porro aliquid tempore
            nostrum excepturi ipsam fugit minus neque ex!
          </p>
        </div>
      </div>
    </div>
  );
};

export { Filter };
{
  /* <div className="w-full rounded-lg bg-slate-600 overflow-hidden  text-white flex flex-col gap-[1px]">
<div className="item active">
  <div className="header p-6  bg-slate-900 font-bold flex justify-between justify-items-center cursor-pointer ">
    
     
     <div>
      <div>step1</div>
      
     </div>
      <div className="inactiv-icon"> <BsChevronDown /></div>
      <div className="activ-icon"> <BsChevronUp /></div>
      
    
  </div>
  <div className="content h-0 overflow-hidden transition-all duration-500 ">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
      repellendus, quo, laudantium voluptatibus placeat voluptatem
      reiciendis deserunt ducimus culpa delectus porro aliquid tempore
      nostrum excepturi ipsam fugit minus neque ex!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
      repellendus, quo, laudantium voluptatibus placeat voluptatem
      reiciendis deserunt ducimus culpa delectus porro aliquid tempore
      nostrum excepturi ipsam fugit minus neque ex!
    </p>
  </div>
</div>


</div>
// <div className="w-full">
//   <div>
//     <input
//     id="teacher"
//     checked={open}
//     type="checkbox"
//     className="peer sr-only"
//   />
//   <label
//     htmlFor="teacher"
//     className="w-full h-10 flex justify-center items-center border-stone-700  hover:bg-gray-100 transition-colors duration-1000 ease-in-out "
//     onClick={() => setOpen(!open)}
//   >
//     {open ? "نام استاد " : "نام استاد"}
//   </label>
//   <div className="border overflow-hidden border-stone-700 h-0 bg-slate peer-checked:h-[200px]  transition-[height] duration-1000 ease-in-out">

//   </div>
//   </div>
//   <div>
//     <input
//     id="expandCollapse"
//     checked={open}
//     type="checkbox"
//     className="peer sr-only"
//   />
//   <label
//     htmlFor="expandCollapse"
//     className="w-full h-10 flex justify-center items-center border-stone-700  hover:bg-gray-100 transition-colors duration-1000 ease-in-out "
//     onClick={() => setOpen(!open)}
//   >
//     {open ? "نام استاد " : "نام استاد"}
//   </label>
//   <div className="border overflow-hidden border-stone-700 h-0 bg-slate peer-checked:h-[200px]  transition-[height] duration-1000 ease-in-out">

//   </div>
//   </div>
//   <div>
//     <input
//     id="expandCollapse"
//     checked={open}
//     type="checkbox"
//     className="peer sr-only"
//   />
//   <label
//     htmlFor="expandCollapse"
//     className="w-full h-10 flex justify-center items-center border-stone-700  hover:bg-gray-100 transition-colors duration-1000 ease-in-out "
//     onClick={() => setOpen(!open)}
//   >
//     {open ? "نام استاد " : "نام استاد"}
//   </label>
//   <div className="border overflow-hidden border-stone-700 h-0 bg-slate peer-checked:h-[200px]  transition-[height] duration-1000 ease-in-out">

//   </div>
//   </div>

// </div> */
}
