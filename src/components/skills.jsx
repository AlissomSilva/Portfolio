import javaImg from "../assets/java2-logo.png";
import jsImg from "../assets/JavaScript-logo.png";
import pyImg from "../assets/python2-logo.png";
import reactImg from "../assets/react.png";

const skills = () =>{
    return(
        <div id="skills"className="bg-custom-gradiente-inverse m-20 max-w-full">
            <div className="grid justify-items-center m-10">
                <h1 className="text-3xl text-white mt-1o">
                    Skills
                </h1>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">

                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                React
                            </div>
                            <p className="mt-2 text-slate-500">
                                One of the things that fascinates me the most about React is its declarative approach to building user interfaces. Instead of manipulating the DOM directly, I can simply describe how the interface should look in different states, and React takes care of the rest.
                            </p>
                        </div>
                        <div className="md:shrink-0 p-5"> 
                            <img src={reactImg} alt="logo react" width={150} height={150} />
                        </div>
                    </div>
                    
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">

                    <div className="md:flex">
                    <div className="md:shrink-0 p-5"> 
                            <img src={javaImg} alt="logo java" width={90} height={90} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                            Java
                            </div>
                            <p className="mt-2 text-slate-500">
                            I'm quite enthusiastic about Java and love exploring its capabilities. One of the aspects that fascinates me the most about Java is its robust support for object-oriented programming (OOP). With Java's OOP features, I can organize my code around objects, which represent real-world entities and encapsulate both data and behavior. This approach promotes modularity, reusability, and maintainability, allowing me to build scalable and efficient applications.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">

                    <div className="md:flex">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                                JavaScript
                            </div>
                            <p className="mt-2 text-slate-500">
                            I have great appreciation for JavaScript and recognize its qualities. One of the characteristics I admire most about JavaScript is its versatility and reach. As a high-level, interpreted programming language, JavaScript is widely adopted in building web applications, providing interactivity and dynamism to websites.
                            </p>
                        </div>
                        <div className="md:shrink-0 p-5"> 
                            <img src={jsImg} alt="logo js" width={150} height={150} />
                        </div>
                    </div>
                    
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">

                    <div className="md:flex">
                    <div className="md:shrink-0 p-5"> 
                            <img src={pyImg} alt="logo python" width={150} height={150} />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                            Python
                            </div>
                            <p className="mt-2 text-slate-500">
                            First programming language I encountered and was fundamental to my entry into the development ecosystem. I also have knowledge in some Python frameworks, such as Pandas.Python is a remarkable programming language, with a wide range of features and a vibrant community. One of the characteristics I most appreciate about Python is its simplicity and readability. With a clean and intuitive syntax.
                            </p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <hr />
        </div>
    )
}

export default skills;