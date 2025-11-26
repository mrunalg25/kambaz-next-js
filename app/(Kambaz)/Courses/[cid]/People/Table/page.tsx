"use client";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import PeopleDetails from "../Details";

export default function PeopleTable({ 
  users = [],
  onDelete,
  onUpdate 
}: { 
  users?: any[];
  onDelete?: (userId: string) => void;
  onUpdate?: (user: any) => void;
}) {
  return (
    <div id="wd-people-table">
      <PeopleDetails />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  href={`/Account/Users/${user._id}`}
                  className="text-decoration-none text-dark"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// "use client";
// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// import { useParams } from "next/navigation";
// import * as db from "../../../../Database";

// export default function PeopleTable() {
//   const { cid } = useParams();
//   const { users, enrollments } = db;
  
//   return (
//     <div id="wd-people-table">
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users
//             .filter((user: any) =>
//               enrollments.some((enrollment: any) => 
//                 enrollment.user === user._id && enrollment.course === cid
//               )
//             )
//             .map((user: any) => (
//               <tr key={user._id}>
//                 <td className="wd-full-name text-nowrap">
//                   <FaUserCircle className="me-2 fs-1 text-secondary" />
//                   <span className="wd-first-name">{user.firstName}</span>{" "}
//                   <span className="wd-last-name">{user.lastName}</span>
//                 </td>
//                 <td className="wd-login-id">{user.loginId}</td>
//                 <td className="wd-section">{user.section}</td>
//                 <td className="wd-role">{user.role}</td>
//                 <td className="wd-last-activity">{user.lastActivity}</td>
//                 <td className="wd-total-activity">{user.totalActivity}</td>
//               </tr>
//             ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }


// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";

// export default function PeopleTable() {
//   return (
//     <div id="wd-people-table">
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Tony</span>{" "}
//               <span className="wd-last-name">Stark</span>
//             </td>
//             <td className="wd-login-id">001234561S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01</td>
//             <td className="wd-total-activity">10:21:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Bruce</span>{" "}
//               <span className="wd-last-name">Wayne</span>
//             </td>
//             <td className="wd-login-id">001234562S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-02</td>
//             <td className="wd-total-activity">8:15:20</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Steve</span>{" "}
//               <span className="wd-last-name">Rogers</span>
//             </td>
//             <td className="wd-login-id">001234563S</td>
//             <td className="wd-section">S102</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-03</td>
//             <td className="wd-total-activity">12:30:45</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Natasha</span>{" "}
//               <span className="wd-last-name">Romanoff</span>
//             </td>
//             <td className="wd-login-id">001234564S</td>
//             <td className="wd-section">S102</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-04</td>
//             <td className="wd-total-activity">9:45:12</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }