import { useState } from "react";
import "./assets/css/index.css";
import { Button } from "./components/Button";
import { Nav } from "./components/Nav";
import {Card} from "./components/Card"
import {MainPage} from "./pages/MainPage"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <MainPage />
        {/* <Button onClick={() => {}} type="gradient">
          Fajny przycisk
        </Button> */}
        {/* <Card title="Turniej Junikowa" date="20.05.2022" registered={10} maxRegistered={10} city="Poznań" price={10}/> */}
      </div>
    </>
  );
}

export default App;
