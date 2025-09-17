import CourseStatus from "./Status";

export default function CourseHome({ params }: { params: { cid: string } }) {
  const modules = [
    {
      id: 1,
      title: "Module 1: HTML & CSS",
      lessons: ["Lesson 1: Intro to HTML", "Lesson 2: Styling with CSS"],
    },
    {
      id: 2,
      title: "Module 2: JavaScript Basics",
      lessons: ["Lesson 1: Variables & Data Types", "Lesson 2: Functions"],
    },
  ];

  return (
    // <div>
    //   <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
    //     <button>Import</button>
    //     <button>Settings</button>
    //     <button>View Grades</button>
    //   </div>

    //   <div style={{ display: "flex", gap: "20px" }}>
    //     {/* Course Status sidebar */}
    //     <aside
    //       style={{
    //         width: "250px",
    //         border: "1px solid #ccc",
    //         padding: "15px",
    //         borderRadius: "6px",
    //         background: "#f9f9f9",
    //       }}
    //     >
    //       <h3>Course Status</h3>
    //       <button style={{ display: "block", marginBottom: "10px" }}>
    //         Publish
    //       </button>
    //       <button style={{ display: "block", marginBottom: "10px" }}>
    //         Unpublish
    //       </button>
    //       <button style={{ display: "block", marginBottom: "10px" }}>
    //         View Analytics
    //       </button>
    //       <button style={{ display: "block", marginBottom: "10px" }}>
    //         View Course Stream
    //       </button>
    //     </aside>

    //     {/* Modules section */}
    //     <main style={{ flex: 1 }}>
    //       <h2>Modules</h2>
    //       {modules.map((module) => (
    //         <details key={module.id} style={{ marginBottom: "15px" }}>
    //           <summary style={{ fontWeight: "bold", cursor: "pointer" }}>
    //             {module.title}
    //           </summary>
    //           <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
    //             {module.lessons.map((lesson, idx) => (
    //               <li key={idx}>{lesson}</li>
    //             ))}
    //           </ul>
    //         </details>
    //       ))}
    //     </main>
    //   </div>
    // </div>
     <div style={{ display: "flex", gap: "20px" }}>
      {/* Main content (buttons + modules) */}
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button>Collapse All</button>
          <button>View Progress</button>
          <button>Publish All</button>
          <button>+ Module</button>
        </div>

        {/* Example modules */}
        <ul>
          <li>
            Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
            <ul>
              <li>
                <strong>LEARNING OBJECTIVES</strong>
                <ul>
                  <li>Introduction to the course</li>
                  <li>Learn what is Web Development</li>
                </ul>
              </li>
              <li>
                <strong>READING</strong>
                <ul>
                  <li>Full Stack Developer - Chapter 1 - Introduction</li>
                  <li>Full Stack Developer - Chapter 2 - Creating User</li>
                </ul>
              </li>
              <li>
                <strong>SLIDES</strong>
                <ul>
                  <li>Introduction to Web Development</li>
                  <li>Creating an HTTP server with Node.js</li>
                  <li>Creating a React Application</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Week 1, Lecture 2 - Formatting User Interfaces with HTML</li>
        </ul>
      </div>

      {/* Course Status sidebar */}
      <CourseStatus />
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
//            <td valign="top" width="70%"> <Modules params={{
//              courseId: ""
//            }} /> </td> 
//            <td valign="top"> <CourseStatus /> </td> 
//          </tr> 
//        </tbody> 
//      </table> 
//    </div> 
// );} 