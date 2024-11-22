import { RoughNotation } from "react-rough-notation";
import Card from "../components/card";
import useTreeParts from "../utils/useGetTreeParts";





const TreeParts = () => {

    const parts = useTreeParts();

    return (
        <>
        <div className="flex items-center justify-center">
            <RoughNotation type="highlight" color="#507687" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>
                <h1 className="text-[#FCFAEE] text-3xl font-bell tracking-widest">Parts of Tree</h1>
            </RoughNotation>
        </div>

        <div className="mt-[80px] grid grid-cols-2 gap-4">


            {parts.map((part, index) => (
                <Card 
                    image={part.src} 
                    label={part.label} 
                    key={index}
                />
            ))}

            {/* <Card 
                image={'parol-nobg.png'} 
                label={'Yellow Parol'}
            />

            <Card 
                image={'mini-tree-nobg.png'} 
                label={'Mini Tree'}
            />
          
            <Card 
                image={'wired-tree.png'}
                label={'Wired Tree'}
            /> */}


        </div>
        </>
    )
}

export default TreeParts;