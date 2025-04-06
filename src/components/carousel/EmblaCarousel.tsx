import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import { Slide } from '../HeroSection/types'

type PropType = {
    slides: Slide[] | []
    options?: EmblaOptionsType,
}

function EmblaCarousel({ slides, options }: PropType) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
    return (
        <section className={`embla`}>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__item">
                                {slide.image && (
                                    <img src={slide.image} alt={`Slide ${index + 1}`} className="embla__slide__image" />
                                )}
                                {slide.text && (
                                    <p className="embla__slide__text">
                                        {slide.textFirstWord ? <span className="thin">{slide.textFirstWord}</span> : ''}{slide.text}
                                    </p>
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