import Link from "next/link";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      <p>Welcome to the Kambaz application.</p>

      {/* Assignment requirement: link to Lab exercises */}
      <p>
        <Link href="/Labs">Go to Lab Exercises</Link>
      </p>

      {/* Optional: still keep navigation inside Kambaz */}
      <nav>
        <ul>
          <li><Link href="/Account/Signin">Account</Link></li>
          <li><Link href="/Dashboard">Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// import { redirect } from "next/navigation"; 
// export default function Kambaz() { 
//     // return ( 
//     // <div id="wd-kambaz"> 
//     // <h1>Kambaz</h1> 
//     // </div> 
//     redirect("/Account/Signin"); 
//     // )
//     ;} 