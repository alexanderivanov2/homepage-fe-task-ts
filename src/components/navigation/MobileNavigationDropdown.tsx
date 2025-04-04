import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './MobileNavigationDropdown.module.scss';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

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
        <div
            className={`${styles.MobileNavigationDropdown} ${selected ? styles.Selected : ''} ${styles[theme]}`}

        >
            <h3 className={styles.MobileNavigationDropdownTitle} onClick={() => handleSelected(title)}>
                {title}
                {items && items.length ? (selected ? <CaretUp size={24} /> : <CaretDown size={24} />) : null}
            </h3>
            {selected && items && items.length
                ?
                <div className={styles.MobileNavigationDropdownLinksWrapper} >
                    {items.map((value, key) => (
                        <a
                            key={key}
                            className={`${styles.MobileNavigationDropdownLink} ${value === selectItem ? styles.SelectedLink : ''}`}
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