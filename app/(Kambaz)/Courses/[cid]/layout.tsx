import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

interface Props {
  children: ReactNode;
  params: { cid: string }; // type the params directly
}

export default function CourseLayout({ children, params }: Props) {
  return (
    <div style={{ display: "flex" }}>
      <CourseNavigation cid={params.cid} />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}



// import CourseNavigation from "./Navigation";

// export default function CourseLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   // remove this line: params: { cid: string };
// }: any) {
//   return (
//     <div style={{ display: "flex" }}>
//       <CourseNavigation cid={params.cid} />
//       <main style={{ flex: 1, padding: "20px" }}>{children}</main>
//     </div>
//   );
// }


// export default function CourseLayout({
//   children,
//   params,
// }: {
//   children: React.ReactNode;
//   params: { cid: string };
// }) {
//   return (
//     <div style={{ display: "flex" }}>
//       <CourseNavigation cid={params.cid} />
//       <main style={{ flex: 1, padding: "20px" }}>{children}</main>
//     </div>
//   );
// }


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