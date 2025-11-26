"use client";
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import * as client from "../client";

export default function PeopleDetails({ fetchUsers }: { fetchUsers?: () => void }) {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const router = useRouter();

  const fetchUser = async () => {
    if (!uid || uid === "new") return;
    const user = await client.findUserById(uid as string);
    setUser(user);
    setName(`${user.firstName} ${user.lastName}`);
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    if (fetchUsers) fetchUsers();
  };

  const deleteUser = async () => {
    if (!uid) return;
    if (window.confirm("Are you sure you want to delete this user?")) {
      await client.deleteUser(uid as string);
      router.push("/Account/Users");
      if (fetchUsers) fetchUsers();
    }
  };

  useEffect(() => {
    fetchUser();
  }, [uid]);

  if (!uid || uid === "new") return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25" style={{ zIndex: 1000 }}>
      <button
        onClick={() => router.push("/Account/Users")}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>

      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary fs-1" />
      </div>
      <hr />

      <div className="text-danger fs-4 mb-3">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
            style={{ cursor: "pointer" }}
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save"
            style={{ cursor: "pointer" }}
          />
        )}
        {!editing && (
          <div className="wd-name" onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <input
            className="form-control w-75 wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveUser();
            }}
          />
        )}
      </div>

      <div className="mb-2">
        <b>Role:</b> <span className="wd-roles">{user.role}</span>
      </div>
      <div className="mb-2">
        <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      </div>
      <div className="mb-2">
        <b>Section:</b> <span className="wd-section">{user.section}</span>
      </div>
      <div className="mb-3">
        <b>Total Activity:</b>{" "}
        <span className="wd-total-activity">{user.totalActivity}</span>
      </div>

      <hr />

      <button onClick={deleteUser} className="btn btn-danger w-100 mb-2 wd-delete">
        Delete
      </button>
      <button
        onClick={() => router.push("/Account/Users")}
        className="btn btn-secondary w-100 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}