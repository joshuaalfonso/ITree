import { RoughNotation } from "react-rough-notation";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";




const AboutTree = () => {

    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5},
    }

    const [isVisible, setIsVisible] = useState(false); // State to track visibility
    const ref = useRef(null); // Ref for the element to observe
    const inView = useInView(ref, { once: true }); // Observe element's visibility in the viewport

    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <div>
            <motion.div 
                className="flex items-center justify-center"
                ref={ref}
            >
                { isVisible && (
                     <RoughNotation type="highlight" color="#507687" show={true} animationDelay={2000} animationDuration={1200} strokeWidth={1}>
                     <motion.h1 
                        className="text-[#FCFAEE] text-3xl font-bell tracking-widest"
                        variants={variants}
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 'all', once: true }}
                        transition={{type: 'tween', delay: .5, duration: 0.5,  ease: [0.25, 0.8, 0.25, 1]}}
                        // variants={variants}  
                     >
                         About Our Work
                     </motion.h1>
                    </RoughNotation>
                )} 

            </motion.div>

            <motion.div 
                className="mt-[100px] mb-12 flex items-center justify-center overflow-visible"
                variants={variants}
                initial='hidden'
                whileInView='visible'
                viewport={{once: true}}
                transition={{duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01]}}  
            >
                <div className="relative">
                    <img src="red-minitree.png" className="rounded -rotate-3" width={300}/>
                    <img src="tape.png" className="rounded -rotate-[130deg] absolute -top-7 -left-9" width={100}/>
                    <img src="tape.png" className="rounded -rotate-[130deg] absolute -bottom-7 -right-9" width={100}/>
                </div>
            </motion.div>

            <div className="px-[40px] flex flex-col ">

                <motion.h1 
                    className="text-[#FCFAEE] text-4xl font-playful tracking-widest text-center"
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 1.5, ease: [0, 0.71, 0.2, 1.01]}}  
                >
                    <span className="font-christmasBox">
                        {`3`}</span> <span className="text-[#507687]">IT</span>ree <span className="font-christmasBox">{`3`}
                    </span> 
                </motion.h1>


                <motion.p 
                    className="text-[#FCFAEE] font-clouts tracking-widest text-2xl mt-4 text-center"
                    variants={variants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 2, ease: [0, 0.71, 0.2, 1.01]}}  
                >
                    Our Sustainable iTree is an innovative project that utilizes recycled materials, such as LAN cables, old circuit boards, wires, and other electronic waste. <br></br> <br></br>
                    to create a functional, eco-friendly symbol of our commitment to sustainability in the tech industry.
                </motion.p>


                {/* <p className="text-[#FCFAEE] font-clouts tracking-widest text-2xl mt-4 text-center">
                to create a functional, eco-friendly symbol of our commitment to sustainability in the tech industry.
                </p> */}


                {/* const text = "Framer Motion is a really cool tool".split(" ");

  return (
    <div className="App">
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  ); */}


            </div>
        </div>
    )
}

export default AboutTree;