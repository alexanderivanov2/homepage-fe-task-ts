import { Youtube, Facebook } from 'lucide-react';
import styles from './SocialMediaLinks.module.scss';

interface Props {
    staticPositon?: boolean;
}

function SocialMediaLinks({ staticPositon }: Props) {
    return (
        <div className={`${styles.socialMediaLinks} ${ staticPositon && styles.staticPositon}`}>
            <div className={`${styles.socialLinkBox} ${styles.facebook}`}>
                <Facebook size={22} className={styles.icon}/>        
            </div>
            <div className={`${styles.socialLinkBox} ${styles.youtube}`}>
                <Youtube size={22} className={styles.icon}/>
            </div>
        </div>
    )
}

export default SocialMediaLinks