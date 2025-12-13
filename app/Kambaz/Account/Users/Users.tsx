"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import * as client from "./client";

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  email?: string;
  loginId?: string;
  section?: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [roleFilter, setRoleFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const fetchedUsers = await client.findAllUsers();
      setUsers(fetchedUsers);
      setAllUsers(fetchedUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = allUsers;

    if (roleFilter) {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    if (nameFilter) {
      filtered = filtered.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(nameFilter.toLowerCase());
      });
    }

    setUsers(filtered);
  }, [roleFilter, nameFilter, allUsers]);

  const handleUserClick = (userId: string) => {
    router.push(`/Kambaz/Account/Users/${userId}`);
  };

  const addNewUser = async () => {
    const newUser = {
      username: `user${Date.now()}`,
      password: "password123",
      firstName: "New",
      lastName: "User",
      role: "STUDENT",
      email: `user${Date.now()}@northeastern.edu`,
      loginId: `001${Date.now()}`,
      section: "S101",
      totalActivity: "0:00:00",
    };

    try {
      const created = await client.createUser(newUser);
      setAllUsers([...allUsers, created]);
      setUsers([...users, created]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Users</h2>
        <button
          onClick={addNewUser}
          className="btn btn-danger d-flex align-items-center gap-2"
        >
          <FaPlus />
          People
        </button>
      </div>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-3">
          <label className="form-label fw-bold">Filter by Role:</label>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="form-select"
          >
            <option value="">All Roles</option>
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
            <option value="TA">TA</option>
            <option value="USER">User</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label fw-bold">Search by Name:</label>
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Type a name..."
            className="form-control"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
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
            {users.map((user) => (
              <tr
                key={user._id}
                onClick={() => handleUserClick(user._id)}
                style={{ cursor: "pointer" }}
                className="wd-user-row"
              >
                <td className="text-nowrap">
                  <FaUserCircle className="me-2 fs-5 text-secondary" />
                  <span className="text-danger fw-bold wd-user-name">
                    {user.firstName} {user.lastName}
                  </span>
                </td>
                <td className="wd-login-id">{user.loginId || "N/A"}</td>
                <td className="wd-section">{user.section || "N/A"}</td>
                <td className="wd-role">{user.role}</td>
                <td>--</td>
                <td className="wd-total-activity">
                  {(user as any).totalActivity || "0:00"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {users.length === 0 && (
          <div className="text-center text-muted py-4">
            No users found
          </div>
        )}
      </div>
    </div>
  );
}