"use client";
import Link from "next/link";
import store from "./store";
import { Provider } from "react-redux";

export default function Labs() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <h1>Labs</h1>
        <h3>Mrunal Golivadekar | WebDev Online(Fall 2025)</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <Link href="/Labs/Lab1">Lab 1</Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab2">Lab 2</Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab3">Lab 3</Link>
          </li>
          <li className="list-group-item">
            <Link href="/Labs/Lab4">Lab 4</Link>
          </li>
          <li className="list-group-item">
            <Link href="/">Kambaz</Link>
          </li>
        </ul>

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
    </Provider>
  );
}


// import Link from "next/link";

// export default function Labs() {
//   return (
//     <div id="wd-labs">
//       <h1>Labs</h1>
//       <h3>Mrunal Golivadekar | WebDev Online(Fall 2025)</h3>

//       <ul>
//         <li>
//           <Link href="/Labs/Lab1">Lab 1: HTML Examples</Link>
//         </li>
//         <li>
//           <Link href="/Labs/Lab2">Lab 2: Cascading Style Sheets</Link>
//         </li>
//         <li>
//           <Link href="/Labs/Lab3">Lab 3: Variables and Components</Link>
//         </li>
//         <li className="list-group-item">
//           <Link href="/Labs/Lab4" id="wd-lab4-link">Lab 4 - State Management</Link>
//         </li>
//       </ul>

//       <h3>Kambaz Application</h3>
//       <Link href="/">Go to Kambaz</Link>

      // <h3>Source Code Repositories</h3>
      // <ul>
      //   <li>
      //     <a href="https://github.com/mrunalg25/-kambaz-next-js" target="_blank">
      //       Labs Repository
      //     </a>
      //   </li>
      //   <li>
      //     <a href="https://github.com/mrunalg25/-kambaz-next-js" target="_blank">
      //       Kambaz Repository
      //     </a>
      //   </li>
      // </ul>
//     </div>
//   );
// }
