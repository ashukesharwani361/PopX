import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Settings from "./pages/Settings";

export default function AllRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Settings />} />
        </Routes>
    )
}