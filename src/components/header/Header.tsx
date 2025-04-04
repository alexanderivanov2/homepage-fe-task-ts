import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { useDeviceType } from '../../context/DeviceType';
import { useJsonData } from '../../hooks/useJson';

import AppLightLogo from '../../assets/logos/app-logo-light.svg';
import AppDarkLogo from '../../assets/logos/app-logo-dark.svg';

import styles from './Header.module.scss';
import MobileNavigation from '../navigation/MobileNavigation';

function Header() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { isMobile } = useDeviceType();
    const logo = theme === 'light' ? AppLightLogo : AppDarkLogo;
    const { data } = useJsonData<Record<string, string[]>>("navigation");

    return (
        <>
        <header className={`${styles.header} ${styles[theme]}`}>
            <div className={styles.containerLogo}>
                <img src={logo} alt="EGT DIGITAL LOGO" className={styles.logo} />
            </div>
            { isMobile && <MobileNavigation data={data}/> } 
        </header>
            {/* <div className="container">
                <p> THEME: {theme}</p>
                <p>DEVICE TYPE IS MOBILE: {isMobile.toString()}</p>
                <p>{ data ? data['R-LINE'] : 'text' }</p>
                <button onClick={changeTheme}>ChangeTheme</button>

            </div> */}
        </>
    );
}

export default Header;