
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import About from "./component/About"
import Techologies from "./component/Techologies"
import Experience from "./component/Experience"
import Project from "./component/Project"
import Contact from "./component/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <About/>
      <Techologies/>
      <Experience/>
      <Project/>
      <Contact/>
      </div>
    </div>

  )
}

export default App
