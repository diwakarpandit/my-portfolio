
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-4 h-[40vh]">
    <div id="contact" className="flex gap-2 items-center justify-center">
      <h1 className="text-white text-2xl py-2">Reach out to me -</h1>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/diwakar-pandit/"><FaLinkedin className="text-blue-500 text-3xl"/></a>
        <a href="https://github.com/diwakarpandit"><FaGithub className="text-white text-3xl"/></a>

      </div>
    </div>
       <p className="flex gap-2 text-white items-center"> <IoMailOutline/> panditdiwakar19@gmail.com</p>
       <p className="flex gap-2 text-white items-center"> <IoIosCall/> +91 94336 80004</p>
    </div>


  )
}

export default Contact
