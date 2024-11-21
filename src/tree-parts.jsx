import { RoughNotation } from "react-rough-notation";




const TreeParts = () => {
    return (
        <>
        <div className="flex items-center justify-center">
            <RoughNotation type="highlight" color="#507687" show={true} animationDelay={1000} animationDuration={1300} strokeWidth={1}>
                <h1 className="text-[#FCFAEE] text-3xl font-bell tracking-widest">Parts of Tree</h1>
            </RoughNotation>
        </div>

        <div className="mt-[80px] grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center">
                <img src="parol-nobg.png" width={200} height={200} className="object-cover"/>
                <span className="text-[#FCFAEE] font-clouts tracking-widest text-2xl">Parol</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="lantern-nobg.png" width={200} height={200} className="object-cover"/>
                <span className="text-[#FCFAEE] font-clouts tracking-widest text-2xl">Lantern</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="wired-tree.png" width={200} height={200} className="object-cover"/>
                <span className="text-[#FCFAEE] font-clouts tracking-widest text-2xl">Wired Tree</span>
            </div>
        </div>
        </>
    )
}

export default TreeParts;