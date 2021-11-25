import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./views/HomePage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
