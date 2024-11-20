import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";



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
    <>
     <section className="bg-[#384B70]">
      {init && <Particles options={options} particlesLoaded={particlesLoaded}/>}
      <div className='bg-white-500 min-h-svh max-w-xl mx-auto flex flex-col gap-10 items-center justify-center px-5'>
        <img src="tree.svg" className="w-full h-[300px]"></img>
        <div>
          <h1 className="text-7xl text-[#FCFAEE] font-bell">
            Merry Chr<span className="text-green-600">i</span>s<span className="text-green-600">t</span>mas!
          </h1>
          <p className="text-[#FCFAEE]">A Tree for Every Tradition: Celebrate Christmas in Style!</p>
        </div>
        
      </div>
     </section>
    </>
  )
}

export default App
