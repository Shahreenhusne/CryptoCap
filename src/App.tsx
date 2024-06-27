import { Routes, Route } from "react-router-dom";
import { Coins } from "./pages/Coins/Coins";
import { Home } from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
  <>
      <div className="min-h-screen bg-gradient-to-r from-[#ffd89b] to-[#19547b]">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/coin/:coinID" element={<Coins/>}></Route>
          </Routes>
    </div>
  </>
  )
}

export default App
