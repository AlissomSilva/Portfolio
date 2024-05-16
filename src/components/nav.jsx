
import {AiOutlineClose} from "react-icons/ai"; 
import { useState } from "react";
import{HiMenuAlt1} from "react-icons/hi";
import { Link } from "react-scroll";


const nav = () => {
    const [toggle, setToggle] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offsetTop = section.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth' // animação suave
          });
        }
    }
    function openMenu(){
        setToggle(true);
    }
    function closeMenu(){
        setToggle(false);
    }

    return (
        <>

            <div className="bg-custom-gradient-dark">
                <div className="flex items-center justify-end px-6 lg:px-10 py-4 lg:py-6 ">
                    
                    <div className="space-x-4">
                        <div className="hidden lg:flex space-x-4">
                            
                        <Link to="skills" smooth={true} duration={700} className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Skills</Link>
                        <Link to="education" smooth={true} duration={700} className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl cursor-pointer">Education</Link>
                            
                        </div>
                        <div className="ssm:block lg:hidden">
                            {toggle ? (
                                <AiOutlineClose onClick={closeMenu} size={30} className="text-white cursor-pointer"/>
                            ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer"/>)}
                        
                        </div>
                    </div>
                </div>
                <div className="ssm:block lg:hidden">
                    {toggle ? 
                    (   
                        <div className="felx justify-between ml-10">
                        <ul>
                            <li className="text-white text-xl mb-2 cursor-pointer">Skills</li>
                            <li className="text-white text-xl mb-2 cursor-pointer">Projects</li>
                            <li className="text-white text-xl mb-2 cursor-pointer">Education</li>
                        </ul>
                        </div>
                    ):(
                        <div>

                        </div>
                    )
                    }
                    
                </div>
            </div>
        </>
    )
}

export default nav;
