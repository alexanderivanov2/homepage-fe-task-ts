import styles from './MobileNavigationDropdown.module.scss';

interface Props {
    title: string,
    items: string[] | null,
    selected: boolean,
    handleSelected: (category: string) => void,
}
function MobileNavigationDropdown({ title, items, selected, handleSelected }: Props) {
    return (
        <div
            className={`${styles.MobileNavigationDropdown} ${selected ? styles.Selected : ''}`}
            onClick={() => handleSelected(title)}
        >
            <h3 className={styles.MobileNavigationDropdownTitle}>
                {title}
                {items && items.length ? <span className={styles.MobileNavigationDropdownPointer}>^</span> : ''}
            </h3>
            {selected && items && items.length
                ?
                items.map((value, key) => (
                    <p
                        key={key}
                        className={styles.MobileNavigationDropdownItem}
                    >
                        {value}
                    </p>
                ))
                :
                null
            }
        </div>
    )
}

export default MobileNavigationDropdown;