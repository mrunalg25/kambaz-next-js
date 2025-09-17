export default function Zoom({ params }: { params: { cid: string } }) {
  return (
    <div>
      <h1>Course {params.cid} - Zoom</h1>
      <p>Zoom links</p>
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