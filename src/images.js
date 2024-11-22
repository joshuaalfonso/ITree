import { useState } from "react"
import image1 from './assets/working-img/IMG_6545.jpeg';
import image2 from './assets/working-img/IMG_6548.jpeg';
import image3 from './assets/working-img/IMG_6549.jpeg';
import image4 from './assets/working-img/IMG_6551.jpeg';
import image5 from './assets/working-img/IMG_6554.jpeg';



const useImages = () => {
    const [images] = useState([
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' },
    ])

    return images
}

export default useImages;

