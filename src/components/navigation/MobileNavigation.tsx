import { useContext, useState } from 'react';

import styles from './MobileNavigation.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import MobileNavigationDropdown from './MobileNavigationDropdown';

import UkFlagLogo from '../../assets/logos/uk-flag-logo.svg.svg';
import { CaretDown } from '@phosphor-icons/react';
import ThemeSwitcher from '../themeSwitcher/ThemeSwitcher';

interface Props {
    data: Record<string, string[]> | null,
}
function MobileNavigation({ data }: Props) {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<String | null>(null);
    const { theme } = useContext(ThemeContext);

    const dropdownData = data && Object.entries(data).map(([itemCategory, items]) => {
        return { title: itemCategory, items }
    })

    const handleSelected = (category: string) => {
        setSelectedCategory(prevCategory => prevCategory === category ? null : category);
    }
    return (
        <>
            <div className={`${styles.mobileNav} ${isOpen ? styles.navOpen : ''} ${styles[theme]}`} >
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
                        dropdownData && dropdownData.map(({ title, items }) => {
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
                        data && data["COMPANY"].map((value, index) => (
                            <a
                                key={index}
                                className={styles.companyLink}
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
                                <CaretDown size={22} />
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