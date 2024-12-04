import { useState } from "react"
import flower from '../assets/tree-parts/flower.png';
import lantern from '../assets/tree-parts/lantern.png';
import paperHouse from '../assets/tree-parts/paper-house.png';
import styroLetter from '../assets/tree-parts/styro-letter.png';
import santa from '../assets/tree-parts/santa.png';
import paleta from '../assets/tree-parts/paleta-wood.png';
import christmasLight from '../assets/tree-parts/christmas-light.png';
import rg45Star from '../assets/tree-parts/rg45-star.png';

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
        {
            src: rg45Star,
            label: 'RG45 Star'
        },
    ])


    return parts;
}


export default useTreeParts;