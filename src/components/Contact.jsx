import { CONTACT } from "../constants"
import { motion } from "framer-motion"
import { FaLinkedin,FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
        whileInView={{opacity:1 ,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <motion.div
        whileInView={{opacity:1 ,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        className=" text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b"></a>
            {CONTACT.email}
        </motion.div>
    </div>
  )
}

export default Contact
