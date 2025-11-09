import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ 
  children 
}: Readonly<{ 
  children: ReactNode 
}>) {
  return (
    <div id="wd-account">
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <AccountNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// import { ReactNode } from "react";
// import AccountNavigation from "./Navigation";

// export default function AccountLayout({ 
//   children 
// }: Readonly<{ 
//   children: ReactNode 
// }>) {
//   return (
//     <div id="wd-kambaz">
//       <div className="d-flex">
//         <div style={{ width: "200px" }} className="me-3">
//           <AccountNavigation />
//         </div>
//         <div className="flex-fill">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// import Link from "next/link";

// export default function AccountLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div style={{ display: "flex" }}>
//       {/* Sidebar on the left */}
//       <aside style={{ width: "200px", padding: "20px", backgroundColor: "#f4f4f4" }}>
//         <h3>Account</h3>
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           <li><Link href="/Account/Signin">Signin</Link></li>
//           <li><Link href="/Account/Signup">Signup</Link></li>
//           <li><Link href="/Account/Profile">Profile</Link></li>
//         </ul>
//       </aside>

//       {/* Main content on the right */}
//       <main style={{ flex: 1, padding: "20px" }}>
//         {children}
//       </main>
//     </div>
//   );
// }

// import { ReactNode } from "react"; 
// import AccountNavigation from "./Navigation"; 
// export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) { 
// return ( 
//     <div id="wd-kambaz"> 
//         <table> 
//             <tbody> 
//             <tr> 
//                 <td valign="top"> 
//                     <AccountNavigation /> 
//                 </td> 
//                 <td valign="top" width="100%"> 
//                     {children} 
//                 </td> 
//             </tr> 
//             </tbody> 
//         </table> 
//     </div> 
// );} 