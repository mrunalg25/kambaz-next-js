"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as client from "../client";
import Link from "next/link";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>

      {error && <div className="alert alert-danger">{error}</div>}

      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />

      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />

      <button
        id="wd-signin-btn"
        onClick={signin}
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </button>

      <Link id="wd-signup-link" href="/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { setCurrentUser } from "../reducer";
// import { useDispatch } from "react-redux";
// import * as client from "../client";
// import Link from "next/link";

// export default function Signin() {
//   const [credentials, setCredentials] = useState<any>({});
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const signin = async () => {
//     try {
//       const user = await client.signin(credentials);
//       if (!user) return;
//       dispatch(setCurrentUser(user));
//       router.push("/Dashboard");
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
      
//       {error && <div className="alert alert-danger">{error}</div>}
      
//       <input
//         id="wd-username"
//         placeholder="username"
//         className="form-control mb-2"
//         defaultValue={credentials.username}
//         onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//       />
      
//       <input
//         id="wd-password"
//         placeholder="password"
//         type="password"
//         className="form-control mb-2"
//         defaultValue={credentials.password}
//         onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//       />
      
//       <button
//         id="wd-signin-btn"
//         onClick={signin}
//         className="btn btn-primary w-100 mb-2"
//       >
//         Sign in
//       </button>
      
//       <Link id="wd-signup-link" href="/Account/Signup">
//         Sign up
//       </Link>
//     </div>
//   );
// }