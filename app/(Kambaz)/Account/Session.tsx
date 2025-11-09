"use client";

import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      // 401 error is expected when not logged in - just ignore it
      console.log("No user session found");
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!pending) {
    return children;
  }
  
  // Optional: Show loading spinner while checking session
  return <div>Loading...</div>;
}


// "use client";

// import * as client from "./client";
// import { useEffect, useState } from "react";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";

// export default function Session({ children }: { children: any }) {
//   const [pending, setPending] = useState(true);
//   const dispatch = useDispatch();

//   const fetchProfile = async () => {
//     try {
//       const currentUser = await client.profile();
//       dispatch(setCurrentUser(currentUser));
//     } catch (err: any) {
//       console.error(err);
//     }
//     setPending(false);
//   };

//   useEffect(() => {
//     fetchProfile();
//   }, []);

//   if (!pending) {
//     return children;
//   }
// }