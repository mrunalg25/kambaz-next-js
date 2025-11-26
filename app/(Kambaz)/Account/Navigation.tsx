"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const pathname = usePathname();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  // Build links array based on login status
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
  // Add Users link for ADMIN only
  if (currentUser && currentUser.role === "ADMIN") {
    links.push("Users");
  }
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link}
          href={`/Account/${link}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link) ? "active" : "text-danger"
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function AccountNavigation() {
//   const pathname = usePathname();
  
//   return (
//     <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
//       <Link 
//         href="/Account/Signin" 
//         className={`list-group-item border border-0 ${pathname.includes("Signin") ? "active" : "text-danger"}`}
//       >
//         Signin
//       </Link>
//       <Link 
//         href="/Account/Signup" 
//         className={`list-group-item border border-0 ${pathname.includes("Signup") ? "active" : "text-danger"}`}
//       >
//         Signup
//       </Link>
//       <Link 
//         href="/Account/Profile" 
//         className={`list-group-item border border-0 ${pathname.includes("Profile") ? "active" : "text-danger"}`}
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }

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