import { useState } from "react"
import flower from '../assets/tree-parts/flower.png';
import lantern from '../assets/tree-parts/lantern.png';
import redParol from '../assets/tree-parts/red-parol.png';
import yellowParol from '../assets/tree-parts/yellow-parol.png';
import miniTree from '../assets/tree-parts/mini-tree.png';
import wiredTree from '../assets/tree-parts/wired-tree.png';
import paperHouse from '../assets/tree-parts/paper-house.png';
import styroLetter from '../assets/tree-parts/styro-letter.png';
import santa from '../assets/tree-parts/santa.png';
import paleta from '../assets/tree-parts/paleta-wood.png';
import christmasLight from '../assets/tree-parts/christmas-light.png';

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
        // {
        //     src: redParol,
        //     label: 'Red Parol'
        // },
        // {
        //     src: yellowParol,
        //     label: 'Yellow Parol'
        // },
        // {
        //     src: miniTree,
        //     label: 'Mini Tree'
        // },
        // {
        //     src: wiredTree,
        //     label: 'Wired Tree'
        // },
        {
            src: santa,
            label: 'Santa claus'
        },
        {
            src: styroLetter,
            label: 'Styro letter'
        },
        {
            src: paperHouse,
            label: 'Paper house'
        },
        {
            src: paleta,
            label: 'Palett wood'
        },
        {
            src: christmasLight,
            label: 'Christmas light'
        },
    ])


    return parts;
}


export default useTreeParts;