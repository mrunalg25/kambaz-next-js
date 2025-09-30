import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        Course 1234
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}

// import { ReactNode } from "react";
// import CourseNavigation from "./Navigation";

// interface CourseLayoutProps {
//   children: ReactNode;
//   params: Promise<{ cid: string }>; // Next.js expects a Promise-wrapped param
// }

// export default async function CourseLayout({
//   children,
//   params,
// }: CourseLayoutProps) {
//   const resolvedParams = await params; // unwrap the Promise
//   const { cid } = resolvedParams;

//   return (
//     <div style={{ display: "flex" }}>
//       <CourseNavigation cid={cid} />
//       <main style={{ flex: 1, padding: "20px" }}>{children}</main>
//     </div>
//   );
// }


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