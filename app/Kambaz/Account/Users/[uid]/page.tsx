// import Users from "../../Users";

// export default function UserDetailsPage() {
//   return <Users />;
// }
"use client";
import Users from "../Users";
import Details from "../Details";

export default function UserDetailsPage() {
  return (
    <>
      <Users />
      <Details />
    </>
  );
}