import Link from "next/link";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group">
      <Link 
        href="/Account/Signin" 
        className="list-group-item list-group-item-action"
      >
        Signin
      </Link>
      <Link 
        href="/Account/Signup" 
        className="list-group-item list-group-item-action"
      >
        Signup
      </Link>
      <Link 
        href="/Account/Profile" 
        className="list-group-item list-group-item-action"
      >
        Profile
      </Link>
    </div>
  );
}

// import Link from "next/link"; 
// export default function AccountNavigation() { 
//  return ( 
//    <div id="wd-account-navigation"> 
//      <Link href="Signin"> Signin </Link> <br /> 
//      <Link href="Signup"> Signup </Link> <br /> 
//      <Link href="Profile"> Profile </Link> <br /> 
//    </div> 
// );} 