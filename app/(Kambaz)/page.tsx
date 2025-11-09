import Link from "next/link";
import { redirect } from "next/navigation";
import Session from "./Account/Session";

export default function Kambaz() {
  // redirect("/Dashboard");
    return (
      <Session>
      <div id="wd-kambaz">
        <h1>Kambaz</h1>
        <p>Welcome to the Kambaz application.</p>

        {/* Assignment requirement: link to Lab exercises */}
        <p>
          <Link href="/Labs">Go to Lab Exercises</Link>
        </p>

        {/* Optional: still keep navigation inside Kambaz */}
        <nav>
          <ul>
            <li><Link href="/Account/Signin">Account</Link></li>
            <li><Link href="/Dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </Session>
  );
}

// "use client";
// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";
// import { usePathname } from "next/navigation";
// import "./styles.css";
// import { useState } from "react";
// import * as db from "./Database";

// export default function Kambaz({
//   children,
// }: Readonly<{
//   children: ReactNode;
// }>) {
//   const [courses, setCourses] = useState<any[]>(db.courses);
//   const [course, setCourse] = useState<any>({
//     _id: "0",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//   });

//   const addNewCourse = () => {
//     const newCourse = {
//       ...course,
//       _id: new Date().getTime().toString(),
//     };
//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = (courseId: string) => {
//     setCourses(courses.filter((c) => c._id !== courseId));
//   };

//   const updateCourse = () => {
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   return (
//     <div id="wd-kambaz">
//       <div className="d-flex">
//         <div>
//           <KambazNavigation />
//         </div>
//         <div className="wd-main-content-offset p-3 flex-fill">
//           {/* Pass state and functions to children via props or context */}
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function Kambaz() {
//   return (
//     <div id="wd-kambaz">
//       <h1>Kambaz</h1>
//       <p>Welcome to the Kambaz application.</p>

//       {/* Assignment requirement: link to Lab exercises */}
//       <p>
//         <Link href="/Labs">Go to Lab Exercises</Link>
//       </p>

//       {/* Optional: still keep navigation inside Kambaz */}
//       <nav>
//         <ul>
//           <li><Link href="/Account/Signin">Account</Link></li>
//           <li><Link href="/Dashboard">Dashboard</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// import { redirect } from "next/navigation"; 
// export default function Kambaz() { 
//     // return ( 
//     // <div id="wd-kambaz"> 
//     // <h1>Kambaz</h1> 
//     // </div> 
//     redirect("/Account/Signin"); 
//     // )
//     ;} 