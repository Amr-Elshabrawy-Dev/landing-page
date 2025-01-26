import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login";
import StartNow from "./pages/StartNow/StartNow.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./normalize.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="startNow" element={<StartNow />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </HashRouter>
);
