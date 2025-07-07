import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./components/Signup.jsx";
import Me from "./components/Me.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
