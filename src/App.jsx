import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import TreeParts from "./tree-parts";
import Hero from "./hero";
import AboutTree from "./about-tree";
import { EmblaCarousel } from "./EmblaCarousel";
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
        setInit(false);
    });
    console.log('rendered')
    window.scrollTo(0, 0);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="bg-[#384B70]">


      {init && <Particles options={options} particlesLoaded={particlesLoaded}/>}

      <div className=' max-w-xl mx-auto px-5 min-h-svh overflow-hidden'>

      <section className="h-svh flex flex-col gap-12 items-center justify-center">
        <Hero />
      </section>

      <section className="px-5 py-12">
        <AboutTree />
      </section>

      <section className="px-5 py-12">
        <TreeParts />
      </section>

      <section className=" py-4">

        <h1 
          className="text-[#FCFAEE] text-3xl font-bell tracking-widest text-center mb-12"
        >
            Team Pictures
        </h1>


        <EmblaCarousel />
      </section>

      </div>
    </div>
  )
}

export default App
