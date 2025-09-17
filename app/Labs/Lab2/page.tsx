"use client";

import Link from "next/link";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h1>Lab 2 - Forms</h1>
      <p>Name: Mrunal Golivadekar | WebDev Online(Fall 2025)</p>

      <h2>Form Elements</h2>
      <form>
        <label>Username: </label>
        <input type="text" defaultValue="username" />
        <br />
        <label>Password: </label>
        <input type="password" defaultValue="password" />
        <br />
        <label>First Name: </label>
        <input type="text" defaultValue="Mrunal" />
        <br />
        <label>Last Name: </label>
        <input type="text" defaultValue="Golivadekar" />
        <br />
        <label>Email: </label>
        <input type="email" defaultValue="mrunal@neu.edu" />
        <br />
        <label>Salary: </label>
        <input type="number" defaultValue={50000} />
        <br />
        <label>Biography: </label>
        <textarea defaultValue="This is my bio." />
        <br />
        <label>Upload File: </label>
        <input type="file" />
        <br />

        {/* Radios */}
        <h3>Favorite Genre (Radio)</h3>
        <input type="radio" name="genre" value="comedy" /> Comedy
        <input type="radio" name="genre" value="drama" /> Drama
        <input type="radio" name="genre" value="scifi" /> SciFi
        <input type="radio" name="genre" value="fantasy" /> Fantasy
        <br />

        {/* Checkboxes */}
        <h3>Favorite Genres (Checkboxes)</h3>
        <input type="checkbox" /> Comedy
        <input type="checkbox" /> Drama
        <input type="checkbox" /> SciFi
        <input type="checkbox" /> Fantasy
        <br />

        {/* Dropdowns */}
        <h3>Select One Option</h3>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <br />

        <h3>Select Many Options</h3>
        <select multiple>
          <option>Choice A</option>
          <option>Choice B</option>
          <option>Choice C</option>
        </select>
        <br />

        {/* Range and Date */}
        <label>Rating: </label>
        <input type="range" min="0" max="10" />
        <br />
        <label>DOB: </label>
        <input type="date" defaultValue="2000-01-01" />
      </form>
      <h2>Back button</h2>
      <Link href="/Labs">
        <button style={{ marginTop: "20px" }}>← Back to Labs</button>
      </Link>
    </div>
  );
}
