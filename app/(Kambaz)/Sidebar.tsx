import Link from "next/link";

export default function KambazSidebar() {
  return (
    <aside
      style={{
        width: "220px",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>Kambaz</h3>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        <li style={{ marginBottom: "12px" }}>
          <a href="https://www.northeastern.edu" target="_blank" rel="noopener noreferrer">
            NEU
          </a>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Account">Account</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Courses/Home">Courses</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Calendar">Calendar</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Inbox">Inbox</Link>
        </li>
        <li style={{ marginBottom: "12px" }}>
          <Link href="/Labs">Labs</Link>
        </li>
      </ul>
    </aside>
  );
}
