import { RoughNotation } from "react-rough-notation";
import { motion } from "motion/react";
import ITree from '../assets/working-img/IMG_6586.png';



const AboutTree = () => {

    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5},
    }

    return (
        <div>
            <motion.div 
                className="flex items-center justify-center"
            >
                     <RoughNotation type="highlight" color="#507687" show={true} animationDelay={2000} animationDuration={1200} strokeWidth={1}>
                        <motion.h1 
                            className="text-[#FCFAEE] text-3xl font-bell tracking-widest"
                            // variants={variants}  
                        >
                            About Our Work
                        </motion.h1>
                    </RoughNotation>

            </motion.div>

            <div 
                className="mt-[100px] mb-12 flex items-center justify-center overflow-visible"
            >
                <div className="relative">
                    <img src={ITree} className="rounded -rotate-3" width={300}/>
                    <img src="tape.png" className="rounded -rotate-[130deg] absolute -top-7 -left-9" width={100}/>
                    <img src="tape.png" className="rounded -rotate-[130deg] absolute -bottom-7 -right-9" width={100}/>
                </div>
            </div>

            <div className="px-[40px] flex flex-col ">

                <h1 
                    className="text-[#FCFAEE] text-4xl font-playful tracking-widest text-center"
                >
                    <span className="font-christmasBox">
                        {`3`}</span> <span className="text-[#507687]">IT</span>ree <span className="font-christmasBox">{`3`}
                    </span> 
                </h1>


                <p 
                    className="text-[#FCFAEE] font-clouts tracking-widest text-2xl mt-4 text-center"
                >
                    Our sustainable iTree is a groundbreaking initiative that transforms discarded materials such as scrap wood, old papers, scrap metal, and surplus wires into a functional, eco-friendly symbol of sustainability. <br></br> <br></br>
                    By repurposing these everyday waste materials, we not only reduce landfill waste but also demonstrate our commitment to driving positive change in the industry. 
                </p>


            </div>
        </div>
    )
}

export default AboutTree;