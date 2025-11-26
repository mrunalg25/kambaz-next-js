"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "../client";
import { FaPlusCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import PeopleDetails from "./Details";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const { uid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
  try {
    const newUser = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      email: `newuser${users.length + 1}@northeastern.edu`,
      section: "S101",
      role: "STUDENT",
    });
    setUsers([...users, newUser] as any[]);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

//   const createUser = async () => {
//     const newUser = await client.createUser({
//       firstName: "New",
//       lastName: `User${users.length + 1}`,
//       username: `newuser${Date.now()}`,
//       password: "password123",
//       email: `newuser${users.length + 1}@northeastern.edu`,
//       section: "S101",
//       role: "STUDENT",
//     });
//     setUsers([...users, newUser]);
//   };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  if (!currentUser || currentUser.role !== "ADMIN") {
    return <div className="p-4">Access Denied. Admin only.</div>;
  }

  return (
    <div className="p-4">
      <PeopleDetails fetchUsers={fetchUsers} />
      
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Users</h3>
        <button
          onClick={createUser}
          className="btn btn-danger"
          id="wd-add-people"
        >
          <FaPlusCircle className="me-2" />
          People
        </button>
      </div>

      <div className="d-flex gap-2 mb-3">
        <input
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="form-control w-25"
          id="wd-filter-by-name"
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25"
          id="wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>

      <table className="table table-striped" id="wd-people-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link
                  href={`/Account/Users/${user._id}`}
                  className="text-decoration-none text-dark"
                >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}