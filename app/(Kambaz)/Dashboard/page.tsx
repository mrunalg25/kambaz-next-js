"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import * as courseClient from "../Courses/client";
import * as userClient from "../Account/client";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState(false);
  const [course, setCourse] = useState({
    _id: "",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const fetchCourses = async () => {
    try {
      if (!currentUser) return;
      
      if (enrolling) {
        // Show all courses with enrollment status
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
        
        const coursesWithEnrollment = allCourses.map((course: any) => {
          const enrolled = enrolledCourses.some((ec: any) => ec._id === course._id);
          return { ...course, enrolled };
        });
        
        setCourses(coursesWithEnrollment);
      } else {
        // Show only enrolled courses
        const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
        setCourses(enrolledCourses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (!currentUser) return;
    
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled };
        }
        return course;
      })
    );
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser, enrolling]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard
        {currentUser && (
          <button
            onClick={() => setEnrolling(!enrolling)}
            className="float-end btn btn-primary"
          >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        )}
      </h1>
      <hr />

      {currentUser && currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>

          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />

          <textarea
            value={course.description}
            className="form-control mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img
                    src="/course.png"
                    width="100%"
                    height={160}
                    alt="course"
                  />
                  <div className="card-body">
                    {enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(course._id, !course.enrolled);
                        }}
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>

                    {currentUser && currentUser.role === "FACULTY" && !enrolling && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import Link from "next/link";
// import * as courseClient from "../Courses/client";

// export default function Dashboard() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const [courses, setCourses] = useState<any[]>([]);
//   const [course, setCourse] = useState({
//     _id: "",
//     name: "New Course",
//     number: "New Number",
//     startDate: "2023-09-10",
//     endDate: "2023-12-15",
//     description: "New Description",
//   });

//   const fetchCourses = async () => {
//     try {
//       const courses = await courseClient.fetchAllCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addNewCourse = async () => {
//     const newCourse = await courseClient.createCourse(course);
//     setCourses([...courses, newCourse]);
//   };

//   const deleteCourse = async (courseId: string) => {
//     await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((c) => c._id !== courseId));
//   };

//   const updateCourse = async () => {
//     await courseClient.updateCourse(course);
//     setCourses(
//       courses.map((c) => {
//         if (c._id === course._id) {
//           return course;
//         } else {
//           return c;
//         }
//       })
//     );
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />

//       <h5>
//         New Course
//         <button
//           className="btn btn-primary float-end"
//           id="wd-add-new-course-click"
//           onClick={addNewCourse}
//         >
//           Add
//         </button>
//         <button
//           className="btn btn-warning float-end me-2"
//           id="wd-update-course-click"
//           onClick={updateCourse}
//         >
//           Update
//         </button>
//       </h5>

//       <input
//         value={course.name}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//         placeholder="Course Name"
//       />
      
//       <textarea
//         value={course.description}
//         className="form-control mb-2"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//         placeholder="Course Description"
//       />

//       <hr />

//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />

//       <div id="wd-dashboard-courses" className="row">
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="wd-dashboard-course col"
//               style={{ width: "300px" }}
//             >
//               <div className="card rounded-3 overflow-hidden">
//                 <Link
//                   href={`/Courses/${course._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                 >
//                   <img
//                     src="/course.png"
//                     width="100%"
//                     height={160}
//                     alt="course"
//                   />
//                   <div className="card-body">
//                     <h5 className="wd-dashboard-course-title card-title">
//                       {course.name}
//                     </h5>
//                     <p
//                       className="wd-dashboard-course-title card-text overflow-y-hidden"
//                       style={{ maxHeight: 100 }}
//                     >
//                       {course.description}
//                     </p>
//                     <button className="btn btn-primary">Go</button>
//                     <button
//                       onClick={(event) => {
//                         event.preventDefault();
//                         deleteCourse(course._id);
//                       }}
//                       className="btn btn-danger float-end"
//                       id="wd-delete-course-click"
//                     >
//                       Delete
//                     </button>
//                     <button
//                       id="wd-edit-course-click"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         setCourse(course);
//                       }}
//                       className="btn btn-warning me-2 float-end"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Form } from "react-bootstrap";
// import Link from "next/link";
// import { useCourses } from "../context";

// export default function Dashboard() {
//   const { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse } = useCourses();

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
      
//       <h5>
//         New Course
//         <Button 
//           className="btn btn-primary float-end"
//           onClick={addNewCourse} 
//           id="wd-add-new-course-click"
//         >
//           Add
//         </Button>
//         <Button 
//           className="btn btn-warning float-end me-2"
//           onClick={updateCourse} 
//           id="wd-update-course-click"
//         >
//           Update
//         </Button>
//       </h5>
//       <br />
      
//       <Form.Control 
//         value={course.name} 
//         className="mb-2"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//       />
//       <Form.Control 
//         as="textarea"
//         value={course.description}
//         rows={3}
//         className="mb-2"
//         onChange={(e) => setCourse({ ...course, description: e.target.value })}
//       />
      
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
      
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses.map((c) => (
//             <Col key={c._id} className="wd-dashboard-course" style={{ width: "300px" }}>
//               <Card>
//                 <Link 
//                   href={`/Courses/${c._id}/Home`}
//                   className="wd-dashboard-course-link text-decoration-none text-dark"
//                 >
//                   <CardImg variant="top" src="/course.png" width="100%" height={160}/>
//                   <CardBody>
//                     <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                       {c.name}
//                     </CardTitle>
//                     <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                       {c.description}
//                     </CardText>
//                     <Button variant="primary">Go</Button>
//                   </CardBody>
//                 </Link>
//                 <CardBody>
//                   <Button 
//                     onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourse(c._id);
//                     }}
//                     className="btn btn-danger float-end"
//                     id="wd-delete-course-click"
//                   >
//                     Delete
//                   </Button>
//                   <Button
//                     id="wd-edit-course-click"
//                     onClick={(event) => {
//                       event.preventDefault();
//                       setCourse(c);
//                     }}
//                     className="btn btn-warning me-2 float-end"
//                   >
//                     Edit
//                   </Button>
//                 </CardBody>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }


// // "use client";
// // import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Form } from "react-bootstrap";
// // import Link from "next/link";
// // import { useState } from "react";
// // import * as db from "../Database";

// // export default function Dashboard() {
// //   const [courses, setCourses] = useState<any[]>(db.courses);
// //   const [course, setCourse] = useState<any>({
// //     _id: "0",
// //     name: "New Course",
// //     number: "New Number",
// //     startDate: "2023-09-10",
// //     endDate: "2023-12-15",
// //     description: "New Description",
// //   });

// //   const addNewCourse = () => {
// //     const newCourse = {
// //       ...course,
// //       _id: new Date().getTime().toString(),
// //     };
// //     setCourses([...courses, newCourse]);
// //   };

// //   const deleteCourse = (courseId: string) => {
// //     setCourses(courses.filter((c) => c._id !== courseId));
// //   };

// //   const updateCourse = () => {
// //     setCourses(
// //       courses.map((c) => {
// //         if (c._id === course._id) {
// //           return course;
// //         } else {
// //           return c;
// //         }
// //       })
// //     );
// //   };

// //   return (
// //     <div id="wd-dashboard">
// //       <h1 id="wd-dashboard-title">Dashboard</h1>
// //       <hr />
      
// //       <h5>
// //         New Course
// //         <Button 
// //           className="btn btn-primary float-end"
// //           onClick={addNewCourse} 
// //           id="wd-add-new-course-click"
// //         >
// //           Add
// //         </Button>
// //         <Button 
// //           className="btn btn-warning float-end me-2"
// //           onClick={updateCourse} 
// //           id="wd-update-course-click"
// //         >
// //           Update
// //         </Button>
// //       </h5>
// //       <br />
      
// //       <Form.Control 
// //         value={course.name} 
// //         className="mb-2"
// //         onChange={(e) => setCourse({ ...course, name: e.target.value })}
// //       />
// //       <Form.Control 
// //         as="textarea"
// //         value={course.description}
// //         rows={3}
// //         className="mb-2"
// //         onChange={(e) => setCourse({ ...course, description: e.target.value })}
// //       />
      
// //       <hr />
// //       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
// //       <hr />
      
// //       <div id="wd-dashboard-courses">
// //         <Row xs={1} md={5} className="g-4">
// //           {courses.map((course) => (
// //             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
// //               <Card>
// //                 <Link 
// //                   href={`/Courses/${course._id}/Home`}
// //                   className="wd-dashboard-course-link text-decoration-none text-dark"
// //                 >
// //                   <CardImg variant="top" src="/course.png" width="100%" height={160}/>
// //                   <CardBody>
// //                     <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                       {course.name}
// //                     </CardTitle>
// //                     <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                       {course.description}
// //                     </CardText>
// //                     <Button variant="primary">Go</Button>
// //                   </CardBody>
// //                 </Link>
// //                 <CardBody>
// //                   <Button 
// //                     onClick={(event) => {
// //                       event.preventDefault();
// //                       deleteCourse(course._id);
// //                     }}
// //                     className="btn btn-danger float-end"
// //                     id="wd-delete-course-click"
// //                   >
// //                     Delete
// //                   </Button>
// //                   <Button
// //                     id="wd-edit-course-click"
// //                     onClick={(event) => {
// //                       event.preventDefault();
// //                       setCourse(course);
// //                     }}
// //                     className="btn btn-warning me-2 float-end"
// //                   >
// //                     Edit
// //                   </Button>
// //                 </CardBody>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";
// // import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
// // import Link from "next/link";
// // import * as db from "../Database";

// // export default function Dashboard() {
// //   const courses = db.courses;
  
// //   return (
// //     <div id="wd-dashboard">
// //       <h1 id="wd-dashboard-title">Dashboard</h1>
// //       <hr />
// //       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
// //       <hr />
// //       <div id="wd-dashboard-courses">
// //         <Row xs={1} md={5} className="g-4">
// //           {courses.map((course) => (
// //             <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
// //               <Card>
// //                 <Link 
// //                   href={`/Courses/${course._id}/Home`}
// //                   className="wd-dashboard-course-link text-decoration-none text-dark"
// //                 >
// //                   <CardImg variant="top" src="/course.png" width="100%" height={160}/>
// //                   <CardBody>
// //                     <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                       {course.name}
// //                     </CardTitle>
// //                     <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                       {course.description}
// //                     </CardText>
// //                     <Button variant="primary">Go</Button>
// //                   </CardBody>
// //                 </Link>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </div>
// //     </div>
// //   );
// // }



// // "use client";
// // import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
// // import Link from "next/link";

// // export default function Dashboard() {
// //   return (
// //     <div id="wd-dashboard">
// //       <h1 id="wd-dashboard-title">Dashboard</h1>
// //       <hr />
// //       <h2 id="wd-dashboard-published">Published Courses (4)</h2>
// //       <hr />
// //       <div id="wd-dashboard-courses">
// //         <Row xs={1} md={5} className="g-4">
// //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
// //             <Card>
// //               <Link 
// //                 href="/Courses/1234/Home"
// //                 className="wd-dashboard-course-link text-decoration-none text-dark"
// //               >
// //                 <CardImg variant="top" src="/react.png" width="100%" height={160}/>
// //                 <CardBody>
// //                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                     CS1234 React JS
// //                   </CardTitle>
// //                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                     Full Stack software developer
// //                   </CardText>
// //                   <Button variant="primary">Go</Button>
// //                 </CardBody>
// //               </Link>
// //             </Card>
// //           </Col>
          
// //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
// //             <Card>
// //               <Link 
// //                 href="/Courses/2345/Home"
// //                 className="wd-dashboard-course-link text-decoration-none text-dark"
// //               >
// //                 <CardImg variant="top" src="/node.png" width="100%" height={160}/>
// //                 <CardBody>
// //                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                     CS2345 Node.js
// //                   </CardTitle>
// //                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                     Backend development
// //                   </CardText>
// //                   <Button variant="primary">Go</Button>
// //                 </CardBody>
// //               </Link>
// //             </Card>
// //           </Col>
          
// //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
// //             <Card>
// //               <Link 
// //                 href="/Courses/3456/Home"
// //                 className="wd-dashboard-course-link text-decoration-none text-dark"
// //               >
// //                 <CardImg variant="top" src="/mongo.jpg" width="100%" height={160}/>
// //                 <CardBody>
// //                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                     CS3456 MongoDB
// //                   </CardTitle>
// //                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                     Database development
// //                   </CardText>
// //                   <Button variant="primary">Go</Button>
// //                 </CardBody>
// //               </Link>
// //             </Card>
// //           </Col>
          
// //           {/* Add 4 more courses for a total of 7+ */}
// //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
// //             <Card>
// //               <Link 
// //                 href="/Courses/4567/Home"
// //                 className="wd-dashboard-course-link text-decoration-none text-dark"
// //               >
// //                 <CardImg variant="top" src="/python.png" width="100%" height={160}/>
// //                 {/* <div style={{ backgroundColor: "#007bff", height: "160px" }}></div> */}
// //                 <CardBody>
// //                   <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
// //                     CS4567 Python
// //                   </CardTitle>
// //                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
// //                     Python programming
// //                   </CardText>
// //                   <Button variant="primary">Go</Button>
// //                 </CardBody>
// //               </Link>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </div>
// //     </div>
// //   );
// // }

// // // import Link from "next/link";

// // // export default function Dashboard() {
// // //   const courses = [
// // //     { id: "cs123", title: "CS1234 React JS" },
// // //     { id: "cs455", title: "CS4550 Web Development" },
// // //     { id: "cs501", title: "CS5010 Programming Design Paradigms" },
// // //     { id: "cs561", title: "CS5610 Full Stack Development" },
// // //     { id: "cs580", title: "CS5800 Algorithms" },
// // //     { id: "cs620", title: "CS6200 Information Retrieval" },
// // //     { id: "cs651", title: "CS6510 Advanced Database Systems" },
// // //   ];

// // //   return (
// // //     <div id="wd-dashboard" style={{ padding: "20px" }}>
// // //       <h1>Dashboard</h1>
// // //       <h2>Published Courses</h2>

// // //       <div
// // //         style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
// // //           gap: "20px",
// // //           marginTop: "20px",
// // //         }}
// // //       >
// // //         {courses.map((course) => (
// // //           <div
// // //             key={course.id}
// // //             style={{
// // //               border: "1px solid #ddd",
// // //               borderRadius: "8px",
// // //               padding: "15px",
// // //               backgroundColor: "#fafafa",
// // //             }}
// // //           >
// // //             <h3>{course.title}</h3>
// // //             <Link href={`/Courses/${course.id}`}>Go to Course</Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // import Link from "next/link"; 
// // // import Image from "next/image"; 
// // // export default function Dashboard() { 
// // //   return ( 
// // //     <div id="wd-dashboard"> 
// // //       <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
// // //       <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 
// // //       <div id="wd-dashboard-courses"> 
// // //         <div className="wd-dashboard-course"> 
// // //           <Link href="/Courses/1234" className="wd-dashboard-course-link"> 
// // //             <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// // //             <div> 
// // //               <h5> CS1234 React JS </h5> 
// // //               <p className="wd-dashboard-course-title"> 
// // //                 Full Stack software developer{" "} 
// // //               </p> 
// // //               <button> Go </button> 
// // //             </div> 
// // //           </Link> 
// // //         </div> 
// // //         <div className="wd-dashboard-course">
// // //             <Link href="/Courses/5678" className="wd-dashboard-course-link"> 
// // //                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// // //                 <div> 
// // //                 <h5> CS5678 PDP </h5> 
// // //                 <p className="wd-dashboard-course-title"> 
// // //                     Backend Developer{" "} 
// // //                 </p> 
// // //                 <button> Go </button> 
// // //                 </div> 
// // //             </Link> 
// // //         </div> 
// // //         <div className="wd-dashboard-course">
// // //             <Link href="/Courses/9012" className="wd-dashboard-course-link"> 
// // //                 <Image src="/images/reactjs.jpg" width={200} height={150} alt="ReactJS logo" /> 
// // //                 <div> 
// // //                 <h5> CS9012 WebD </h5> 
// // //                 <p className="wd-dashboard-course-title"> 
// // //                     Front end developer{" "} 
// // //                 </p> 
// // //                 <button> Go </button> 
// // //                 </div> 
// // //             </Link>
// // //         </div> 
// // //       </div> 
// // //     </div> 
// // // );} 