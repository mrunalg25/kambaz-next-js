"use client";
import { useState, useEffect } from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import Link from "next/link";

// Dynamically import Redux components to avoid SSR issues
import dynamic from 'next/dynamic';

const ReduxExamples = dynamic(() => import("./ReduxExamples"), {
  ssr: false,
});

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  
  return (
    <div id="wd-lab4" className="container">
      <h2>Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      
      <hr />
      <Link href="/Labs">
        <button className="btn btn-secondary">← Back to Labs</button>
      </Link>
    </div>
  );
}


// "use client";
// import ClickEvent from "./ClickEvent";
// import PassingDataOnEvent from "./PassingDataOnEvent";
// import PassingFunctions from "./PassingFunctions";
// import EventObject from "./EventObject";
// import Counter from "./Counter";
// import BooleanStateVariables from "./BooleanStateVariables";
// import StringStateVariables from "./StringStateVariables";
// import DateStateVariable from "./DateStateVariable";
// import ObjectStateVariable from "./ObjectStateVariable";
// import ArrayStateVariable from "./ArrayStateVariable";
// import ParentStateComponent from "./ParentStateComponent";
// import ReduxExamples from "./ReduxExamples";
// import Link from "next/link";

// export default function Lab4() {
//   function sayHello() {
//     alert("Hello");
//   }
  
//   return (
//     <div id="wd-lab4" className="container">
//       <h2>Lab 4</h2>
//       <ClickEvent />
//       <PassingDataOnEvent />
//       <PassingFunctions theFunction={sayHello} />
//       <EventObject />
//       <Counter />
//       <BooleanStateVariables />
//       <StringStateVariables />
//       <DateStateVariable />
//       <ObjectStateVariable />
//       <ArrayStateVariable />
//       <ParentStateComponent />
//       <ReduxExamples />
      
//       <hr />
//       <Link href="/Labs">
//         <button className="btn btn-secondary">← Back to Labs</button>
//       </Link>
//     </div>
//   );
// }