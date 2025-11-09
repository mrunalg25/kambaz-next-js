"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
  const pathname = usePathname();
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link 
        href="/Account/Signin" 
        className={`list-group-item border border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`}
      >
        Signin
      </Link>
      <Link 
        href="/Account/Signup" 
        className={`list-group-item border border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}
      >
        Signup
      </Link>
      <Link 
        href="/Account/Profile" 
        className={`list-group-item border border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}
      >
        Profile
      </Link>
    </div>
  );
}

// import Link from "next/link";

// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation" className="list-group">
//       <Link 
//         href="/Account/Signin" 
//         className="list-group-item list-group-item-action"
//       >
//         Signin
//       </Link>
//       <Link 
//         href="/Account/Signup" 
//         className="list-group-item list-group-item-action"
//       >
//         Signup
//       </Link>
//       <Link 
//         href="/Account/Profile" 
//         className="list-group-item list-group-item-action"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }

// import Link from "next/link"; 
// export default function AccountNavigation() { 
//  return ( 
//    <div id="wd-account-navigation"> 
//      <Link href="Signin"> Signin </Link> <br /> 
//      <Link href="Signup"> Signup </Link> <br /> 
//      <Link href="Profile"> Profile </Link> <br /> 
//    </div> 
// );} 