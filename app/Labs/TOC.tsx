import Link from "next/link";

export default function TOC() {
  return (
    <div>
      <h2>Table of Contents</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <Link href="/Labs" id="wd-labs-link">
            Labs Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1 - HTML Examples
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2 - CSS Basics
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3 - JavaScript Fundamentals
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4 - State Management
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li className="list-group-item">
          <a href="https://github.com/mrunalg25/kambaz-next-js" id="wd-github" target="_blank">
            My GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}