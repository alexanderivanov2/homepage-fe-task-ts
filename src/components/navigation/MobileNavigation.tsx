import { useState } from 'react';

import styles from './MobileNavigation.module.scss';
import MobileNavigationDropdown from './NavigationDropdown';

import UkFlagLogo from '../../assets/logos/uk-flag-logo.svg';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import { ChevronDown } from 'lucide-react';

interface Props {
    dropdownData: {title: string, items: string[]}[],
    companyData: string[],

}

function MobileNavigation({ dropdownData, companyData }: Props) {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<String | null>(null);

    const handleSelected = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
    }
    return (
        <>
            <div className={`${styles.mobileNav} ${isOpen ? styles.navOpen : ''}`} >
                <div 
                    className={`${styles.burgerMenu} ${isOpen ? styles.burgerMenuOpen : ''}`}
                    role='button'
                    onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} >
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className={styles.burgerLine}></span>
                    ))}
                </div>
                <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                    {
                        dropdownData.map(({title, items}) => {
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
                        })
                    }
                    {
                        companyData.map((value, index) => (
                            <a
                                key={index}
                                className={`${styles.companyLink} ${index === 0 ? styles.firstLink : ''}`}
                            >
                                {value}
                            </a>
                        ))
                    }
                    <div className={styles.navFooter} >
                        <div className={styles.languageDropdown}>
                            <div className={styles.languageIcon}>
                                <img src={UkFlagLogo} alt="" /> 
                            </div>
                            <span>EN</span>
                            <div className={styles.languageArrow}>
                                <ChevronDown size={24}/>
                            </div>
                        </div>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavigation;