"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Home", path: "/Courses/1234/Home" },
    { label: "Modules", path: "/Courses/1234/Modules" },
    { label: "Piazza", path: "/Courses/1234/Piazza" },
    { label: "Zoom", path: "/Courses/1234/Zoom" },
    { label: "Assignments", path: "/Courses/1234/Assignments" },
    { label: "Quizzes", path: "/Courses/1234/Quizzes" },
    { label: "Grades", path: "/Courses/1234/Grades" },
    { label: "People", path: "/Courses/1234/People/Table" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link.path}
          href={link.path}
          className={`list-group-item border-0 text-decoration-none ${
            pathname.includes(link.label) ? "active bg-white text-black" : "text-danger bg-white"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

// import Link from "next/link";

// export default function CourseNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link 
//         href="/Courses/1234/Home" 
//         id="wd-course-home-link"
//         className="list-group-item active border-0"
//       >
//         Home
//       </Link>
//       <Link 
//         href="/Courses/1234/Modules" 
//         id="wd-course-modules-link"
//         className="list-group-item text-danger border-0"
//       >
//         Modules
//       </Link>
//       <Link 
//         href="/Courses/1234/Piazza" 
//         id="wd-course-piazza-link"
//         className="list-group-item text-danger border-0"
//       >
//         Piazza
//       </Link>
//       <Link 
//         href="/Courses/1234/Zoom" 
//         id="wd-course-zoom-link"
//         className="list-group-item text-danger border-0"
//       >
//         Zoom
//       </Link>
//       <Link 
//         href="/Courses/1234/Assignments" 
//         id="wd-course-assignments-link"
//         className="list-group-item text-danger border-0"
//       >
//         Assignments
//       </Link>
//       <Link 
//         href="/Courses/1234/Quizzes" 
//         id="wd-course-quizzes-link"
//         className="list-group-item text-danger border-0"
//       >
//         Quizzes
//       </Link>
//       <Link 
//         href="/Courses/1234/Grades" 
//         id="wd-course-grades-link"
//         className="list-group-item text-danger border-0"
//       >
//         Grades
//       </Link>
//       <Link 
//         href="/Courses/1234/People/Table" 
//         id="wd-course-people-link"
//         className="list-group-item text-danger border-0"
//       >
//         People
//       </Link>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function CourseNavigation({ cid }: { cid: string }) {
//   const links = [
//     { label: "Home", href: `/Courses/${cid}/Home` },
//     { label: "Modules", href: `/Courses/${cid}/Modules` },
//     { label: "Piazza", href: `/Courses/${cid}/Piazza` },
//     { label: "Zoom", href: `/Courses/${cid}/Zoom` },
//     { label: "Quizzes", href: `/Courses/${cid}/Quizzes` },
//     { label: "Assignments", href: `/Courses/${cid}/Assignments` },
//     { label: "Grades", href: `/Courses/${cid}/Grades` },
//   ];

//   return (
//     <aside
//       style={{
//         width: "200px",
//         padding: "20px",
//         backgroundColor: "#eee",
//         height: "100vh",
//       }}
//     >
//       <h3>Course Nav</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {links.map(({ label, href }) => (
//           <li key={label} style={{ marginBottom: "10px" }}>
//             <Link href={href}>{label}</Link>
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }


// import Link from "next/link"; 
// export default function CourseNavigation() { 
//     return ( 
//       <div id="wd-courses-navigation"> 
//         <Link href="/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/> 
//         <Link href="/Courses/1234/Modules" id="wd-course-modules-link">Modules 
//           </Link><br/> 
//         <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/> 
//         <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/> 
//         <Link href="/Courses/1234/Assignments" id="wd-course-quizzes-link"> 
//             Assignments</Link><br/> 
//         <Link href="/Courses/1234/Quizzes" id="wd-course-assignments-link">Quizzes 
//           </Link><br/> 
//         <Link href="/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/> 
//         <Link href="/Courses/1234/People/Table" id="wd-course-people-link">People</Link><br/> 
//       </div> 
//     );} 