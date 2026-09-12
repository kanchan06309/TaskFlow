import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AllTasks from "./pages/AllTasks";
import Profile from "./pages/Profile";

export const DEMO_USER = {
  name: "Kanchan",
  email: "demo@taskflow.app",
  password: "Demo@123"
};

const starterTasks = [
  { id: 1, title: "Complete DSA Assignment", description: "Solve 5 array problems and submit the assignment.", dueDate: "2026-09-12", priority: "High", category: "Study", status: "Pending", createdAt: "2026-09-09" },
  { id: 2, title: "Work on Task Manager", description: "Finish the dashboard UI and connect the API.", dueDate: "2026-09-14", priority: "Medium", category: "Work", status: "Pending", createdAt: "2026-09-10" },
  { id: 3, title: "Submit Project Report", description: "Upload the final project report.", dueDate: "2026-09-10", priority: "Low", category: "College", status: "Completed", createdAt: "2026-09-08" },
  { id: 4, title: "Prepare presentation", description: "Create the final slides for the project demo.", dueDate: "2026-09-16", priority: "High", category: "College", status: "Pending", createdAt: "2026-09-11" },
  { id: 5, title: "Read FastAPI documentation", description: "Review authentication and dependency injection.", dueDate: "2026-09-18", priority: "Low", category: "Learning", status: "Pending", createdAt: "2026-09-11" }
];

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("taskflow_user") || "null"));
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("taskflow_tasks") || "null") || starterTasks);

  useEffect(() => localStorage.setItem("taskflow_tasks", JSON.stringify(tasks)), [tasks]);
  useEffect(() => {
    if (user) localStorage.setItem("taskflow_user", JSON.stringify(user));
    else localStorage.removeItem("taskflow_user");
  }, [user]);

  const login = (email, password) => {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setUser({ name: DEMO_USER.name, email: DEMO_USER.email });
      return { ok: true };
    }
    return { ok: false, message: "Invalid demo credentials. Use demo@taskflow.app / Demo@123" };
  };

  const signup = (name, email, password) => {
    setUser({ name: name || "User", email });
    return { ok: true };
  };

  const logout = () => setUser(null);

  const addTask = (task) => {
    setTasks(prev => [{ ...task, id: Date.now(), createdAt: new Date().toISOString().slice(0,10) }, ...prev]);
  };

  const updateTask = (updated) => {
    setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
  };

  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));
  const toggleTask = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === "Completed" ? "Pending" : "Completed" } : t));

  return (
    <Routes>
      <Route path="/" element={<Landing user={user} />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <Login onLogin={login} />} />
      <Route path="/signup" element={user ? <Navigate to="/dashboard" replace /> : <Signup onSignup={signup} />} />
      <Route path="/dashboard" element={user ? <Dashboard user={user} tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onAdd={addTask} onUpdate={updateTask} onLogout={logout} /> : <Navigate to="/login" replace />} />
      <Route path="/tasks" element={user ? <AllTasks user={user} tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onUpdate={updateTask} onAdd={addTask} onLogout={logout} /> : <Navigate to="/login" replace />} />
      <Route path="/profile" element={user ? <Profile user={user} setUser={setUser} onLogout={logout} /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;