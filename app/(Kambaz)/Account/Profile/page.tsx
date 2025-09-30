"use client";
import Link from "next/link";
import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <h1>Profile</h1>
      <Form.Control 
        defaultValue="alice" 
        placeholder="username" 
        className="mb-2"
        id="wd-username"
      />
      <Form.Control 
        defaultValue="123" 
        placeholder="password" 
        type="password"
        className="mb-2"
        id="wd-password"
      />
      <Form.Control 
        defaultValue="Alice" 
        placeholder="First Name" 
        className="mb-2"
        id="wd-firstname"
      />
      <Form.Control 
        defaultValue="Wonderland" 
        placeholder="Last Name" 
        className="mb-2"
        id="wd-lastname"
      />
      <Form.Control 
        defaultValue="2000-01-01" 
        type="date" 
        className="mb-2"
        id="wd-dob"
      />
      <Form.Control 
        defaultValue="alice@wonderland" 
        type="email" 
        className="mb-2"
        id="wd-email"
      />
      <Form.Select 
        defaultValue="FACULTY" 
        className="mb-2"
        id="wd-role"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link 
        href="/Account/Signin" 
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}


// import Link from "next/link"; 
// export default function Profile() { 
//   return ( 
//     <div id="wd-profile-screen"> 
//       <h3>Profile</h3> 
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/> 
//       <input defaultValue="123"   placeholder="password" type="password" 
//              className="wd-password" /><br/> 
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/> 
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/> 
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/> 
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/> 
//       <select defaultValue="FACULTY" id="wd-role"> 
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option> 
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option> 
//       </select><br/> 
//       <Link href="Signin" > Sign out </Link> 
//     </div> 
// );} 