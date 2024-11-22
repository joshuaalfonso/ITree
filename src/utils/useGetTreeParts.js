import { useState } from "react"
import flower from '../assets/tree-parts/flower.png';
import lantern from '../assets/tree-parts/lantern.png';
import redParol from '../assets/tree-parts/red-parol.png';
import yellowParol from '../assets/tree-parts/yellow-parol.png';
import miniTree from '../assets/tree-parts/mini-tree.png';
import wiredTree from '../assets/tree-parts/wired-tree.png';

const useTreeParts = () => {
    const [parts] = useState([
        {
            src: flower,
            label: 'Flower'
        },
        {
            src: lantern,
            label: 'Lantern'
        },
        {
            src: redParol,
            label: 'Red Parol'
        },
        {
            src: yellowParol,
            label: 'Yellow Parol'
        },
        {
            src: miniTree,
            label: 'Mini Tree'
        },
        {
            src: wiredTree,
            label: 'Wired Tree'
        },
    ])


    return parts;
}


export default useTreeParts;