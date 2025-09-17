import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h3>Mrunal Golivadekar | WebDev Online(Fall 2025)</h3>

      <ul>
        <li>
          <Link href="/Labs/Lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/Labs/Lab2">Lab 2: Forms</Link>
        </li>
      </ul>

      <h3>Kambaz Application</h3>
      <Link href="/">Go to Kambaz</Link>

      <h3>Source Code Repositories</h3>
      <ul>
        <li>
          <a href="https://github.com/mrunalg25/-kambaz-next-js" target="_blank">
            Labs Repository
          </a>
        </li>
        <li>
          <a href="https://github.com/mrunalg25/-kambaz-next-js" target="_blank">
            Kambaz Repository
          </a>
        </li>
      </ul>
    </div>
  );
}


// import Link from "next/link"; 
// export default function Labs() { 
//  return ( 
//    <div id="wd-labs"> 
//      <h1>Labs</h1> 
//      <ul> 
//        <li> 
//          <Link href="/Labs/Lab1" id="wd-lab1-link"> 
//            Lab 1: HTML Examples </Link> 
//        </li> 
//        <li> 
//          <Link href="/Labs/Lab2" id="wd-lab2-link"> 
//            Lab 2: CSS Basics </Link> 
//        </li> 
//        <li> 
//          <Link href="/Labs/Lab3" id="wd-lab3-link"> 
//            Lab 3: JavaScript Fundamentals </Link> 
//        </li> 
//        <li> 
//         <Link href="/" id="wd-lab3-link"> 
//         Kambaz </Link>
//        </li> 
//      </ul> 
//    </div> 
// );} 