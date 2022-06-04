import { useState } from "react";
import "./assets/css/index.css";
import { Button } from "./components/Button";
import { Nav } from "./components/Nav";
import {Card} from "./components/Card"

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        {/* <Button onClick={() => {}} type="gradient">
          Fajny przycisk
        </Button> */}
        <Card/>
      </div>
    </>
  );
}

export default App;
