import TreeParts from "./section/tree-parts";
import Hero from "./section/hero";
import AboutTree from "./section/about-tree";
import { EmblaCarousel } from "./components/EmblaCarousel";
import useParticles from "./utils/useParticles";
import { particlesOptions } from "./utils/useParticlesOptions";
import Particles from "@tsparticles/react";
import 'react-photo-view/dist/react-photo-view.css';
import TeamPictures from "./section/team-pictures";
import { useEffect, useState } from "react";



const Home = () => {


    const [isLoading, setIsLoading]= useState(true);

    const init = useParticles();
    const options = particlesOptions;

    useEffect(() => {

        const preLoader = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 1000)
        }

        preLoader();
    }, [])

    return (
    <div className="bg-[#384B70]">

      {init && !isLoading && <Particles options={options} />}

        <div className=' max-w-xl mx-auto px-5 min-h-svh overflow-hidden'>

            {isLoading && (
                <section className="h-svh flex items-center justify-center">
                    <img src="pre-loader.gif" alt="gif" />
                </section>
            )}

            {!isLoading && (
                <main>
                <section className="h-svh flex flex-col gap-12 items-center justify-center">
                    <Hero />
                </section>

                <section id="AboutTree" className="min-h-svh px-5 py-12">
                    <AboutTree />
                </section>

                <section className="px-5 py-12">
                    <TreeParts />
                </section>

                <section className=" py-10">

                    <TeamPictures />

                </section>
                </main>
            )}

        </div>

      {/* <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="max-w-xl mx-auto bg-[#384B70] h-svh w-full">

            modal container
        </div>
      </div> */}

    </div>
    )
}


export default Home;