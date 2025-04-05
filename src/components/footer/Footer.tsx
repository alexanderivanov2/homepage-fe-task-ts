import { useContext } from 'react'
import styles from './Footer.module.scss'
import { ThemeContext } from '../../context/ThemeContext'
import { useJsonData } from '../../hooks/useJson';
import { useDeviceType } from '../../context/DeviceType';
import FooterRow from './FooterRow';

interface FooterItem {
    title: string,
    items: string[],
}

function Footer() {
    const { theme } = useContext(ThemeContext);
    const { isMobile } = useDeviceType();
    const { data } = useJsonData<FooterItem[] | []>('footer');
    const footerData: FooterItem[] = [];
    let companyData:FooterItem | {} = {};

    data && data.forEach((footerItem) => {
        if (footerItem.title === 'COMPANY') {
            companyData = footerItem;
            return
        }
        footerData.push(footerItem);
    });

    return (
        <footer className={`section highlighed ${styles.footer} ${theme} ${styles[theme]}`}>
            <div className={`container ${styles.footerRows}`}>
                { !isMobile && footerData.length && footerData.map((footerItem, index) => (
                    <FooterRow key={footerItem.title} title={footerItem.title} items={footerItem.items} />
                ))}
                { "title" in companyData && typeof companyData.title == 'string' && "items" in companyData && Array.isArray(companyData?.items) && <FooterRow title={companyData.title} items={companyData.items}/> }
                <FooterRow title={'SOCIAL NETWORKS'} items={[]} />
            </div>
            <div className={styles.copyrightBox}>
                <p className={styles.copyrightText}>&copy; 2024 Euro Games Technology All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer