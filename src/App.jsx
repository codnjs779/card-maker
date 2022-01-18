import "./App.module.css";
//Router
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/loginBox/Login";
import Template from "./components/TemplateAll/Template";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/template" element={<Template />} />
        </Routes>
    );
}

export default App;
