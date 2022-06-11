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
import { ProfilePage } from "./pages/ProfilePage";
import { HistoryPage } from "./pages/HistoryPage";
import { NewTournamentPage } from "./pages/NewTournamentPage";

function App() {
  return (
    <>
      <Nav />
      <div className="custom-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/tournament/:tournamentId" element={<TournamentPage />} />
          <Route path="/new_tournament" element={<NewTournamentPage />} />
          <Route path="*" element={<MainPage />} />
          {/* <Route path="*" element={<NewTournamentPage />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
