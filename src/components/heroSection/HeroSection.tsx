import { useContext } from 'react';
import styles from './HeroSection.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import EmblaCarousel from '../carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { useJsonData } from '../../hooks/useJson';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import { Slide } from './types';

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