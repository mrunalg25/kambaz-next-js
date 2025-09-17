import CourseNavigation from "./Navigation";

export default function CourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) {
  return (
    <div style={{ display: "flex" }}>
      <CourseNavigation courseId={params.courseId} />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}


// import { ReactNode } from "react"; 
// import CourseNavigation from "./Navigation"; 
// export default async function CoursesLayout( 
//   { children, params }: Readonly<{ children: ReactNode; params: Promise<{ id: string }> }>) { 
//  const  cid: any  = await params; 
//  return ( 
//    <div id="wd-courses"> 
//      <h2>Courses {cid}</h2> 
//      <hr /> 
//      <table> ss
//        <tbody> 
//          <tr> 
//            <td valign="top" width="200"> <CourseNavigation /> </td> 
//            <td valign="top" width="100%"> {children} </td> 
//          </tr> 
//        </tbody> 
//      </table> 
//    </div> 
// );} 