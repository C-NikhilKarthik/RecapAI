import "./App.css"
import Home from "./Pages/Home/Home"
import Main from "./Pages/Main/Main"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Main />} />
      </Routes>
    </Router>
  )
}
