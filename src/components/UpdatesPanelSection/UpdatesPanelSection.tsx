import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { useJsonData } from '../../hooks/useJson';

import UpdatesPanelCard from './UpdatesPanelCard';

import { SectionItem } from './types';

import styles from './UpdatesPanelSection.module.scss';

function UpdatesPanel() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData<SectionItem[] | null>('updatesPanel');
    const updatesData = data ?? [];

    return (!!updatesData.length &&
        <section className={`section ${theme}`}>
            <div className={`container ${styles.updatesPanel}`}>
                {updatesData.map((value, index) => (
                    <UpdatesPanelCard key={index} updateData={value} />
                ))}
            </div>
        </section>
    )
}

export default UpdatesPanel