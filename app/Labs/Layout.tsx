"use client";
import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <TOC />
        </div>
        <div className="col-10">
          {children}
        </div>
      </div>
    </div>
  );
}


// "use client";
// import { ReactNode } from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import TOC from "./TOC";

// export default function LabsLayout({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   return (
//     <Provider store={store}>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-2">
//             <TOC />
//           </div>
//           <div className="col-10">
//             {children}
//           </div>
//         </div>
//       </div>
//     </Provider>
//   );
// }