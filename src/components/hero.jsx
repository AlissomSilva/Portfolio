import { BsTwitterX, BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import MyPic from "../assets/MePic.png"
import bandEUA from "../assets/bandeiraEUA.png"
import bandBR from "../assets/bandeiraBR.png"

const hero = () => {
    return (
        <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white bg-custom-gradient-dark">
            
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-slate-300">I'm</p>
                <h1 className="text-6xl">Alissom Silva
                </h1>
                <hr />
                
                <p className="mt-10 text-slate-300 font-sans">Hello, I'm a student and passionate about software development, whether it's back-end or front-end. I enjoy solving real-world problems through the tools that various technologies offer. If you'd like to get in touch with me, my social media links are listed here on the side so you can reach out to me for possible suggestions or to exchange ideas.</p>
            </div>
            <div className="w-1/3 items-center ssm:w-fit">
                <img src={MyPic} alt="" width={250} height={250} className="rounded-full w-full border-8 border-white"/>
                <div className="flex justify-center mt-5 space-x-4 cursor-pointer">
                    <a href="https://twitter.com/AlissomRod41996" target="_blank" rel="noopener noreferrer">
                        <BsTwitterX size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    </a>
                    <a href="https://www.instagram.com/alissom.silva1/" target="_blank" rel="noopener noreferrer">
                        <BsInstagram size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    </a>
                    <a href="https://github.com/AlissomSilva" target="_blank">
                        <BsGithub size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    </a>
                    <a href="https://www.linkedin.com/in/alissom-silva-a33929214/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
                    </a>
                </div>

            </div>
            <div className=" w-1/3 ssm:w-fit ">
                <p className="text-4xl mb-4">Languages</p>
                <div className="flex">
                <img  src={bandEUA} alt="bandeira EUA" className="w-6 h-6"  />
                <p>
                    English - Intermediate
                </p>
                </div>

                <div className="flex">
                <img  src={bandBR} alt="bandeira BR" className="w-6 h-6"  />
                <p>
                    Portuguese-BR - Native
                </p>
                </div>
                

                
            </div>
        </section>
    )
}

export default hero