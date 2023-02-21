import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Cats, Login, Users, Dogs, Customers, Registration } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/dogs" element={<Dogs />} />
      <Route path="/cats" element={<Cats />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
