"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function KambazNavigation() {
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
      
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
          <FaRegCircleUser className="fs-1 text-white" />
          <br />
          Account
        </Link>
      </ListGroupItem>
      <br />
      
      <ListGroupItem className="border-0 bg-white text-center">
        <Link href="/Dashboard" id="wd-dashboard-link" className="text-danger text-decoration-none">
          <AiOutlineDashboard className="fs-1 text-danger" />
          <br />
          Dashboard
        </Link>
      </ListGroupItem>
      <br />
      
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Courses/Home" id="wd-course-link" className="text-white text-decoration-none">
          <LiaBookSolid className="fs-1 text-danger" />
          <br />
          Courses
        </Link>
      </ListGroupItem>
      <br />
      
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Calendar" id="wd-calendar-link" className="text-white text-decoration-none">
          <IoCalendarOutline className="fs-1 text-danger" />
          <br />
          Calendar
        </Link>
      </ListGroupItem>
      <br />
      
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Inbox" id="wd-inbox-link" className="text-white text-decoration-none">
          <FaInbox className="fs-1 text-danger" />
          <br />
          Inbox
        </Link>
      </ListGroupItem>
      <br />
      
      <ListGroupItem className="border-0 bg-black text-center">
        <Link href="/Labs" id="wd-labs-link" className="text-white text-decoration-none">
          <LiaCogSolid className="fs-1 text-danger" />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}

// import Link from "next/link";

// export default function KambazSidebar() {
//   return (
//     <aside
//       style={{
//         width: "220px",
//         padding: "20px",
//         backgroundColor: "#f4f4f4",
//         height: "100vh",
//         boxSizing: "border-box",
//       }}
//     >
//       <h3 style={{ marginBottom: "15px" }}>Kambaz</h3>
//       <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//         <li style={{ marginBottom: "12px" }}>
//           <a href="https://www.northeastern.edu" target="_blank" rel="noopener noreferrer">
//             NEU
//           </a>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Account">Account</Link>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Dashboard">Dashboard</Link>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Courses/Home">Courses</Link>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Calendar">Calendar</Link>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Inbox">Inbox</Link>
//         </li>
//         <li style={{ marginBottom: "12px" }}>
//           <Link href="/Labs">Labs</Link>
//         </li>
//       </ul>
//     </aside>
//   );
// }
