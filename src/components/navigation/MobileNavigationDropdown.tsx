import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './MobileNavigationDropdown.module.scss';

interface Props {
    title: string,
    items: string[] | null,
    selected: boolean,
    handleSelected: (category: string) => void,
}

function MobileNavigationDropdown({ title, items, selected, handleSelected }: Props) {
    const { theme } = useContext(ThemeContext);
    const [selectItem, setSelectItem] = useState('');

    const handleSelectedLink = (itemName: string) => {
        setSelectItem(itemName);
    }

    useEffect(() => {
        if (!selected) {
            setSelectItem('');
        }
    }, [selected]);

    return (
        <div className={`${styles.dropdown} ${selected ? styles.dropdownSelected : ''} ${styles[theme]}`}>
            <h3 className={styles.dropdownTitle} onClick={() => handleSelected(title)}>
                {title}
                {items && items.length ? (selected ? 'UP' : 'DOWN' ) : null}
            </h3>
            {selected && items && items.length
                ?
                <div className={styles.dropdownLinks} >
                    {items.map((value, key) => (
                        <a
                            key={key}
                            className={`${styles.dropdownLink} ${value === selectItem ? styles.linkSelected : ''}`}
                            onClick={() => handleSelectedLink(value)}
                        >
                            {value}
                        </a>
                    ))}
                </div>
                :
                null
            }
        </div>
    )
}

export default MobileNavigationDropdown;