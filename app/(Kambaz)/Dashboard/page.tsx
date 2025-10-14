"use client";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
import Link from "next/link";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg variant="top" src="/course.png" width="100%" height={160}/>
                  <CardBody>
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}



// "use client";
// import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
// import Link from "next/link";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (4)</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link 
//                 href="/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <CardImg variant="top" src="/react.png" width="100%" height={160}/>
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS1234 React JS
//                   </CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Full Stack software developer
//                   </CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>
          
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link 
//                 href="/Courses/2345/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <CardImg variant="top" src="/node.png" width="100%" height={160}/>
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS2345 Node.js
//                   </CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Backend development
//                   </CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>
          
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link 
//                 href="/Courses/3456/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <CardImg variant="top" src="/mongo.jpg" width="100%" height={160}/>
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS3456 MongoDB
//                   </CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Database development
//                   </CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>
          
//           {/* Add 4 more courses for a total of 7+ */}
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//               <Link 
//                 href="/Courses/4567/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <CardImg variant="top" src="/python.png" width="100%" height={160}/>
//                 {/* <div style={{ backgroundColor: "#007bff", height: "160px" }}></div> */}
//                 <CardBody>
//                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS4567 Python
//                   </CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Python programming
//                   </CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }

// // import Link from "next/link";

// // export default function Dashboard() {
// //   const courses = [
// //     { id: "cs123", title: "CS1234 React JS" },
// //     { id: "cs455", title: "CS4550 Web Development" },
// //     { id: "cs501", title: "CS5010 Programming Design Paradigms" },
// //     { id: "cs561", title: "CS5610 Full Stack Development" },
// //     { id: "cs580", title: "CS5800 Algorithms" },
// //     { id: "cs620", title: "CS6200 Information Retrieval" },
// //     { id: "cs651", title: "CS6510 Advanced Database Systems" },
// //   ];

// //   return (
// //     <div id="wd-dashboard" style={{ padding: "20px" }}>
// //       <h1>Dashboard</h1>
// //       <h2>Published Courses</h2>

// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
// //           gap: "20px",
// //           marginTop: "20px",
// //         }}
// //       >
// //         {courses.map((course) => (
// //           <div
// //             key={course.id}
// //             style={{
// //               border: "1px solid #ddd",
// //               borderRadius: "8px",
// //               padding: "15px",
// //               backgroundColor: "#fafafa",
// //             }}
// //           >
// //             <h3>{course.title}</h3>
// //             <Link href={`/Courses/${course.id}`}>Go to Course</Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // import Link from "next/link"; 
// // import Image from "next/image"; 
// // export default function Dashboard() { 
// //   return ( 
// //     <div id="wd-dashboard"> 
// //       <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
// //       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 
// //       <div id="wd-dashboard-courses"> 
// //         <div className="wd-dashboard-course"> 
// //           <Link href="/Courses/1234" className="wd-dashboard-course-link"> 
// //             <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// //             <div> 
// //               <h5> CS1234 React JS </h5> 
// //               <p className="wd-dashboard-course-title"> 
// //                 Full Stack software developer{" "} 
// //               </p> 
// //               <button> Go </button> 
// //             </div> 
// //           </Link> 
// //         </div> 
// //         <div className="wd-dashboard-course">
// //             <Link href="/Courses/5678" className="wd-dashboard-course-link"> 
// //                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// //                 <div> 
// //                 <h5> CS5678 PDP </h5> 
// //                 <p className="wd-dashboard-course-title"> 
// //                     Backend Developer{" "} 
// //                 </p> 
// //                 <button> Go </button> 
// //                 </div> 
// //             </Link> 
// //         </div> 
// //         <div className="wd-dashboard-course">
// //             <Link href="/Courses/9012" className="wd-dashboard-course-link"> 
// //                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// //                 <div> 
// //                 <h5> CS9012 WebD </h5> 
// //                 <p className="wd-dashboard-course-title"> 
// //                     Front end developer{" "} 
// //                 </p> 
// //                 <button> Go </button> 
// //                 </div> 
// //             </Link>
// //         </div> 
// //       </div> 
// //     </div> 
// // );} 