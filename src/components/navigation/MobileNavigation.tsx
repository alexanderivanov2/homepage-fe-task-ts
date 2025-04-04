import { useContext, useState } from 'react';

import styles from './MobileNavigation.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import MobileNavigationDropdown from './MobileNavigationDropdown';

import UkFlagLogo from '../../assets/logos/uk-flag-logo.svg.svg';
import { CaretUp } from '@phosphor-icons/react';
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
            <div className={`${styles.mobileNavigation} ${isOpen ? styles.openMobileNavigation : ''} ${styles[theme]}`} >
                <div className={`${styles.burgerContainer} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} >
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </div>
                <div className={`${styles.menuContainer} ${isOpen ? styles.menuOpen : ''}`}>
                    {
                        dropdownData
                            ?
                            dropdownData.map(({ title, items }) => {
                                if (title === 'COMPANY') return null;

                                return (
                                <MobileNavigationDropdown
                                    key={title}
                                    title={title}
                                    items={items}
                                    selected={title === selectedCategory}
                                    handleSelected={handleSelected}
                                />
                                )
                            })
                            :
                            null
                    }
                    {
                        data ? data["COMPANY"].map((value, index) => (
                            <a 
                                key={index}
                                className={styles.CompanyLink}
                            >
                                {value}
                            </a> 
                        )): null
                    }
                    <div
                        className={styles.MobileNavigationBottom}
                    >
                        <div className={styles.MobileNavigationBottomLanguageDropdown}>
                            <img src={UkFlagLogo} alt="" />
                            <CaretUp size={32}/>
                        </div>
                        <ThemeSwitcher/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileNavigation;