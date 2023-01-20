import LoginPage from "./pages/LoginPage/LoginPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import HomePage from "./pages/HomePage/HomePage"
import AddPage from "./pages/AddPage/AddPage"
import RemovePage from "./pages/RemovePage/RemovePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserProvider from "./contexts/UserContext"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          {/* <Route path="/nova-entrada" element={<AddPage />} /> */}
          {/* <Route path="/nova-saida" element={<RemovePage />} /> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}