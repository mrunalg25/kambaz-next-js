"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Courses/Home", icon: LiaBookSolid },
    { label: "Calendar", path: "/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup 
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" 
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
    >
      <ListGroupItem 
        className="bg-black border-0 text-center" 
        as="a"
        target="_blank" 
        href="https://www.northeastern.edu/" 
        id="wd-neu-link"
      >
        <img src="/neu.jpg" width="75px" alt="Northeastern University" />
      </ListGroupItem>
      <br />
      
      <ListGroupItem className={`border-0 text-center ${
        pathname.includes("Account") ? "bg-white" : "bg-black"
      }`}>
        <Link href="/Account" id="wd-account-link" className={`text-decoration-none ${
          pathname.includes("Account") ? "text-black" : "text-white"
        }`}>
          <FaRegCircleUser className={`fs-1 ${
            pathname.includes("Account") ? "text-black" : "text-white"
          }`} />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />
      
      {links.map((link) => (
        <ListGroupItem 
          key={link.path}
          className={`border-0 text-center ${
            pathname.includes(link.label) ? "bg-white" : "bg-black"
          }`}
        >
          <Link href={link.path} className={`text-decoration-none ${
            pathname.includes(link.label) ? "text-danger" : "text-white"
          }`}>
            {link.icon({ 
              className: `fs-1 ${
                pathname.includes(link.label) ? "text-danger" : "text-danger"
              }`
            })}
            <br />
            <span className={pathname.includes(link.label) ? "text-danger" : "text-white"}>
              {link.label}
            </span>
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

// "use client";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { ListGroup, ListGroupItem } from "react-bootstrap";
// import Link from "next/link";

// export default function KambazNavigation() {
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
//         <img src="/NEU.png" width="75px" alt="Northeastern University" />
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
//           <FaRegCircleUser className="fs-1 text-white" />
//           <br />
//           Account
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-white text-center">
//         <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
//           <AiOutlineDashboard className="fs-1 text-danger" />
//           <br />
//           Dashboard
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link href="/Courses/Home" id="wd-course-link" className="text-white text-decoration-none">
//           <LiaBookSolid className="fs-1 text-danger" />
//           <br />
//           Courses
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
//           <IoCalendarOutline className="fs-1 text-danger" />
//           <br />
//           Calendar
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
//           <FaInbox className="fs-1 text-danger" />
//           <br />
//           Inbox
//         </Link>
//       </ListGroupItem>
//       <br />
      
//       <ListGroupItem className="border-0 bg-black text-center">
//         <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
//           <LiaCogSolid className="fs-1 text-danger" />
//           <br />
//           Labs
//         </Link>
//       </ListGroupItem>
//     </ListGroup>
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


// import Link from "next/link";

// export default function KambazNavigation() {
//   return (
//     <div id="wd-kambaz-navigation">
//       <Link href="/Account">Account</Link><br/>
//       <Link href="/Dashboard">Dashboard</Link><br/>
//       <Link href="/Labs">Back to Labs</Link><br/>
//     </div>
//   );
// }

// import Link from "next/link"; 
// export default function KambazNavigation() { 
//   return ( 
//     <div id="wd-kambaz-navigation"> 
//       <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/> 
//       <Link href="/Account" id="wd-account-link">Account</Link><br/> 
//       <Link href="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/> 
//       <Link href="/Dashboard" id="wd-course-link">Courses</Link><br/> 
//       <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br/> 
//       <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br/> 
//       <Link href="/Labs" id="wd-labs-link">Labs</Link><br/> 
//     </div> 
// );} 

