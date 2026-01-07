import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import CreateUser from "./admin/CreateUser";
import AssignRole from "./admin/AssignRole";
import AuditLogs from "./admin/AuditLogs";
import UserList from "./user/UserList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/create-user" element={<CreateUser />} />
        <Route path="/admin/assign-role" element={<AssignRole />} />
        <Route path="/admin/audit" element={<AuditLogs />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}
