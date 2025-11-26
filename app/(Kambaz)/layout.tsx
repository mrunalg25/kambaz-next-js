"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Session from "./Account/Session";
import KambazNavigation from "./Navigation";
import { CourseProvider } from "./context";
import store from "./store";
import "./styles.css";

export default function KambazLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider store={store}>
      <Session>
        <CourseProvider>
          <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
              {children}
            </div>
          </div>
        </CourseProvider>
      </Session>
    </Provider>
  );
}

// "use client";
// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";
// import { Provider } from "react-redux";
// import store from "./store";
// import Session from "./Account/Session";
// import "./styles.css";

// export default function KambazLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <Provider store={store}>
//       <Session>
//         <div id="wd-kambaz">
//           <div className="d-flex">
//             <div>
//               <KambazNavigation />
//             </div>
//             <div className="wd-main-content-offset p-3 flex-fill">
//               {children}
//             </div>
//           </div>
//         </div>
//       </Session>
//     </Provider>
//   );
// }

// "use client";
// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";
// import { CourseProvider } from "./context";
// import { Provider } from "react-redux";
// import store from "./store";
// import "./styles.css";

// export default function KambazLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <Provider store={store}>
//       <CourseProvider>
//         <div id="wd-kambaz">
//           <div className="d-flex">
//             <div>
//               <KambazNavigation />
//             </div>
//             <div className="wd-main-content-offset p-3 flex-fill">
//               {children}
//             </div>
//           </div>
//         </div>
//       </CourseProvider>
//     </Provider>
//   );
// }

// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";
// import { CourseProvider } from "./context";
// import "./styles.css";

// export default function KambazLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <CourseProvider>
//       <div id="wd-kambaz">
//         <div className="d-flex">
//           <div>
//             <KambazNavigation />
//           </div>
//           <div className="wd-main-content-offset p-3 flex-fill">
//             {children}
//           </div>
//         </div>
//       </div>
//     </CourseProvider>
//   );
// }




// import { ReactNode } from "react";
// import KambazNavigation from "./Navigation";
// import "./styles.css";

// export default function KambazLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <div id="wd-kambaz">
//       <div className="d-flex">
//         <div>
//           <KambazNavigation />
//         </div>
//         <div className="wd-main-content-offset p-3 flex-fill">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// import KambazSidebar from "./Sidebar";

// export default function KambazLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{ display: "flex" }}>
//       <KambazSidebar />
//       <main style={{ flex: 1, padding: "20px" }}>{children}</main>
//     </div>
//   );
// }


// import { ReactNode } from "react"; 
// import KambazNavigation from "./Navigation"; 
// export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) { 
//  return ( 
//    <table> 
//      <tbody> 
//        <tr> 
//          <td valign="top" width="200">  <KambazNavigation /> </td> 
//          <td valign="top" width="100%"> {children}           </td> 
//        </tr> 
//      </tbody> 
//    </table> 
// );} 