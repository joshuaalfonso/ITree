import { RoughNotation } from "react-rough-notation";
import Card from "../components/card";





const TreeParts = () => {
    return (
        <>
        <div className="flex items-center justify-center">
            <RoughNotation type="highlight" color="#507687" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>
                <h1 className="text-[#FCFAEE] text-3xl font-bell tracking-widest">Parts of Tree</h1>
            </RoughNotation>
        </div>

        <div className="mt-[80px] grid grid-cols-2 gap-4">


            <Card 
                image={'flower-nobg.png'} 
                label={'Flower'}
            />

            <Card 
                image={'lantern-nobg.png'} 
                label={'Lantern'}
            />
           
            <Card 
                image={'parol-2-nobg.png'}
                label={'Red Parol'}
            />

            <Card 
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
            />


        </div>
        </>
    )
}

export default TreeParts;