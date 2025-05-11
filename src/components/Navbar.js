import { useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/resources">Resources</Link>
      {user ? (
        <button onClick={() => auth.signOut()}>Logout</button>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
