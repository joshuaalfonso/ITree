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
     <section className="bg-green-500">
      {init && <Particles options={options} particlesLoaded={particlesLoaded}/>}
      <div className='bg-green-500 min-h-svh max-w-xl mx-auto flex items-center justify-center px-5'>
        <img src="tree.svg" className="w-full h-[300px]"></img>
      </div>
     </section>
    </>
  )
}

export default App
