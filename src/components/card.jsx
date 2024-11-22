import { PhotoView } from "react-photo-view";
import Button from "./button";







const Card = ({image, label}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <PhotoView src={image}>
                <img 
                    src={image} 
                    width={200} 
                    height={200} 
                    className="object-cover cursor-pointer"
                />
            </PhotoView>
            <div>
                <p className="text-[#FCFAEE] text-center font-clouts tracking-widest text-2xl">{label}</p>
                <small></small>
                <Button />
            </div>
        </div>
    )
}

export default Card;