import { useContext } from 'react';
import styles from './HeroSection.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import EmblaCarousel from '../carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { useJsonData } from '../../hooks/useJson';
import { Youtube, Facebook } from 'lucide-react';

function HeroSection() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData('slides');
    const OPTIONS: EmblaOptionsType = {}
    const SLIDES = data ?? [];
    return (
        <section className={`${styles.heroSection} ${styles[theme]}`}>
            <EmblaCarousel
                slides={SLIDES} options={OPTIONS}
            />
            <div className='socialMediaLinks'>
                <Youtube size={24}/>
                <Facebook size={24} />
            </div>
        </section>
    )
}

export default HeroSection