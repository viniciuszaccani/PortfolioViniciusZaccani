import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import './App.css'
import HomePage from "./components/home/HomePage";
import SobrePage from "./components/about/SobrePage";
import ContactPage from "./components/contact/ContactPage";
import ProjectsPage from "./components/projects/ProjectsPage";
import ErrorPage from "./components/error/ErrorPage";

function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="*" element={<ErrorPage/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
