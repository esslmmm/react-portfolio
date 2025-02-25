
import {HERO_CONTENT} from "../constants"
import profilePic from "../assets/Profile.jpg"
import {  motion } from "framer-motion"
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const animation = (delay) => ({
  hidden: {x:-100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition: {duration:0.5, delay: delay}
  }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-32">
        <div className="flex flex-wrap ">
          
            <div className=" w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={animation(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Ekkarat Singkhala</motion.h1>
                <motion.span
                variants={animation(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent">Full Stack Developer</motion.span>
                <p className="flex flex-row gap-6 mt-5">
                  <motion.a
                  variants={animation(0.5)}
                  initial="hidden"
                  animate="visible"
                  href="#"
                  className="text-4xl"><FaLinkedin /></motion.a>
                  <motion.a 
                  variants={animation(0.5)}
                  initial="hidden"
                  animate="visible"
                  href="#"
                  className="text-4xl"><FaGithub/></motion.a>
                  <motion.a 
                  variants={animation(0.5)}
                  initial="hidden"
                  animate="visible"
                  href="#"
                  className="text-4xl"><FaInstagram /></motion.a>
                </p>
                <motion.p 
                variants={animation(0.5)}
                initial="hidden"
                animate="visible"
                className="my-1 max-w-xl py-6 font-light tracking-tighter">
                  {HERO_CONTENT}
                </motion.p>
              </div>
            </div>


            <div className="w-full lg:w-1/2 lg-p-8">
              <div className="flex justify-center m-5">
                <motion.img 
                initial={{x:100, opacity:0}} 
                animate={{x:0, opacity:1}}
                transition={{duration:1, delay:0.5}}
                className=" rounded-2xl" src={profilePic} alt="Profile" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
