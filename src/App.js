import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HomePage from "./pages/HomePage/HomePage"
import InletPage from "./pages/InletPage/InletPage"
import OutletPage from "./pages/OutletPage/OutletPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/inlet" element={<InletPage />} />
          <Route path="/outlet" element={<OutletPage />} />
        </Routes>
    </BrowserRouter>
  )
}