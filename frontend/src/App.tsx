import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Login, Users } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
