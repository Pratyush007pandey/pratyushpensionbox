import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import NoteState from "./Context/notes/NoteState";
import LandingPage from "./Components/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        <BrowserRouter>
          {" "}
          <NoteState>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products/:id" element={<Details />} />
            </Routes>
          </NoteState>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
