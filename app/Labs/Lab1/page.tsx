"use client";
import Link from "next/link";
import { useState } from "react";

export default function Lab1() {
  const [clicked, setClicked] = useState(false);

  return (
    <div id="wd-lab1">
      <h1>Lab 1 - HTML Basics</h1>
      <p>Name: Mrunal Golivadekar | WebDev Online(Fall 2025)</p>

      {/* Headings */}
      <h2>Headings</h2>
      <h3>This is an H3 heading</h3>
      <h4>This is an H4 heading</h4>

      {/* Paragraph */}
      <h2>Paragraph</h2>
      <p>
        This is a sample paragraph to demonstrate paragraph tags in HTML using
        Next.js.
      </p>

      {/* Lists */}
      <h2>Lists</h2>
      <h3>Ordered List for Groceries</h3>
      <ol>
        <li>Milk</li>
        <li>Bread</li>
        <li>Eggs</li>
      </ol>

      <h3>Unordered List for Groceries</h3>
      <ul>
        <li>Cereal</li>
        <li>Juice</li>
        <li>Apples</li>
      </ul>

      <h3>My Favorite Recipe</h3>
      <ol>
        <li>Gather ingredients</li>
        <li>Mix ingredients and boil for 2 minutes</li>
        <li>Add in the spices</li>
        <li>Serve hot</li>
      </ol>

      <h3>My Favorite Books</h3>
      <ul>
        <li>Harry Potter</li>
        <li>Pride and Prejudice</li>
        <li>The Great Gatsby</li>
      </ul>

      {/* Table */}
      <h2>Table Example</h2>
      <table border={1} width="100%"> 
          <thead> 
            <tr> 
              <th>Quiz</th> 
              <th>Topic</th> 
              <th>Date</th> 
              <th>Grade</th> 
            </tr> 
          </thead> 
          <tbody> 
            <tr> 
              <td>Q1</td> 
              <td>HTML</td> 
              <td>2/3/21</td> 
              <td>85</td> 
            </tr> 
            <tr> 
              <td>Q2</td> 
              <td>CSS</td> 
              <td>2/10/21</td> 
              <td>90</td> 
            </tr> 
            <tr>
              <td>Q3</td> 
              <td>JavaScript</td> 
              <td>3/11/21</td> 
              <td>85</td> 
            </tr>
            <tr>
              <td>Q4</td> 
              <td>React</td> 
              <td>4/11/21</td> 
              <td>87</td> 
            </tr>
            <tr>
              <td>Q5</td> 
              <td>Angular</td> 
              <td>5/11/21</td> 
              <td>90</td> 
            </tr>
            <tr>
              <td>Q6</td> 
              <td>NextJS</td> 
              <td>6/11/21</td> 
              <td>92</td> 
            </tr>
            <tr>
              <td>Q7</td> 
              <td>TypeScript</td> 
              <td>7/11/21</td> 
              <td>88</td> 
            </tr>
            <tr>
              <td>Q8</td> 
              <td>Nodejs</td> 
              <td>8/11/21</td> 
              <td>89</td> 
            </tr>
            <tr>
              <td>Q9</td> 
              <td>MongoDB</td> 
              <td>9/11/21</td> 
              <td>91</td> 
            </tr>
            <tr>
              <td>Q10</td> 
              <td>MySQL</td> 
              <td>10/11/21</td> 
              <td>93</td> 
            </tr>
          </tbody> 
          <tfoot> 
            <tr> 
              <td colSpan={3}>Average</td> 
              <td>89</td> 
            </tr> 
          </tfoot> 
        </table> 

      {/* Images */}
      <h2>Images</h2>
      <img src="/starship.jpg" alt="Starship" width="300" />
      <img src="/teslabot.jpg" alt="Teslabot" width="300" />

      {/* Button */}
      <h2>Button Example</h2>
      <button
        type="button"
        onClick={() => {
          alert("Hello from Lab 1!");
          setClicked(true);
        }}
      >
        Click Me
      </button>
      {clicked && <p>✅ You clicked the button!</p>}

      {/* Anchor */}
      <h2>Anchor Tag</h2>
      <a href="https://www.northeastern.edu" target="_blank">
        Visit Northeastern University
      </a>
      <h2>Back button</h2>
      <Link href="/Labs">
        <button style={{ marginTop: "20px" }}>← Back to Labs</button>
      </Link>
    </div>
  );
}

// "use client"; 
// export default function Lab1() { 
//     return ( 
//     <div id="wd-lab1"> 
//         <h2>Lab 1</h2>
//         <h3>HTML Examples</h3> 
//         <div id="wd-h-tag"> 
//             <h4>Heading Tags</h4> 
//                 Text documents are often broken up into several sections and 
//                 subsections. Each section is usually prefaced with a short 
//                 title or heading that attempts to summarize the topic of the 
//                 section it precedes. For instance this paragraph is preceded by 
//                 the heading Heading Tags. The font of the section headings are 
//                 usually larger and bolder than their subsection headings. This 
//                 document uses headings to introduce topics such as HTML 
//                 Documents, HTML Tags, Heading Tags, etc. HTML heading tags can 
//                 be used to format plain text so that it renders in a browser as 
//                 large headings. There are 6 heading tags for different sizes: 
//                 h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and 
//                 h6 is the smallest heading. 
//         </div> 
//         <div>
//             <h5 id="wd-buttons">Buttons</h5> 
//             <button type="button" 
//                 onClick={() => alert("Life is Good!")} 
//                 id="wd-all-good"> 
//                 Hello World! 
//             </button>
//         </div>
//         <h4>Anchor tag</h4> 
//         Please 
//         <a href="https://www.lipsum.com" id="wd-lipsum">click here</a> 
//         to get dummy text<br/> 
        
//       {/* do the next exercise here */}
//     </div> 
//     );} 