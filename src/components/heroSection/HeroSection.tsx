import { useContext } from 'react';
import { EmblaOptionsType } from 'embla-carousel';

import { useJsonData } from '../../hooks/useJson';
import { ThemeContext } from '../../context/ThemeContext';

import EmblaCarousel from '../Carousel/EmblaCarousel';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';

import { Slide } from './types';

import styles from './HeroSection.module.scss';

function HeroSection() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData<Slide[] | null>('slides');
    const OPTIONS: EmblaOptionsType = {};
    const SLIDES = data ?? [];
    return (SLIDES.length &&
        <section className={`${styles.heroSection} ${styles[theme]}`}>
            <EmblaCarousel
                slides={SLIDES} options={OPTIONS}
            />
            <SocialMediaLinks />
        </section>
    )
}

export default HeroSection;