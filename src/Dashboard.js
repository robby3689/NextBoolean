import { auth } from "./firebase";

function Dashboard() {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
