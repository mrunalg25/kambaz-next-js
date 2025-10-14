import { redirect } from "next/navigation";

export default async function CoursesPage({ 
  params 
}: { 
  params: Promise<{ cid: string }> 
}) {
  const { cid } = await params;
  redirect(`/Courses/${cid}/Home`);
}



// "use client";

// import CourseStatus from "../Home/Status";
// import Modules from "./Modules/page";


// export default function Home() {
//   return (
//     <div className="d-flex" id="wd-home">
//       <div className="flex-fill me-3">
//         <Modules />
//       </div>
//       <div className="d-none d-xl-block">
//         <CourseStatus />
//       </div>
//     </div>
//   );
// }

// export default function CoursePage({ params }: { params: { cid: string } }) {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Course: {params.cid}</h1>
//       <p>This is the course home page.</p>
//     </div>
//   );
// }

// import { redirect } from "next/navigation"; 
 
// export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) { 
//  const { cid } = await params; 
//  redirect(`/Courses/${cid}/Home`); 
// } 