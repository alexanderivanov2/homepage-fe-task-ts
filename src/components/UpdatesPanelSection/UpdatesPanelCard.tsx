import { Megaphone, Calendar, StickyNote } from 'lucide-react';

import { SectionItem } from './types';

import styles from './UpdatesPanelCard.module.scss';

interface Props {
    updateData: SectionItem;
}

function UpdatesPanelCard({ updateData }: Props) {
    const Icon = updateData?.icon === 'megaphone' ? Megaphone : (updateData.icon === 'calendar' ? Calendar : StickyNote)
    return (
        <div className={`${styles.updatesPanelCard}`}>
            <div className={styles.cardHeader}>
                <Icon size={42} className={styles.icon}/>
                <h3 className={styles.cardTopic}>{updateData.topic}</h3>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardImgBox}>
                    <img src={updateData.image} alt="update topic image" className={styles.cardImg} />
                </div>
                <div className={styles.cardBodyHead}>
                    <h4 className={styles.cardTitle}>{updateData.title}</h4>
                    <p className={styles.cardDate}>{updateData.date}</p>
                    <p className={styles.cardLocation} style={{ visibility: updateData.location ? 'visible' : 'hidden' }}>{updateData.location}</p>
                </div>
                <p className={styles.cardDescription}>{updateData.description}</p>
                <button className={styles.cardBtn}>{updateData.buttonText}</button>
            </div>
        </div>
    )
}

export default UpdatesPanelCard