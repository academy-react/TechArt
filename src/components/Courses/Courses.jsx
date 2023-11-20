import React, { useEffect, useState } from "react";
import { Card } from "../common/CourseCard/CourseCard";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";

import { Filter } from "../CourseFilter/Filter";
import { Pagination } from "../common/Pagination";
import { getCourseList,getCourseLength } from "../../core/services/api/course";
import axios from "axios";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  const [cardStyle, setCardStyle] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // Current page index
  const itemsPerPage =10; // Number of items per page
  const [items, setItems] = useState(); // Example array of items for the first page
  const [filteredItems, setFilteredItems] = useState(); // State to hold filtered items
  const [listLenght, setListLenght] = useState(); 
  

  const [sortCourse, setSortCourse] = useState("most-popular");
  const [searchQuery, setSearchQuery] = useState("");

  const sortItems = (c) => {
    let sortedItems = [...courseList];
    switch (c) {
      case "cheapest":
        sortedItems.sort((a, b) => a.cost - b.cost);
        break;
      case "most-expensive":
        sortedItems.sort((a, b) => b.cost - a.cost);
        break;
      case "most-recent":
        sortedItems.sort(
          (a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate)
        );
        break;
      case "most-popular":
        sortedItems.sort((a, b) => b.courseRate - a.courseRate);

        break;
      default:
        break;
    }

    setSortCourse(c);
    setCourseList(sortedItems);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      getList(); // Return all items if the search query is empty
    } else {
      const filteredItems = searchQuery
        ? courseList.filter((courseList) =>
            courseList.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : courseList;

      setCourseList(filteredItems);
    }
  };

  // // Function to handle sorting/filtering
  // const handleSorting = (sortedItems) => {
  //   setFilteredItems(sortedItems);
  //   // You can perform additional actions with the filtered items if needed
  // };
  // Function to handle page changes
  const handlePageClick = ({ selected }) => {
 
       setCurrentPage(selected);
    const startIndex = selected * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItems(courseList.slice(startIndex, endIndex));
   
   
  };

  const getList = async () => {
    const courses = await getCourseList(currentPage+1, itemsPerPage);
    setCourseList(courses);
  };

  const getListLenght = async () => {
    const listLenght = await getCourseLength();
    setListLenght(listLenght);
  };

  useEffect(() => {
    getList();
    getListLenght();
    console.log(courseList);
  }, [currentPage]);

  return (
    <div className="main-div container mx-auto">
      <div className="hero"></div>
      <div className="course-name flex flex-row  w-full justify-center">
        <h3 className="  text-2xl font-bold drop-shadow-lg shadow-black  text-gray-700">
          دوره ها ی آموزشی
        </h3>
      </div>
      <div className="course-head flex justify-start">
        <div className=" list-btn    lg:w-1/6  flex flex-row  text-2xl">
          <div className=" mx-3 p-2" onClick={() => setCardStyle(0)}>
            <BsFillGrid3X3GapFill
              className={cardStyle === 0 ? " border-b-2 border-black " : ""}
            />
          </div>

          <div className=" p-2 " onClick={() => setCardStyle(1)}>
            <BsListUl
              className={cardStyle === 1 ? " border-b-2 border-black " : ""}
            />
          </div>
        </div>

        <div className=" list-btn flex flex-row    lg:w-5/6    justify-end text-2xl"></div>
      </div>

      <div className="flex  flex-row  ">
        <div className=" border-2 course-filter w-1/6 h-3/5 mt-10 p-1">
          <Filter courseList={courseList} />
        </div>
        <div
          className="course w-5/6 
         justify-items-start "
        >
          <div>
            <div className="p-4 text-sm  w-full">
              <div className="  mb-4    flex   justify-between items-center">
                <div className="w-1/3">
                  <input
                    id="search"
                    type="text"
                    placeholder="جستجو یا نام دوره ...."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label htmlFor="sortSelect" className="mr-2">
                    فیلتر بر اساس :
                  </label>
                  <select
                    id="sortSelect"
                    onChange={(e) => sortItems(e.target.value)}
                    value={sortCourse}
                    className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:border-blue-500"
                  >
                    <option value="cheapest">ارزانترین</option>
                    <option value="most-expensive">گرانترین</option>
                    <option value="most-recent">بروزترین</option>
                    <option value="most-popular">محبوب ترین</option>
                  </select>
                </div>
              </div>
            </div>
            <Card product={courseList} cardStyle={cardStyle} />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={Math.ceil(listLenght / itemsPerPage)}
          currentPage={currentPage}
          
        />
      </div>
    </div>
  );
};

export { Courses };
