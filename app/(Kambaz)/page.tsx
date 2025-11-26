import { redirect } from "next/navigation";

export default function KambazPage() {
  redirect("/Account/Signin");
}
// "use client";

// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import KambazNavigation from "./Navigation";
// import * as courseClient from "./Courses/client";
// import * as userClient from "./Account/client";
// import "./styles.css";

// export default function Kambaz() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [course, setCourse] = useState<any>({
//     _id: "0",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//   });
//   const [enrolling, setEnrolling] = useState<boolean>(false);

//   const findCoursesForUser = async () => {
//     if (!currentUser) return;
//     try {
//       const courses = await userClient.findCoursesForUser(currentUser._id);
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchCourses = async () => {
//     if (!currentUser) return;
//     try {
//       const allCourses = await courseClient.fetchAllCourses();
//       const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
      
//       const courses = allCourses.map((course: any) => {
//         if (enrolledCourses.find((c: any) => c._id === course._id)) {
//           return { ...course, enrolled: true };
//         } else {
//           return course;
//         }
//       });
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateEnrollment = async (courseId: string, enrolled: boolean) => {
//     if (!currentUser) return;
    
//     if (enrolled) {
//       await userClient.enrollIntoCourse(currentUser._id, courseId);
//     } else {
//       await userClient.unenrollFromCourse(currentUser._id, courseId);
//     }
    
//     setCourses(
//       courses.map((course) => {
//         if (course._id === courseId) {
//           return { ...course, enrolled: enrolled };
//         } else {
//           return course;
//         }
//       })
//     );
//   };

//   const addNewCourse = async () => {
//     const newCourse = await courseClient.createCourse(course);
//     setCourses([...courses, { ...newCourse, enrolled: true }]);
//   };

//   const deleteCourse = async (courseId: string) => {
//     await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

//   const updateCourse = async () => {
//     await courseClient.updateCourse(course);
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

//   useEffect(() => {
//     if (!currentUser) return;
    
//     if (enrolling) {
//       fetchCourses();
//     } else {
//       findCoursesForUser();
//     }
//   }, [currentUser, enrolling]);

//   return (
//     <div id="wd-kambaz">
//       {/* Content will be rendered by the layout and child pages */}
//     </div>
//   );
// }



// import Link from "next/link";
// import { redirect } from "next/navigation";
// import Session from "./Account/Session";

// export default function Kambaz() {
//   // redirect("/Dashboard");
//     return (
//       <Session>
//       <div id="wd-kambaz">
//         <h1>Kambaz</h1>
//         <p>Welcome to the Kambaz application.</p>

//         {/* Assignment requirement: link to Lab exercises */}
//         <p>
//           <Link href="/Labs">Go to Lab Exercises</Link>
//         </p>

//         {/* Optional: still keep navigation inside Kambaz */}
//         <nav>
//           <ul>
//             <li><Link href="/Account/Signin">Account</Link></li>
//             <li><Link href="/Dashboard">Dashboard</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </Session>
//   );
// }

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