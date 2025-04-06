import { useState } from 'react'

import styles from './DesktopNavigation.module.scss'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import MobileNavigationDropdown from './NavigationDropdown';
import LanguageDropdown from './LanguageDropdown';

interface Props {
    dropdownData: { title: string, items: string[] }[],
    companyData: string[],
}

function DesktopNavigation({ dropdownData, companyData }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<String | null>(null);
    const handleSelected = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
    }
    return (
        <div className={`${styles.desktopNav}`}>
            <div className={styles.leftSideNav}>
                {dropdownData.map(({ title, items }) => {
                    if (title === 'COMPANY') return null;
                    return (
                        <MobileNavigationDropdown
                            key={title}
                            title={title}
                            items={items}
                            selected={title === selectedCategory}
                            handleSelected={handleSelected}
                        />
                    );
                })}
            </div>
            <div className={styles.rightSideNav}>
                {
                    companyData.map((value, index) => (
                        <a
                            key={index}
                            className={styles.companyLink}
                        >
                            {value}
                        </a>
                    ))
                }
                <LanguageDropdown/>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default DesktopNavigation