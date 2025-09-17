import Link from "next/link";

export default function CourseNavigation({ courseId }: { courseId: string }) {
  const links = [
    { label: "Home", href: `/Courses/${courseId}/Home` },
    { label: "Modules", href: `/Courses/${courseId}/Modules` },
    { label: "Piazza", href: `/Courses/${courseId}/Piazza` },
    { label: "Zoom", href: `/Courses/${courseId}/Zoom` },
    { label: "Quizzes", href: `/Courses/${courseId}/Quizzes` },
    { label: "Assignments", href: `/Courses/${courseId}/Assignments` },
    { label: "Grades", href: `/Courses/${courseId}/Grades` },
  ];

  return (
    <aside
      style={{
        width: "200px",
        padding: "20px",
        backgroundColor: "#eee",
        height: "100vh",
      }}
    >
      <h3>Course Nav</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {links.map(({ label, href }) => (
          <li key={label} style={{ marginBottom: "10px" }}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}


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