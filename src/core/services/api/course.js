import http from "../interceptor"
import { baseUrl } from "../../../components/config/baseUrl";

export const getCourseList = async(count=0)=>{
    try{
        const result = await http.get(`/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=${count}`);
        console.log(result)
    return result;
    }catch(error){
        return[]
    }
}