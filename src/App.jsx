import "./App.module.css";
import { db } from "./config/firebase-config";
import { collection, getDocs } from "firebase/firestore";
//Router
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/loginBox/Login";
import Template from "./components/templateAll/Template";
import { useEffect } from "react";

function App() {
    const usersCollectionRef = collection(db, "users");
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log(data);
        };
        getUsers();
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/template" element={<Template />} />
        </Routes>
    );
}

export default App;
