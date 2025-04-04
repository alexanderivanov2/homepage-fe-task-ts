import { useContext, useState } from 'react';

import styles from './MobileNavigation.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import MobileNavigationDropdown from './MobileNavigationDropdown';
interface Props {
    data: Record<string, string[]> | null,
}
function MobileNavigation({ data }: Props) {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<String | null>(null);
    const { theme } = useContext(ThemeContext);
    const handleSelected = (category: string) => {
        console.log(category);
        setSelectedCategory(prevCategory =>  prevCategory === category ? null : category);
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
                        data
                            ? Object.entries(data).map(([itemCategory, items]) => (
                                itemCategory !== 'COMPANY'
                                    ?
                                    <MobileNavigationDropdown
                                        key={itemCategory}
                                        title={itemCategory}
                                        items={items}
                                        selected={itemCategory === selectedCategory}
                                        handleSelected={handleSelected}
                                    />
                                    : null
                            ))
                            : null}
                </div>
            </div>
        </>
    );
}

export default MobileNavigation;