// import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Techologies from "./components/Techologies"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <section id="Home"></section>
      <Navbar/>
      <div className="container mx-auto px-8">
      <Hero/>
      <section id="About"></section>
      <About/>
      <section id="Tools"></section>
      <Techologies/>
      <section id="Experience"></section>
      <Experience/>
      <section id="Project"></section>
      <Project/>
      <section id="Contact"></section>
      <Contact/>
      </div>
    </div>

  )
}

export default App
