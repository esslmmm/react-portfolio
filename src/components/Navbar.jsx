import { useState, useEffect } from 'react'
// import {Link} from 'react-scroll'

const Navbar = () => {

const [navActive, setNavActive] = useState(false)

const toggleMenu = () => {
  setNavActive(!navActive) //!flase = true
}

// const closeMenu = () =>{
//   setNavActive(flase)
// }

// useEffect(() => {
//   const handleResize = () => {
//     if (window.innerWidth <= 500){
//       closeMenu
//     }
//   }

//   window.addEventListener("resize", handleResize)

//   return () => {
//     window.removeEventListener("resize", handleResize)
//   }
// },[])

// useEffect(()=>{
//   if(window.innerWidth <= 1200) {
//     closeMenu
//   }
// },[])

  return (
    <div>

<nav className=" mx-auto flex items-center justify-between p-4 px-16 bg-neutral-950 fixed w-full z-10">

<div className="flex flex-shrink-0 items-center">
  <a  href="#" className=" text-4xl hover:text-cyan-400">𝐄𝐒</a>
</div>

<div className="md:hidden ">
  <button id="menu-toggle" className="text-white hover:text-yellow-400" onClick={toggleMenu}>
    <svg 
      fill="none" 
      stroke="currentColor" 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2"
      viewBox="0 0 24 24"
      className="w-6 h-6"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>
</div>

  <ul className="hidden md:flex items-center justify-center gap-6 text-base">
    <li>
    <a href="#Home" className="hover:text-cyan-400">Home</a>
    </li>
    <li>
    <a href="#About" className="hover:text-cyan-400">About</a>
    </li>
    <li>
    <a href="#Tools" className="hover:text-cyan-400">Tools</a>
    </li>
    <li>
    <a href="#Experience" className="hover:text-cyan-400">Experience</a>
    </li>
    <li>
    <a href="#Project" className="hover:text-cyan-400">Project</a>
    </li>
    <li>
    <a href="#Contact" className="hover:text-cyan-400">Contact</a>
    </li>
  </ul>


  

</nav>


{/* Mobile Menu */}
{navActive ? (
  <div className='mx-auto flex items-center justify-center mt-16 bg-neutral-950 fixed w-full z-10'>
    <ul className="flex flex-col md:hidden items-center justify-center gap-3 text-base w-full">
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#Home" className="hover:text-cyan-400 flex justify-center w-full">Home</a>
    </li>
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#About" className="hover:text-cyan-400 ">About</a>
    </li>
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#Tools" className="hover:text-cyan-400 ">Tools</a>
    </li>
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#Experience" className="hover:text-cyan-400 ">Experience</a>
    </li>
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#Project" className="hover:text-cyan-400 ">Project</a>
    </li>
    <li className='py-3 hover:bg-neutral-600 flex justify-center w-full'>
    <a href="#Contact" className="hover:text-cyan-400 ">Contact</a>
    </li>
  </ul>
  </div>
  ): null}



    </div>


  )
}

export default Navbar
