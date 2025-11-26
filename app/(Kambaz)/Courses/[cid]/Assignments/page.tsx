"use client";

import {
  setAssignments,
  addAssignment,
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import * as coursesClient from "../../client";
import * as assignmentsClient from "./client";
import { FaTrash, FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <input
          id="wd-search-assignment"
          className="form-control w-50"
          placeholder="Search for Assignments"
        />
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">
            + Group
          </button>
          <Link
            href={`/Courses/${cid}/Assignments/new`}
            id="wd-add-assignment"
            className="btn btn-danger"
          >
            <FaPlus className="me-2" />
            Assignment
          </Link>
        </div>
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total
      </h3>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="wd-assignment-list-item list-group-item p-3 ps-1"
          >
            <div className="d-flex align-items-center">
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link text-decoration-none text-dark"
                >
                  <strong>{assignment.title}</strong>
                  <div className="text-muted">
                    <small>
                      Due: {assignment.dueDate} | Points: {assignment.points}
                    </small>
                  </div>
                </Link>
              </div>
              <FaTrash
                className="text-danger"
                onClick={() => removeAssignment(assignment._id)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// "use client";
// import { FaPlus, FaTrash } from "react-icons/fa6";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { BsGripVertical } from "react-icons/bs";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { Button, InputGroup, FormControl } from "react-bootstrap";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { deleteAssignment } from "./reducer";

// export default function Assignments() {
//   const { cid } = useParams();
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
//   const dispatch = useDispatch();
  
//   return (
//     <div id="wd-assignments" className="p-3">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div style={{ width: "300px" }}>
//           <InputGroup>
//             <InputGroup.Text>
//               <FaMagnifyingGlass />
//             </InputGroup.Text>
//             <FormControl
//               placeholder="Search for Assignments"
//               id="wd-search-assignment"
//             />
//           </InputGroup>
//         </div>
        
//         <div>
//           <Button 
//             variant="secondary" 
//             className="me-2" 
//             id="wd-add-assignment-group"
//           >
//             <FaPlus className="me-1" />
//             Group
//           </Button>
//           <Link href={`/Courses/${cid}/Assignments/new`}>
//             <Button 
//               variant="danger" 
//               id="wd-add-assignment"
//             >
//               <FaPlus className="me-1" />
//               Assignment
//             </Button>
//           </Link>
//         </div>
//       </div>

//       <div className="border border-gray">
//         <div className="bg-secondary p-3 d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2" />
//             <span className="fw-bold">ASSIGNMENTS</span>
//             <span className="ms-2">40% of Total</span>
//           </div>
//           <div className="d-flex align-items-center">
//             <Button variant="outline-secondary" size="sm" className="me-2">
//               <FaPlus />
//             </Button>
//             <IoEllipsisVertical />
//           </div>
//         </div>

//         <ul id="wd-assignment-list" className="list-group list-group-flush">
//           {assignments
//             .filter((assignment: any) => assignment.course === cid)
//             .map((assignment: any) => (
//               <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "3px solid green" }}>
//                 <div className="d-flex justify-content-between align-items-start">
//                   <div className="d-flex">
//                     <BsGripVertical className="me-3 mt-1" />
//                     <div>
//                       <div>
//                         <Link 
//                           href={`/Courses/${cid}/Assignments/${assignment._id}`}
//                           className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                         >
//                           {assignment.title}
//                         </Link>
//                       </div>
//                       <div className="text-muted small mt-1">
//                         <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate} at 12:00am
//                       </div>
//                       <div className="text-muted small">
//                         <strong>Due</strong> {assignment.dueDate} at 11:59pm | {assignment.points} pts
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <FaTrash 
//                       className="text-danger me-2 mt-1" 
//                       onClick={() => {
//                         if (window.confirm("Are you sure you want to delete this assignment?")) {
//                           dispatch(deleteAssignment(assignment._id));
//                         }
//                       }}
//                     />
//                     <IoEllipsisVertical className="mt-1" />
//                   </div>
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { FaPlus } from "react-icons/fa6";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { BsGripVertical } from "react-icons/bs";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { Button, InputGroup, FormControl } from "react-bootstrap";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import * as db from "../../../Database";

// export default function Assignments() {
//   const { cid } = useParams();
//   const assignments = db.assignments;
  
//   return (
//     <div id="wd-assignments" className="p-3">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div style={{ width: "300px" }}>
//           <InputGroup>
//             <InputGroup.Text>
//               <FaMagnifyingGlass />
//             </InputGroup.Text>
//             <FormControl
//               placeholder="Search for Assignments"
//               id="wd-search-assignment"
//             />
//           </InputGroup>
//         </div>
        
//         <div>
//           <Button 
//             variant="secondary" 
//             className="me-2" 
//             id="wd-add-assignment-group"
//           >
//             <FaPlus className="me-1" />
//             Group
//           </Button>
//           <Button 
//             variant="danger" 
//             id="wd-add-assignment"
//           >
//             <FaPlus className="me-1" />
//             Assignment
//           </Button>
//         </div>
//       </div>

//       <div className="border border-gray">
//         <div className="bg-secondary p-3 d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2" />
//             <span className="fw-bold">ASSIGNMENTS</span>
//             <span className="ms-2">40% of Total</span>
//           </div>
//           <div className="d-flex align-items-center">
//             <Button variant="outline-secondary" size="sm" className="me-2">
//               <FaPlus />
//             </Button>
//             <IoEllipsisVertical />
//           </div>
//         </div>

//         <ul id="wd-assignment-list" className="list-group list-group-flush">
//           {assignments
//             .filter((assignment: any) => assignment.course === cid)
//             .map((assignment: any) => (
//               <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "3px solid green" }}>
//                 <div className="d-flex justify-content-between align-items-start">
//                   <div className="d-flex">
//                     <BsGripVertical className="me-3 mt-1" />
//                     <div>
//                       <div>
//                         <Link 
//                           href={`/Courses/${cid}/Assignments/${assignment._id}`}
//                           className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                         >
//                           {assignment.title}
//                         </Link>
//                       </div>
//                       <div className="text-muted small mt-1">
//                         <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate} at 12:00am
//                       </div>
//                       <div className="text-muted small">
//                         <strong>Due</strong> {assignment.dueDate} at 11:59pm | {assignment.points} pts
//                       </div>
//                     </div>
//                   </div>
//                   <IoEllipsisVertical className="mt-1" />
//                 </div>
//               </li>
//             ))}
//         </ul>
//       </div>
//     </div>
//   );
// }



// "use client";
// import { FaPlus } from "react-icons/fa6";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { BsGripVertical } from "react-icons/bs";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { Button, InputGroup, FormControl } from "react-bootstrap";
// import Link from "next/link";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments" className="p-3">
//       {/* Top controls row */}
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div style={{ width: "300px" }}>
//           <InputGroup>
//             <InputGroup.Text>
//               <FaMagnifyingGlass />
//             </InputGroup.Text>
//             <FormControl
//               placeholder="Search for Assignments"
//               id="wd-search-assignment"
//             />
//           </InputGroup>
//         </div>
        
//         <div>
//           <Button 
//             variant="secondary" 
//             className="me-2" 
//             id="wd-add-assignment-group"
//           >
//             <FaPlus className="me-1" />
//             Group
//           </Button>
//           <Button 
//             variant="danger" 
//             id="wd-add-assignment"
//           >
//             <FaPlus className="me-1" />
//             Assignment
//           </Button>
//         </div>
//       </div>

//       {/* Assignment group header */}
//       <div className="border border-gray">
//         <div className="bg-secondary p-3 d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <BsGripVertical className="me-2" />
//             <span className="fw-bold">ASSIGNMENTS</span>
//             <span className="ms-2">40% of Total</span>
//           </div>
//           <div className="d-flex align-items-center">
//             <Button variant="outline-secondary" size="sm" className="me-2">
//               <FaPlus />
//             </Button>
//             <IoEllipsisVertical />
//           </div>
//         </div>

//         {/* Assignment list */}
//         <ul id="wd-assignment-list" className="list-group list-group-flush">
//           <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "3px solid green" }}>
//             <div className="d-flex justify-content-between align-items-start">
//               <div className="d-flex">
//                 <BsGripVertical className="me-3 mt-1" />
//                 <div>
//                   <div>
//                     <Link 
//                       href="/Courses/1234/Assignments/123"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A1 - ENV + HTML
//                     </Link>
//                   </div>
//                   <div className="text-muted small mt-1">
//                     <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
//                   </div>
//                   <div className="text-muted small">
//                     <strong>Due</strong> May 13 at 11:59pm | 100 pts
//                   </div>
//                 </div>
//               </div>
//               <IoEllipsisVertical className="mt-1" />
//             </div>
//           </li>

//           <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "3px solid green" }}>
//             <div className="d-flex justify-content-between align-items-start">
//               <div className="d-flex">
//                 <BsGripVertical className="me-3 mt-1" />
//                 <div>
//                   <div>
//                     <Link 
//                       href="/Courses/1234/Assignments/124"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A2 - CSS + BOOTSTRAP
//                     </Link>
//                   </div>
//                   <div className="text-muted small mt-1">
//                     <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
//                   </div>
//                   <div className="text-muted small">
//                     <strong>Due</strong> May 20 at 11:59pm | 100 pts
//                   </div>
//                 </div>
//               </div>
//               <IoEllipsisVertical className="mt-1" />
//             </div>
//           </li>

//           <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "3px solid green" }}>
//             <div className="d-flex justify-content-between align-items-start">
//               <div className="d-flex">
//                 <BsGripVertical className="me-3 mt-1" />
//                 <div>
//                   <div>
//                     <Link 
//                       href="/Courses/1234/Assignments/125"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A3 - JAVASCRIPT + REACT
//                     </Link>
//                   </div>
//                   <div className="text-muted small mt-1">
//                     <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
//                   </div>
//                   <div className="text-muted small">
//                     <strong>Due</strong> May 27 at 11:59pm | 100 pts
//                   </div>
//                 </div>
//               </div>
//               <IoEllipsisVertical className="mt-1" />
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


// import Link from "next/link";
// export default function Assignments({ params }: { params: { cid: string } }) {
//   return (
//     <div>
//       <h1>Course {params.cid} - Assignments</h1>
//       <p>Assignments</p>
//       <input
//         type="text"
//         placeholder="Search Assignments"
//         id="wd-assignments-search"
//       />
//       <br /><br />

//       {/* Navigation to other course screens */}
//       <nav>
//         <Link href={`/Courses/${params.cid}/Home`}>Home</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Assignments`}>Assignments</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Grades`}>Grades</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Modules`}>Modules</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Quizzes`}>Quizzes</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Zoom`}>Zoom</Link> |{" "}
//         <Link href={`/Courses/${params.cid}/Piazza`}>Piazza</Link>
//       </nav>

//       <hr />

//       {/* Sections */}
//       <h2>Assignments</h2>
//       <ul>
//         <li>
//           <Link href={`/Courses/${params.cid}/Assignments/1`}>
//             Assignment 1
//           </Link>{" "}
//           <Link href={`/Courses/${params.cid}/Assignments/1`}>
//           <button>Edit</button>
//           </Link>
          
//           <button>Delete</button>
//           <button>View</button>
//         </li>
//         <li>
//           <Link href={`/Courses/${params.cid}/Assignments/2`}>
//             Assignment 2
//           </Link>{" "}
//           <Link href={`/Courses/${params.cid}/Assignments/1`}>
//           <button>Edit</button>
//           </Link>
//           <button>Delete</button>
//           <button>View</button>
//         </li>
//         <li>
//           <Link href={`/Courses/${params.cid}/Assignments/3`}>
//             Assignment 3
//           </Link>{" "}
//           <Link href={`/Courses/${params.cid}/Assignments/1`}>
//           <button>Edit</button>
//           </Link>
//           <button>Delete</button>
//           <button>View</button>
//         </li>
//       </ul>

//       <h2>Quizzes</h2>
//       <p>Links to quizzes</p>

//       <h2>Exams</h2>
//       <p>Links to exams</p>

//       <h2>Project</h2>
//       <p>Project details</p>
//     </div>
//   );
// }

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