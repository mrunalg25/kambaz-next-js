"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import Link from "next/link";

export default function Signup() {
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "STUDENT",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control mb-2"
        placeholder="username"
        id="wd-username"
      />

      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="form-control mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />

      <input
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="form-control mb-2"
        placeholder="First Name"
        id="wd-firstname"
      />

      <input
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="form-control mb-2"
        placeholder="Last Name"
        id="wd-lastname"
      />

      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="form-control mb-2"
        placeholder="email"
        type="email"
        id="wd-email"
      />

      <input
        value={user.dob}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
        className="form-control mb-2"
        type="date"
        id="wd-dob"
      />

      <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        className="form-control mb-2"
        id="wd-role"
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="USER">User</option>
      </select>

      <button onClick={signup} className="btn btn-primary w-100 mb-2">
        Sign up
      </button>

      <Link href="/Account/Signin">Sign in</Link>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import * as client from "../client";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "../reducer";
// import Link from "next/link";

// export default function Signup() {
//   const [user, setUser] = useState<any>({});
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const signup = async () => {
//     try {
//       const currentUser = await client.signup(user);
//       dispatch(setCurrentUser(currentUser));
//       router.push("/Account/Profile");
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div id="wd-signup-screen">
//       <h1>Sign up</h1>
      
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       <input
//         value={user.username}
//         onChange={(e) => setUser({ ...user, username: e.target.value })}
//         className="form-control mb-2"
//         placeholder="username"
//       />
      
//       <input
//         value={user.password}
//         onChange={(e) => setUser({ ...user, password: e.target.value })}
//         className="form-control mb-2"
//         placeholder="password"
//         type="password"
//       />
      
//       <input
//         value={user.firstName}
//         onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//         className="form-control mb-2"
//         placeholder="First Name"
//       />
      
//       <input
//         value={user.lastName}
//         onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//         className="form-control mb-2"
//         placeholder="Last Name"
//       />
      
//       <input
//         value={user.email}
//         onChange={(e) => setUser({ ...user, email: e.target.value })}
//         className="form-control mb-2"
//         placeholder="email"
//         type="email"
//       />
      
//       <input
//         value={user.dob}
//         onChange={(e) => setUser({ ...user, dob: e.target.value })}
//         className="form-control mb-2"
//         type="date"
//       />
      
//       <select
//         value={user.role}
//         onChange={(e) => setUser({ ...user, role: e.target.value })}
//         className="form-control mb-2"
//       >
//         <option value="">Select Role</option>
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select>
      
//       <button
//         onClick={signup}
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign up
//       </button>
      
//       <Link href="/Account/Signin">Sign in</Link>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import * as client from "../client";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "../reducer";
// import Link from "next/link";

// export default function Signup() {
//   const [user, setUser] = useState<any>({});
//   const [error, setError] = useState("");
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const signup = async () => {
//     try {
//       const currentUser = await client.signup(user);
//       dispatch(setCurrentUser(currentUser));
//       router.push("/Account/Profile");
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div id="wd-signup-screen">
//       <h1>Sign up</h1>
      
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       <input
//         value={user.username}
//         onChange={(e) => setUser({ ...user, username: e.target.value })}
//         className="form-control mb-2"
//         placeholder="username"
//       />
      
//       <input
//         value={user.password}
//         onChange={(e) => setUser({ ...user, password: e.target.value })}
//         className="form-control mb-2"
//         placeholder="password"
//         type="password"
//       />
      
//       <input
//         value={user.firstName}
//         onChange={(e) => setUser({ ...user, firstName: e.target.value })}
//         className="form-control mb-2"
//         placeholder="First Name"
//       />
      
//       <input
//         value={user.lastName}
//         onChange={(e) => setUser({ ...user, lastName: e.target.value })}
//         className="form-control mb-2"
//         placeholder="Last Name"
//       />
      
//       <input
//         value={user.email}
//         onChange={(e) => setUser({ ...user, email: e.target.value })}
//         className="form-control mb-2"
//         placeholder="email"
//         type="email"
//       />
      
//       <input
//         value={user.dob}
//         onChange={(e) => setUser({ ...user, dob: e.target.value })}
//         className="form-control mb-2"
//         type="date"
//       />
      
//       <select
//         value={user.role}
//         onChange={(e) => setUser({ ...user, role: e.target.value })}
//         className="form-control mb-2"
//       >
//         <option value="">Select Role</option>
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select>
      
//       <button
//         onClick={signup}
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign up
//       </button>
      
//       <Link href="/Account/Signin">Sign in</Link>
//     </div>
//   );
// }
// // "use client";
// // import Link from "next/link";
// // import { Form } from "react-bootstrap";

// // export default function Signup() {
// //   return (
// //     <div id="wd-signup-screen" className="p-3">
// //       <h1>Sign up</h1>
// //       <Form.Control 
// //         placeholder="username" 
// //         className="mb-2"
// //       />
// //       <Form.Control 
// //         placeholder="password" 
// //         type="password" 
// //         className="mb-2"
// //       />
// //       <Form.Control 
// //         placeholder="verify password" 
// //         type="password" 
// //         className="mb-2"
// //       />
// //       <Link 
// //         href="/Dashboard" 
// //         className="btn btn-primary w-100 mb-2"
// //       >
// //         Sign up
// //       </Link>
// //       <Link href="/Account/Signin">
// //         Sign in
// //       </Link>
// //     </div>
// //   );
// // }

// // import Link from "next/link"; 
// // export default function Signup() { 
// //   return ( 
// //     <div id="wd-signup-screen"> 
// //       <h3>Sign up</h3> 
// //       <input placeholder="username" className="wd-username" /><br/> 
// //       <input placeholder="password" type="password" className="wd-password" /><br/> 
// //       <input placeholder="verify password" 
// //              type="password" className="wd-password-verify" /><br/> 
// //       <Link  href="Profile" > Sign up </Link><br /> 
// //       <Link  href="Signin" > Sign in </Link> 
// //     </div> 
// // );} 