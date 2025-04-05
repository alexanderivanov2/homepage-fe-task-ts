import { useContext } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import { ThemeContext } from '../../context/ThemeContext'

type PropType = {
    slides: {image?: string, text?: string}[] | []
    options?: EmblaOptionsType,
}

function EmblaCarousel({ slides, options }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)
    const { theme } = useContext(ThemeContext);
    return (
        <section className={`embla ${theme}`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__item">
                                {slide.image && (
                                    <img src={slide.image} alt={`Slide ${index + 1}`} className="embla__slide__image" />
                                )}
                                {slide.text && (
                                    <p className="embla__slide__text">{slide.text}</p>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel;