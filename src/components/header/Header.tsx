import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { useDeviceType } from '../../context/DeviceType';
import { useJsonData } from '../../hooks/useJson';

import AppLightLogo from '../../assets/logos/app-logo-light.svg';
import AppDarkLogo from '../../assets/logos/app-logo-dark.svg';

import styles from './Header.module.scss';
import MobileNavigation from '../navigation/MobileNavigation';
import DesktopNavigation from '../navigation/DesktopNavigation';

function Header() {
    const { theme } = useContext(ThemeContext);
    const { isMobile } = useDeviceType();
    const { data } = useJsonData<Record<string, string[]>>("navigation");

    const dropdownData = data ? Object.entries(data).map(([itemCategory, items]) => {
        return { title: itemCategory, items }
    }) : [];

    const companyData = data ? data["COMPANY"] : [];

    const logo = theme === 'light' ? AppLightLogo : AppDarkLogo;

    return (
        <header className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.containerLogo}>
                <img src={logo} alt="EGT DIGITAL LOGO" className={styles.logo} />
            </div>
            { isMobile ? 
                <MobileNavigation dropdownData={dropdownData}  companyData={companyData}/> 
                :
                <DesktopNavigation dropdownData={dropdownData} companyData={companyData} />
            } 
        </header>
    );
}

export default Header;