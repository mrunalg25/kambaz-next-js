"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br /><br />
      
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

// export default function Modules({ params }: { params: { cid: string } }) {
//   const modules = [
//     {
//       id: 1,
//       title: "Module 1: Introduction to Web Development",
//       lessons: [
//         "Lesson 1: What is Web Development?",
//         "Lesson 2: Setting up the Environment",
//         "Lesson 3: HTML Basics",
//       ],
//     },
//     {
//       id: 2,
//       title: "Module 2: React and Next.js",
//       lessons: [
//         "Lesson 1: Introduction to React",
//         "Lesson 2: Components and Props",
//         "Lesson 3: Next.js Pages and Routing",
//       ],
//     },
//     {
//       id: 3,
//       title: "Module 3: State Management",
//       lessons: [
//         "Lesson 1: useState Hook",
//         "Lesson 2: useEffect Hook",
//         "Lesson 3: Context API Basics",
//       ],
//     }
//   ];

//     return (
//       <div>
//         <h1>Course {params.cid} - Modules</h1>

//         {modules.map((module) => (
//           <details key={module.id} style={{ marginBottom: "20px" }}>
//             <summary style={{ fontSize: "18px", fontWeight: "bold", cursor: "pointer" }}>
//               {module.title}
//             </summary>
//             <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
//               {module.lessons.map((lesson, idx) => (
//                 <li key={idx}>{lesson}</li>
//               ))}
//             </ul>
//           </details>
//         ))}
//       </div>
//   );
// }


// export default function Modules() { 
//     return ( 
//       <div> 
//         {/* Implement Collapse All button, View Progress button, etc. */} 
//         <ul id="wd-modules"> 
//           <li className="wd-module"> 
//             <div className="wd-title">Week 1</div> 
//             <ul className="wd-lessons"> 
//               <li className="wd-lesson"> 
//                 <span className="wd-title">LEARNING OBJECTIVES</span> 
//                 <ul className="wd-content"> 
//                   <li className="wd-content-item">Introduction to the course</li> 
//                   <li className="wd-content-item">Learn what is Web Development</li> 
//                 </ul> 
//               </li> 
//             </ul> 
//           </li> 
//           <li className="wd-module"> 
//             <div className="wd-title">Week 2</div> 
//           </li> 
//           <li className="wd-module"> 
//             <div className="wd-title">Week 3</div> 
//           </li> 
//         </ul> 
//       </div> 
//   );} 