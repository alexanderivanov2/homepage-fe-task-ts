import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import mobileStyles from './MobileNavigationDropdown.module.scss';
import desktopStyles from './DesktopNavigationDropdown.module.scss';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useDeviceType } from '../../context/DeviceType';
interface Props {
    title: string,
    items: string[] | null,
    selected: boolean,
    handleSelected: (category: string) => void,
}

function MobileNavigationDropdown({ title, items, selected, handleSelected }: Props) {
    const { theme } = useContext(ThemeContext);
    const { isMobile } = useDeviceType();
    const [selectItem, setSelectItem] = useState('');

    const handleSelectedLink = (itemName: string) => {
        setSelectItem(itemName);
    }

    useEffect(() => {
        if (!selected) {
            setSelectItem('');
        }
    }, [selected]);

    const styles = isMobile ? mobileStyles : desktopStyles;

    return (
        <div className={`${styles.dropdown} ${selected ? styles.dropdownSelected : ''} ${styles[theme]}`}>
            <h3 className={styles.dropdownTitle} onClick={() => handleSelected(title)}>
                {title}
                {items && items.length && isMobile ? (selected ? <ChevronUp size={24}/> : <ChevronDown size={24}/>) : null}
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