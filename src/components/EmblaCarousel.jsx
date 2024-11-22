

import useEmblaCarousel from 'embla-carousel-react'
import useImages from '../utils/useGetTeamPictures';


export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel();

  const images = useImages();


  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={image.src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
