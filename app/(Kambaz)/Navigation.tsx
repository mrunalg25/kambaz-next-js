"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const pathname = usePathname();
  
  const links = [
    { label: "Account", path: "/Account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div 
      id="wd-kambaz-navigation" 
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
      style={{ width: 120 }}
    >
      <Link
        href="https://www.northeastern.edu/"
        target="_blank"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/neu.jpg" width="75px" alt="Northeastern" />
      </Link>

      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname.includes(link.label);
        
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`list-group-item text-center border-0 ${
              isActive ? "bg-white text-danger" : "bg-black text-white"
            }`}
          >
            <Icon className={`fs-1 ${isActive ? "text-danger" : "text-white"}`} />
            <br />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}

// "use client";

// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function KambazNavigation() {
//   const pathname = usePathname();

//   const links = [
//     { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
//     { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
//     { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
//     { label: "Inbox", path: "/Inbox", icon: FaInbox },
//     { label: "Labs", path: "/Labs", icon: LiaCogSolid },
//   ];

//   return (
//     <ListGroup
//       id="wd-kambaz-navigation"
//       style={{ width: 120 }}
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//     >
//       <ListGroupItem
//         as="a"
//         target="_blank"
//         href="https://www.northeastern.edu/"
//         className="bg-black border-0 text-center"
//       >
//         <img src="/neu.jpg" width="75px" alt="NEU" />
//       </ListGroupItem>

//       <ListGroupItem
//         as={Link}
//         href="/Account"
//         className={`text-center border-0 ${
//           pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"
//         }`}
//       >
//         <FaRegCircleUser
//           className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`}
//         />
//         <br />
//         Account
//       </ListGroupItem>

//       {links.map((link) => (
//         <ListGroupItem
//           key={link.path}
//           as={Link}
//           href={link.path}
//           className={`bg-black text-center border-0 ${
//             pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"
//           }`}
//         >
//           {link.icon({ className: "fs-1 text-danger" })}
//           <br />
//           {link.label}
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }

// "use client";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function KambazNavigation() {
//   const pathname = usePathname();
  
//   const links = [
//     { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
//     { label: "Courses", path: "/Courses/1234/Home", icon: LiaBookSolid },
//     { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
//     { label: "Inbox", path: "/Inbox", icon: FaInbox },
//     { label: "Labs", path: "/Labs", icon: LiaCogSolid },
//   ];

//   return (
//     <ListGroup 
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" 
//       style={{ width: 120 }}
//       id="wd-kambaz-navigation"
//     >
//       <ListGroupItem 
//         className="bg-black border-0 text-center" 
//         as="a"
//         target="_blank" 
//         href="https://www.northeastern.edu/" 
//         id="wd-neu-link"
//       >
//         <img src="/neu.jpg" width="75px" alt="Northeastern University" />
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className={`border-0 text-center ${
//         pathname.includes("Account") ? "bg-white" : "bg-black"
//       }`}>
//         <Link href="/Account" id="wd-account-link" className={`text-decoration-none ${
//           pathname.includes("Account") ? "text-black" : "text-white"
//         }`}>
//           <FaRegCircleUser className={`fs-1 ${
//             pathname.includes("Account") ? "text-black" : "text-white"
//           }`} />
//           <br />
//           Account
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       {links.map((link) => (
//         <ListGroupItem 
//           key={link.label}
//           className={`border-0 text-center ${
//             pathname.includes(link.label) ? "bg-white" : "bg-black"
//           }`}
//         >
//           <Link href={link.path} className="text-decoration-none">
//             {link.icon({ 
//               className: `fs-1 text-danger`
//             })}
//             <br />
//             <span className={pathname.includes(link.label) ? "text-danger" : "text-white"}>
//               {link.label}
//             </span>
//           </Link>
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
