import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./views/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import DetailProduct from "./views/DetailProductClothes";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:slug" element={<DetailProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
