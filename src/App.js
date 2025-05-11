import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { UserContext } from "./UserContext";

// Import your pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import RegisterPage from "./RegisterPage";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currUser) => setUser(currUser));
    return () => unsub();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/courses"
            element={user ? <Courses /> : <Login />}
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
