import http from "../interceptor"
import { baseUrl } from "../../../components/config/baseUrl";

export const getCourseList = async(pageNumber = 1, rowsOfPage = 3, sortingCol = 'Active', sortType = 'DESC', techCount = 0)=>{
    try{
        const result = await http.get(`/Home/GetCoursesWithPagination`, {
            params: {
              PageNumber:pageNumber,
              RowsOfPage: rowsOfPage,
              SortingCol: sortingCol,
              SortType: sortType,
              TechCount: techCount,
            }
          });
       
    return (result.courseFilterDtos);
    }catch(error){
        return[]
    }
}
export const getCourseLength = async(pageNumber = 1, rowsOfPage = 3, sortingCol = 'Active', sortType = 'DESC', techCount = 0)=>{
    try{
        const result = await http.get(`/Home/GetCoursesWithPagination`, {
            params: {
              PageNumber:pageNumber,
              RowsOfPage: rowsOfPage,
              SortingCol: sortingCol,
              SortType: sortType,
              TechCount: techCount,
            }
          });
       
    return (result.totalCount);
    }catch(error){
        return[]
    }
}