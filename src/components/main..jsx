import Nav from "./nav";
import Hero from "./hero";
import Skills from "./skills"
import Education from "./education";
import Footer from "./footer";


export const main = () => {
    return (
        <div className="bg-custom-gradient-dark ">
            <Nav />
            <Hero />
            <Skills/>
            <Education/>
            <Footer/>
            
        </div>
    );
};

export default main;
