import Link from "next/link";

export default function Dashboard() {
  const courses = [
    { id: "cs123", title: "CS1234 React JS" },
    { id: "cs455", title: "CS4550 Web Development" },
    { id: "cs501", title: "CS5010 Programming Design Paradigms" },
    { id: "cs561", title: "CS5610 Full Stack Development" },
    { id: "cs580", title: "CS5800 Algorithms" },
    { id: "cs620", title: "CS6200 Information Retrieval" },
    { id: "cs651", title: "CS6510 Advanced Database Systems" },
  ];

  return (
    <div id="wd-dashboard" style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <h2>Published Courses</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#fafafa",
            }}
          >
            <h3>{course.title}</h3>
            <Link href={`/Courses/${course.id}`}>Go to Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// import Link from "next/link"; 
// import Image from "next/image"; 
// export default function Dashboard() { 
//   return ( 
//     <div id="wd-dashboard"> 
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 
//       <div id="wd-dashboard-courses"> 
//         <div className="wd-dashboard-course"> 
//           <Link href="/Courses/1234" className="wd-dashboard-course-link"> 
//             <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
//             <div> 
//               <h5> CS1234 React JS </h5> 
//               <p className="wd-dashboard-course-title"> 
//                 Full Stack software developer{" "} 
//               </p> 
//               <button> Go </button> 
//             </div> 
//           </Link> 
//         </div> 
//         <div className="wd-dashboard-course">
//             <Link href="/Courses/5678" className="wd-dashboard-course-link"> 
//                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
//                 <div> 
//                 <h5> CS5678 PDP </h5> 
//                 <p className="wd-dashboard-course-title"> 
//                     Backend Developer{" "} 
//                 </p> 
//                 <button> Go </button> 
//                 </div> 
//             </Link> 
//         </div> 
//         <div className="wd-dashboard-course">
//             <Link href="/Courses/9012" className="wd-dashboard-course-link"> 
//                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
//                 <div> 
//                 <h5> CS9012 WebD </h5> 
//                 <p className="wd-dashboard-course-title"> 
//                     Front end developer{" "} 
//                 </p> 
//                 <button> Go </button> 
//                 </div> 
//             </Link>
//         </div> 
//       </div> 
//     </div> 
// );} 