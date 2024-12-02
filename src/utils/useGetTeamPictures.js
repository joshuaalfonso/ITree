import { useState } from "react"
import image1 from '../assets/working-img/IMG_6545.jpeg';
import image2 from '../assets/working-img/IMG_6548.jpeg';
import image3 from '../assets/working-img/IMG_6549.jpeg';
import image4 from '../assets/working-img/IMG_6551.jpeg';
import image5 from '../assets/working-img/IMG_6557.jpeg';
import image6 from '../assets/working-img/IMG_6574.jpeg';
import image7 from '../assets/working-img/IMG_6576.jpeg';
import image8 from '../assets/working-img/IMG_6579.jpeg';
import image9 from '../assets/working-img/IMG_6554.jpeg';
import image10 from '../assets/working-img/IMG_6582.png';
import image11 from '../assets/working-img/IMG_6583.png';
import image12 from '../assets/working-img/IMG_6609.jpeg';
import image13 from '../assets/working-img/IMG_6614.jpeg';
import image14 from '../assets/working-img/IMG_6617.jpeg';



const useImages = () => {
    const [images] = useState([
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' },
        { src: image6, alt: 'Image 6' },
        { src: image7, alt: 'Image 7' },
        { src: image8, alt: 'Image 8' },
        { src: image9, alt: 'Image 9' },
        { src: image10, alt: 'Image 10' },
        { src: image11, alt: 'Image 11' },
        { src: image12, alt: 'Image 12' },
        { src: image13, alt: 'Image 13' },
        { src: image14, alt: 'Image 14' },

        // { src: image6, alt: 'Image 6' },/
    ])

    return images
}

export default useImages;

