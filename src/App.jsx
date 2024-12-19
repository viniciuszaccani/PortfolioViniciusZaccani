import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import './App.css'
import HomePage from "./components/home/HomePage";
import SobrePage from "./components/about/SobrePage";
import ContactPage from "./components/contact/ContactPage";

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
