import Link from "next/link";
export default function Assignments({ params }: { params: { cid: string } }) {
  return (
    <div>
      <h1>Course {params.cid} - Assignments</h1>
      <p>Assignments</p>
      <input
        type="text"
        placeholder="Search Assignments"
        id="wd-assignments-search"
      />
      <br /><br />

      {/* Navigation to other course screens */}
      <nav>
        <Link href={`/Courses/${params.cid}/Home`}>Home</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Assignments`}>Assignments</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Grades`}>Grades</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Modules`}>Modules</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Quizzes`}>Quizzes</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Zoom`}>Zoom</Link> |{" "}
        <Link href={`/Courses/${params.cid}/Piazza`}>Piazza</Link>
      </nav>

      <hr />

      {/* Sections */}
      <h2>Assignments</h2>
      <ul>
        <li>
          <Link href={`/Courses/${params.cid}/Assignments/1`}>
            Assignment 1
          </Link>{" "}
          <Link href={`/Courses/${params.cid}/Assignments/1`}>
          <button>Edit</button>
          </Link>
          
          <button>Delete</button>
          <button>View</button>
        </li>
        <li>
          <Link href={`/Courses/${params.cid}/Assignments/2`}>
            Assignment 2
          </Link>{" "}
          <Link href={`/Courses/${params.cid}/Assignments/1`}>
          <button>Edit</button>
          </Link>
          <button>Delete</button>
          <button>View</button>
        </li>
        <li>
          <Link href={`/Courses/${params.cid}/Assignments/3`}>
            Assignment 3
          </Link>{" "}
          <Link href={`/Courses/${params.cid}/Assignments/1`}>
          <button>Edit</button>
          </Link>
          <button>Delete</button>
          <button>View</button>
        </li>
      </ul>

      <h2>Quizzes</h2>
      <p>Links to quizzes</p>

      <h2>Exams</h2>
      <p>Links to exams</p>

      <h2>Project</h2>
      <p>Project details</p>
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