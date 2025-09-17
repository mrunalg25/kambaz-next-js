"use client";

import { useState } from "react";

export default function AssignmentEditor({
  params,
}: {
  params: { courseId: string; assignmentId: string };
}) {
  const [name, setName] = useState("Assignment 1");
  const [description, setDescription] = useState("This is the default description.");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Assignment Editor</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "600px" }}>
        
        {/* Assignment Name */}
        <label>
          Assignment Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>

        {/* Assignment Description */}
        <label>
          Description:
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>

        {/* Points */}
        <label>
          Points:
          <input type="number" defaultValue={100} />
        </label>

        {/* Assignment Group Dropdown */}
        <label>
          Assignment Group:
          <select defaultValue="Assignments">
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Exams</option>
            <option>Projects</option>
          </select>
        </label>

        {/* Display Grade Dropdown */}
        <label>
          Display Grade As:
          <select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Points</option>
            <option>Letter Grade</option>
            <option>Complete/Incomplete</option>
          </select>
        </label>

        {/* Submission Type Dropdown */}
        <label>
          Submission Type:
          <select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>External Tool</option>
          </select>
        </label>

        {/* Online Entry Options (Checkboxes) */}
        <fieldset>
          <legend>Online Entry Options:</legend>
          <label><input type="checkbox" defaultChecked /> Text Entry</label><br />
          <label><input type="checkbox" /> Website URL</label><br />
          <label><input type="checkbox" /> Media Recording</label><br />
          <label><input type="checkbox" /> File Uploads</label>
        </fieldset>

        {/* Assign To Field */}
        <label>
          Assign To:
          <input type="text" defaultValue="Everyone" />
        </label>

        {/* Dates */}
        <label>
          Due Date:
          <input type="date" defaultValue="2025-09-30" />
        </label>

        <label>
          Available From:
          <input type="date" defaultValue="2025-09-01" />
        </label>

        <label>
          Until:
          <input type="date" defaultValue="2025-10-15" />
        </label>

        {/* Submit button */}
        <button type="submit">Save Assignment</button>
      </form>
    </div>
  );
}
