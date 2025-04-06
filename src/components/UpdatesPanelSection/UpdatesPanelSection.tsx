import { useJsonData } from '../../hooks/useJson';

import UpdatesPanelCard from './UpdatesPanelCard';

import { SectionItem } from './types';

import styles from './UpdatesPanelSection.module.scss';

function UpdatesPanel() {
    const { data } = useJsonData<SectionItem[] | null>('updatesPanel');
    const updatesData = data ?? [];

    return (!!updatesData.length &&
        <section className="section">
            <div className={`container ${styles.updatesPanel}`}>
                {updatesData.map((value, index) => (
                    <UpdatesPanelCard key={index} updateData={value} />
                ))}
            </div>
        </section>
    )
}

export default UpdatesPanel