import { RoughNotation } from "react-rough-notation";
import { motion } from "motion/react";




const Hero = () => {

    return ( 
        <>
            {/* e32636 */}
            <motion.img 
                initial={{opacity: 0, scale: 0.5}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} 
                src="hero-tree.svg" 
                className="w-full h-[300px]"
            ></motion.img> 

            <div>
                <motion.h1
                    initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8, delay: 0.8, ease: [0, 0.71, 0.2, 1.01]}} 
                    className="text-6xl text-[#FCFAEE] font-playful text-center tracking-wide" 
                >
                      {`(`}erry hr<span className="text-[#507687]">i</span>s<span className="text-[#507687]">t</span>mas{`)`}
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.8, delay: 1.1, ease: [0, 0.71, 0.2, 1.01]}}  
                    className="text-[#FCFAEE] text-2xl text-center font-clouts tracking-widest"
                >
                     A <span className="font-christmasBox text-2xl">“</span> for Every Tradition, <br></br> 
                    Celebrate  <RoughNotation type="underline" color="#507687" show={true} animationDelay={2200} animationDuration={1300} strokeWidth={1}>Christmas</RoughNotation> in Style.
                </motion.p>
                {/* 🎄 */}

            </div>
            
            <motion.button 
                className="flex flex-col items-center justify-center"
                animate={{y: 0}}
                initial={{y:'100vh'}}
                transition={{type: 'tween', delay: 1.3, duration: 0.5,  ease: [0.25, 0.8, 0.25, 1]}}
            >   
                <motion.img 
                    src="arrow.png" 
                    width={30}
                    animate={{
                        y: [0, -10, 0], // Move up and then back to the original position
                    }}
                    transition={{
                        delay: 1.3,
                        repeat: Infinity,   // Repeat the animation infinitely
                        repeatType: "loop", // Loop the animation
                        duration: 2,        // Set the time for one full loop
                        ease: "easeInOut",  // Smooth easing for floating effect
                    }}
                ></motion.img>
                {/* <span className="text-[#FCFAEE] font-clouts tracking-widest">Scroll</span> */}
            </motion.button>
        </>
    )
}

export default Hero;