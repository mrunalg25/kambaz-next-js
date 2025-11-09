"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    role: "USER",
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return router.push("/Account/Signin");
    setProfile(currentUser);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (err) {
      alert("Failed to update profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>

      {profile && (
        <div>
          <input
            value={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />

          <input
            value={profile.password}
            id="wd-password"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
            type="password"
          />

          <input
            value={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />

          <input
            value={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />

          <input
            value={profile.dob}
            id="wd-dob"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />

          <input
            value={profile.email}
            id="wd-email"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            type="email"
          />

          <select
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            className="form-control mb-2"
            id="wd-role"
            value={profile.role}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button
            onClick={updateProfile}
            className="btn btn-primary w-100 mb-2"
            id="wd-update-profile-btn"
          >
            Update Profile
          </button>

          <button
            onClick={signout}
            className="btn btn-danger w-100"
            id="wd-signout-btn"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// "use client";

// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setCurrentUser } from "../reducer";
// import * as client from "../client";

// export default function Profile() {
//   const [profile, setProfile] = useState<any>({});
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const fetchProfile = () => {
//     if (!currentUser) return router.push("/Account/Signin");
//     setProfile(currentUser);
//   };

//   const signout = async () => {
//     await client.signout();
//     dispatch(setCurrentUser(null));
//     router.push("/Account/Signin");
//   };

//   const updateProfile = async () => {
//     const updatedProfile = await client.updateUser(profile);
//     dispatch(setCurrentUser(updatedProfile));
//     alert("Profile updated successfully!");
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   return (
//     <div id="wd-profile-screen">
//       <h1>Profile</h1>
      
//       {profile && (
//         <div>
//           <input
//             defaultValue={profile.username}
//             id="wd-username"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, username: e.target.value })}
//           />
          
//           <input
//             defaultValue={profile.password}
//             id="wd-password"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, password: e.target.value })}
//             type="password"
//           />
          
//           <input
//             defaultValue={profile.firstName}
//             id="wd-firstname"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
//           />
          
//           <input
//             defaultValue={profile.lastName}
//             id="wd-lastname"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
//           />
          
//           <input
//             defaultValue={profile.dob}
//             id="wd-dob"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
//             type="date"
//           />
          
//           <input
//             defaultValue={profile.email}
//             id="wd-email"
//             className="form-control mb-2"
//             onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//             type="email"
//           />
          
//           <select
//             onChange={(e) => setProfile({ ...profile, role: e.target.value })}
//             className="form-control mb-2"
//             id="wd-role"
//             value={profile.role}
//           >
//             <option value="USER">User</option>
//             <option value="ADMIN">Admin</option>
//             <option value="FACULTY">Faculty</option>
//             <option value="STUDENT">Student</option>
//           </select>
          
//           <button
//             onClick={updateProfile}
//             className="btn btn-primary w-100 mb-2"
//             id="wd-update-profile-btn"
//           >
//             Update Profile
//           </button>
          
//           <button
//             onClick={signout}
//             className="btn btn-danger w-100"
//             id="wd-signout-btn"
//           >
//             Sign out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // "use client";
// // import Link from "next/link";
// // import { Form } from "react-bootstrap";

// // export default function Profile() {
// //   return (
// //     <div id="wd-profile-screen" className="p-3">
// //       <h1>Profile</h1>
// //       <Form.Control 
// //         defaultValue="alice" 
// //         placeholder="username" 
// //         className="mb-2"
// //         id="wd-username"
// //       />
// //       <Form.Control 
// //         defaultValue="123" 
// //         placeholder="password" 
// //         type="password"
// //         className="mb-2"
// //         id="wd-password"
// //       />
// //       <Form.Control 
// //         defaultValue="Alice" 
// //         placeholder="First Name" 
// //         className="mb-2"
// //         id="wd-firstname"
// //       />
// //       <Form.Control 
// //         defaultValue="Wonderland" 
// //         placeholder="Last Name" 
// //         className="mb-2"
// //         id="wd-lastname"
// //       />
// //       <Form.Control 
// //         defaultValue="2000-01-01" 
// //         type="date" 
// //         className="mb-2"
// //         id="wd-dob"
// //       />
// //       <Form.Control 
// //         defaultValue="alice@wonderland" 
// //         type="email" 
// //         className="mb-2"
// //         id="wd-email"
// //       />
// //       <Form.Select 
// //         defaultValue="FACULTY" 
// //         className="mb-2"
// //         id="wd-role"
// //       >
// //         <option value="USER">User</option>
// //         <option value="ADMIN">Admin</option>
// //         <option value="FACULTY">Faculty</option>
// //         <option value="STUDENT">Student</option>
// //       </Form.Select>
// //       <Link 
// //         href="/Account/Signin" 
// //         className="btn btn-danger w-100"
// //       >
// //         Sign out
// //       </Link>
// //     </div>
// //   );
// // }


// // // import Link from "next/link"; 
// // // export default function Profile() { 
// // //   return ( 
// // //     <div id="wd-profile-screen"> 
// // //       <h3>Profile</h3> 
// // //       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/> 
// // //       <input defaultValue="123"   placeholder="password" type="password" 
// // //              className="wd-password" /><br/> 
// // //       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/> 
// // //       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/> 
// // //       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/> 
// // //       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/> 
// // //       <select defaultValue="FACULTY" id="wd-role"> 
// // //         <option value="USER">User</option>       <option value="ADMIN">Admin</option> 
// // //         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option> 
// // //       </select><br/> 
// // //       <Link href="Signin" > Sign out </Link> 
// // //     </div> 
// // // );} 