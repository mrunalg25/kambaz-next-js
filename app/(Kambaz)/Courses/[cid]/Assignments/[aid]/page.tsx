"use client";
import { Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const isNew = aid === "new";
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: new Date().getTime().toString(),
      title: "New Assignment",
      course: cid,
      description: "New Assignment Description",
      points: 100,
      dueDate: "2024-05-13",
      availableFromDate: "2024-05-06",
      availableUntilDate: "2024-05-20",
    }
  );

  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };
  
  return (
    <div id="wd-assignments-editor" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div></div>
        <div>
          <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>

      <Row className="mb-3">
        <Col>
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col>
          <Form.Control 
            as="textarea"
            id="wd-description"
            rows={6}
            className="form-control"
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-points">Points</Form.Label>
          <Form.Control 
            id="wd-points" 
            value={assignment.points}
            type="number"
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          <Form.Select id="wd-group" className="form-control">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          <Form.Select id="wd-display-grade-as" className="form-control">
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          <Form.Select id="wd-submission-type" className="form-control">
            <option>Online</option>
            <option>On Paper</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          <div className="border p-3">
            <h6>Online Entry Options</h6>
            <Form.Check 
              type="checkbox" 
              id="wd-text-entry"
              label="Text Entry" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-website-url"
              label="Website URL" 
              defaultChecked
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-media-recordings"
              label="Media Recordings" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-student-annotation"
              label="Student Annotation" 
              className="mb-2"
            />
            <Form.Check 
              type="checkbox" 
              id="wd-file-upload"
              label="File Uploads" 
              className="mb-2"
            />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
          <Form.Control 
            id="wd-assign-to" 
            defaultValue="Everyone"
            className="form-control"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          <Form.Control 
            id="wd-due-date" 
            type="date"
            value={assignment.dueDate}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3}>
          <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
          <Form.Control 
            id="wd-available-from" 
            type="date"
            value={assignment.availableFromDate}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
          />
        </Col>
        <Col md={3}>
          <Form.Label htmlFor="wd-available-until">Until</Form.Label>
          <Form.Control 
            id="wd-available-until" 
            type="date"
            value={assignment.availableUntilDate}
            className="form-control"
            onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
          />
        </Col>
      </Row>

      <hr />
      
      <div className="d-flex justify-content-end">
        <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

// "use client";
// import { Form, Row, Col, Button } from "react-bootstrap";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import * as db from "../../../../Database";

// export default function AssignmentEditor() {
//   const { cid, aid } = useParams();
//   const assignment = db.assignments.find((a: any) => a._id === aid);
  
//   if (!assignment) {
//     return <div>Assignment not found</div>;
//   }
  
//   return (
//     <div id="wd-assignments-editor" className="p-3">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div></div>
//         <div>
//           <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
//             Cancel
//           </Link>
//           <Button variant="danger">
//             Save
//           </Button>
//         </div>
//       </div>

//       <Row className="mb-3">
//         <Col>
//           <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
//           <Form.Control 
//             id="wd-name" 
//             defaultValue={assignment.title}
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col>
//           <Form.Control 
//             as="textarea"
//             id="wd-description"
//             rows={6}
//             className="form-control"
//             defaultValue={assignment.description}
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-points">Points</Form.Label>
//           <Form.Control 
//             id="wd-points" 
//             defaultValue={assignment.points}
//             type="number"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//           <Form.Select id="wd-group" className="form-control">
//             <option>ASSIGNMENTS</option>
//             <option>QUIZZES</option>
//             <option>EXAMS</option>
//             <option>PROJECT</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
//           <Form.Select id="wd-display-grade-as" className="form-control">
//             <option>Percentage</option>
//             <option>Points</option>
//             <option>Letter Grade</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
//           <Form.Select id="wd-submission-type" className="form-control">
//             <option>Online</option>
//             <option>On Paper</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={12}>
//           <div className="border p-3">
//             <h6>Online Entry Options</h6>
//             <Form.Check 
//               type="checkbox" 
//               id="wd-text-entry"
//               label="Text Entry" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-website-url"
//               label="Website URL" 
//               defaultChecked
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-media-recordings"
//               label="Media Recordings" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-student-annotation"
//               label="Student Annotation" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-file-upload"
//               label="File Uploads" 
//               className="mb-2"
//             />
//           </div>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
//           <Form.Control 
//             id="wd-assign-to" 
//             defaultValue="Everyone"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-due-date">Due</Form.Label>
//           <Form.Control 
//             id="wd-due-date" 
//             type="date"
//             defaultValue={assignment.dueDate}
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
//           <Form.Control 
//             id="wd-available-from" 
//             type="date"
//             defaultValue={assignment.availableFromDate}
//             className="form-control"
//           />
//         </Col>
//         <Col md={3}>
//           <Form.Label htmlFor="wd-available-until">Until</Form.Label>
//           <Form.Control 
//             id="wd-available-until" 
//             type="date"
//             defaultValue={assignment.availableUntilDate}
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <hr />
      
//       <div className="d-flex justify-content-end">
//         <Link href={`/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
//           Cancel
//         </Link>
//         <Button variant="danger">
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { Form, Row, Col, Button } from "react-bootstrap";
// import Link from "next/link";

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor" className="p-3">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div></div>
//         <div>
//           <Button variant="secondary" className="me-2">
//             Cancel
//           </Button>
//           <Button variant="danger">
//             Save
//           </Button>
//         </div>
//       </div>

