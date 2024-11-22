
import TreeParts from "./section/tree-parts";
import Hero from "./section/hero";
import AboutTree from "./section/about-tree";
import { EmblaCarousel } from "./components/EmblaCarousel";
import useParticles from "./utils/useParticles";
import { particlesOptions } from "./utils/useParticlesOptions";
import Particles from "@tsparticles/react";


function App() {

  const init = useParticles();
  const options = particlesOptions;

  return (
    <div className="bg-[#384B70]">

      {init && <Particles options={options} />}

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

        <section className=" py-10">

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
