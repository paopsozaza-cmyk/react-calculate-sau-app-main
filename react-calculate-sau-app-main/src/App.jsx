import { HashRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Bmi from "./pages/Bmi"
import Bmr from "./pages/Bmr"
import Car from "./pages/Car"

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </HashRouter>    
    </>
  )
}
