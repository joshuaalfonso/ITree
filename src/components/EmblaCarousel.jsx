

import useEmblaCarousel from 'embla-carousel-react'
import useImages from '../utils/useGetTeamPictures';
import { PhotoProvider, PhotoView } from 'react-photo-view';


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  const images = useImages();


  return (
    <PhotoProvider>

    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <PhotoView key={index} src={image.src}>

                <img
                  className="embla__slide__img cursor-pointer"
                  src={image.src}
                  alt="Your alt text"
                />
              </PhotoView>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PhotoProvider>
  )
}