//       <Row className="mb-3">
//         <Col>
//           <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
//           <Form.Control 
//             id="wd-name" 
//             defaultValue="A1 - ENV + HTML" 
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col>
//           <Form.Control 
//             as="textarea"
//             id="wd-description"
//             rows={6}
//             className="form-control"
//             defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-points">Points</Form.Label>
//           <Form.Control 
//             id="wd-points" 
//             defaultValue={100} 
//             type="number"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//           <Form.Select id="wd-group" className="form-control">
//             <option>ASSIGNMENTS</option>
//             <option>QUIZZES</option>
//             <option>EXAMS</option>
//             <option>PROJECT</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
//           <Form.Select id="wd-display-grade-as" className="form-control">
//             <option>Percentage</option>
//             <option>Points</option>
//             <option>Letter Grade</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
//           <Form.Select id="wd-submission-type" className="form-control">
//             <option>Online</option>
//             <option>On Paper</option>
//           </Form.Select>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={12}>
//           <div className="border p-3">
//             <h6>Online Entry Options</h6>
//             <Form.Check 
//               type="checkbox" 
//               id="wd-text-entry"
//               label="Text Entry" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-website-url"
//               label="Website URL" 
//               defaultChecked
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-media-recordings"
//               label="Media Recordings" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-student-annotation"
//               label="Student Annotation" 
//               className="mb-2"
//             />
//             <Form.Check 
//               type="checkbox" 
//               id="wd-file-upload"
//               label="File Uploads" 
//               className="mb-2"
//             />
//           </div>
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-assign-to">Assign</Form.Label>
//           <Form.Control 
//             id="wd-assign-to" 
//             defaultValue="Everyone"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-due-date">Due</Form.Label>
//           <Form.Control 
//             id="wd-due-date" 
//             type="date"
//             defaultValue="2024-05-13"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <Row className="mb-3">
//         <Col md={3}>
//           <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
//           <Form.Control 
//             id="wd-available-from" 
//             type="date"
//             defaultValue="2024-05-06"
//             className="form-control"
//           />
//         </Col>
//         <Col md={3}>
//           <Form.Label htmlFor="wd-available-until">Until</Form.Label>
//           <Form.Control
//             id="wd-available-until"
//             type="date"
//             defaultValue="2024-05-20"
//             className="form-control"
//           />
//         </Col>
//       </Row>

//       <hr />
      
//       <div className="d-flex justify-content-end">
//         <Link href="/Courses/1234/Assignments" className="btn btn-secondary me-2">
//           Cancel
//         </Link>
//         <Button variant="danger">
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function AssignmentEditor({
//   params,
// }: {
//   params: { courseId: string; assignmentId: string };
// }) {
//   const [name, setName] = useState("Assignment 1");
//   const [description, setDescription] = useState("This is the default description.");

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Assignment Editor</h1>
//       <form style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px" }}>
        
//         {/* Assignment Name */}
//         <label>
//           Assignment Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </label>

//         {/* Assignment Description */}
//         <label>
//           Description:
//           <textarea
//             rows={4}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </label>

//         {/* Points */}
//         <label>
//           Points:
//           <input type="number" defaultValue={100} />
//         </label>

//         {/* Assignment Group Dropdown */}
//         <label>
//           Assignment Group:
//           <select defaultValue="Assignments">
//             <option>Assignments</option>
//             <option>Quizzes</option>
//             <option>Exams</option>
//             <option>Projects</option>
//           </select>
//         </label>

//         {/* Display Grade Dropdown */}
//         <label>
//           Display Grade As:
//           <select defaultValue="Percentage">
//             <option>Percentage</option>
//             <option>Points</option>
//             <option>Letter Grade</option>
//             <option>Complete/Incomplete</option>
//           </select>
//         </label>

//         {/* Submission Type Dropdown */}
//         <label>
//           Submission Type:
//           <select defaultValue="Online">
//             <option>Online</option>
//             <option>On Paper</option>
//             <option>External Tool</option>
//           </select>
//         </label>

//         {/* Online Entry Options (Checkboxes) */}
//         <fieldset>
//           <legend>Online Entry Options:</legend>
//           <label><input type="checkbox" defaultChecked /> Text Entry</label><br />
//           <label><input type="checkbox" /> Website URL</label><br />
//           <label><input type="checkbox" /> Media Recording</label><br />
//           <label><input type="checkbox" /> File Uploads</label>
//         </fieldset>

//         {/* Assign To Field */}
//         <label>
//           Assign To:
//           <input type="text" defaultValue="Everyone" />
//         </label>

//         {/* Dates */}
//         <label>
//           Due Date:
//           <input type="date" defaultValue="2025-09-30" />
//         </label>

//         <label>
//           Available From:
//           <input type="date" defaultValue="2025-09-01" />
//         </label>

//         <label>
//           Until:
//           <input type="date" defaultValue="2025-10-15" />
//         </label>

//         {/* Submit button */}
//         <button type="submit">Save Assignment</button>
//       </form>
//     </div>
//   );
// }
