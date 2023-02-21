import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Login, Users, Customers, Registration } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
