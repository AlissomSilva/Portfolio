import UepbImg from "../assets/uepb-img.svg";

const Education = () => {
    return (
        <div id="education" className="bg-custom-gradiente-inverse w-3/4 mx-auto p-5 bg-gray-200 relative">
            <div className="grid justify-items-center m-10 mt-0">
                <h1 className="text-3xl text-white">
                    Education
                </h1>
                
                <p className="text-2xl text-white mt-10">I am currently pursuing a Bachelor's degree in Computer Science at the State University of Paraíba (UEPB), located in Campina Grande city, with an expected graduation date in the middle of 2026.</p>
                <img src={UepbImg} alt="logo uepb" width={150} height={150}/>
            
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-px bg-gray-300"></div>
        </div>
    )
}

export default Education;
