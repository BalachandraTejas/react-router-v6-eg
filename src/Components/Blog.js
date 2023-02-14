import { Outlet, Link } from "react-router-dom";

export default function Blog () {
  return (
    <>
    <h1>Categories:</h1>
    <ul>
      <li><Link to="tech">Tech</Link></li>
      <li><Link to="science">Science</Link></li>
      <li><Link to="education">Education</Link></li>
    </ul>
    <p></p>
    <Outlet />
    </>
  )
};