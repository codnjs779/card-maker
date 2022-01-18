import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

reportWebVitals();
