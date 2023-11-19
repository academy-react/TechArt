export const getCourseList = async()=>{
    const result = await axios.get("https:api-academy.iran.run/Home/GetCoursesTop?Count=5");
    return result.data;
}