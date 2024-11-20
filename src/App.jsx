import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { RoughNotation } from "react-rough-notation";


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
      {init && <Particles options={options} particlesLoaded={particlesLoaded}/>}
      <div className=' max-w-xl mx-auto px-5 min-h-svh'>
        

      <section className="h-dvh flex flex-col gap-12 items-center justify-center">
        <img src="tree.svg" className="w-full h-[300px]"></img>
        <div>
            <h1 className="text-6xl text-[#FCFAEE] font-bell text-center">
              Merry Chr<span className="text-green-600">i</span>s<span className="text-green-600">t</span>mas!
            </h1>
          <p className="text-[#FCFAEE] text-2xl text-center font-clouts tracking-widest">
            A 🎄 for Every Tradition, <br></br> 
            Celebrate  <RoughNotation type="highlight" color="#e32636" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>Christmas</RoughNotation> in Style!
          </p>
        </div>
        
        <button className="flex flex-col items-center justify-center">
          <img src="arrow.png" width={30}></img>
          <span className="text-[#FCFAEE] font-clouts tracking-widest">Scroll</span>
        </button>
      </section>


      <section>
        <h1 className="text-center text-[#FCFAEE] py-10">About Us</h1>
      </section>

      </div>
    </div>
  )
}

export default App
