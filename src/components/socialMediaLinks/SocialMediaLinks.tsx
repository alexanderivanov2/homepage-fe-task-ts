import { Youtube, Facebook } from 'lucide-react';
import styles from './SocialMediaLinks.module.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
    staticPositon?: boolean;
}

function SocialMediaLinks({ staticPositon }: Props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${styles.socialMediaLinks} ${styles[theme]} ${ staticPositon && styles.staticPositon}`}>
            <div className={`${styles.socialLinkBox} ${styles.facebook}`}>
                <Facebook size={22} />        
            </div>
            <div className={`${styles.socialLinkBox} ${styles.youtube}`}>
                <Youtube size={22} />
            </div>
        </div>
    )
}

export default SocialMediaLinks