import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import TreeParts from "./tree-parts";


function App() {
  const options = {
    particles: {
      color: {
        value: "#fff"
      },
      number: {
        value: 50
      },
      opacity: {
        value: {min: 0.3, max: 1}
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min:1, max:5}
      },
      move: {
        direction: "bottom-right",
        enable: true,
        speed: {min: 3, max: 5},
        straight: true
      }
    }
  }

  const [ init, setInit ] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
        await loadSlim(engine);
    }).then(() => {
        setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="bg-[#384B70]">
      {/* {init && <Particles options={options} particlesLoaded={particlesLoaded}/>} */}
      <div className=' max-w-xl mx-auto px-5 min-h-svh overflow-hidden'>
         

      <section className="h-dvh flex flex-col gap-12 items-center justify-center">
        <img src="tree.svg" className="w-full h-[300px]"></img>
        <div>
            <h1 className="text-6xl text-[#FCFAEE] font-bell text-center">
              Merry Chr<span className="text-green-600">i</span>s<span className="text-green-600">t</span>mas!
            </h1>
          <p className="text-[#FCFAEE] text-2xl text-center font-clouts tracking-widest">
            A 🎄 for Every Tradition, <br></br> 
            Celebrate  <RoughNotation type="underline" color="#16a14a" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>Christmas</RoughNotation> in Style!
          </p>
        </div>
        
        <button className="flex flex-col items-center justify-center">
          <img src="arrow.png" width={30}></img>
          <span className="text-[#FCFAEE] font-clouts tracking-widest">Scroll</span>
        </button>
      </section>


      <section className="px-5 py-12">
        <div className="flex items-center justify-center">
        <RoughNotation type="highlight" color="#507687" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>
          <h1 className="text-[#FCFAEE] text-3xl font-bell tracking-widest">About Our Work</h1>
        </RoughNotation>
        </div>

        <div className="mt-[80px] mb-12 flex items-center justify-center">
          <div className="relative">
            <img src="our-tree.webp" className="rounded -rotate-3" width={300}/>
            <img src="tape.png" className="rounded -rotate-[130deg] absolute -top-7 -left-9" width={100}/>
            <img src="tape.png" className="rounded -rotate-[130deg] absolute -bottom-7 -right-9" width={100}/>
          </div>
        </div>

        <div className="px-[40px] flex flex-col ">
          {/* <RoughNotation type="underline" color="#16a14a" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}> */}
          <h1 className="text-[#FCFAEE] text-3xl font-clouts">
            <span className="text-green-600">iT</span>ree
          </h1>
          {/* </RoughNotation> */}
          <p className="text-[#FCFAEE] font-clouts tracking-widest text-xl mt-4">Our Sustainable iTree is an innovative project that utilizes recycled materials, such as LAN cables, old circuit boards, wires, and other electronic waste, to create a functional, eco-friendly symbol of our commitment to sustainability in the tech industry.</p>
        </div>
      </section>

      <section className="px-5 py-12">
        <TreeParts />
      </section>

      </div>
    </div>
  )
}

export default App
