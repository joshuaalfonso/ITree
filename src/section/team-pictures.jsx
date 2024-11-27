import { RoughNotation } from "react-rough-notation";
import { EmblaCarousel } from "../components/EmblaCarousel";


const TeamPictures = () => {
    return (
        <>
        
            <div className="flex items-center justify-center">
            <RoughNotation type="highlight" color="#507687" show={true} animationDelay={2000} animationDuration={1200} strokeWidth={1}>
                <h1 
                    className="text-[#FCFAEE] text-3xl font-bell tracking-widest text-center"
                >
                    Team Pictures
                </h1>
            </RoughNotation>
            </div>

        <EmblaCarousel/>
        </>
    )
}


export default TeamPictures;