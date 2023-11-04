import "./App.css"
import Home from "./Pages/Home/Home"
import Main from "./Pages/Main/Main"
import Main2 from "./Pages/Main/Main2"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Main2 />} />
      </Routes>
    </Router>
  )
}
