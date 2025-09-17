export default function Quizzes({ params }: { params: { courseId: string } }) {
  return (
    <div>
      <h1>Course {params.courseId} - Quizzes</h1>
      <p>Quizzes</p>
    </div>
  );
}

// import Modules from "../Modules/page"; 
// import CourseStatus from "./Status"
// export default function Home() { 
//  return ( 
//    <div id="wd-home"> 
//      <table> 
//        <tbody> 
//          <tr> 
//            <td valign="top" width="70%"> <Modules /> </td> 
//            <td valign="top"> <CourseStatus /> </td> 
//          </tr> 
//        </tbody> 
//      </table> 
//    </div> 
// );} 