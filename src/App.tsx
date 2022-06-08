import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/index.css";
import { Button } from "./components/Button";
import { Nav } from "./components/Nav";
import { Card } from "./components/Card";
import { MainPage } from "./pages/MainPage";
import { TournamentPage } from "./pages/Tournament/TournamentPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { OptionList } from "./components/OptionList";

function App() {
  return (
    <>
      <Nav />
      <div className="custom-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tournament/:tournamentId" element={<TournamentPage />} />
          <Route path="*" element={<MainPage />} />
          {/* <Route path="*" element={<OptionList />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
