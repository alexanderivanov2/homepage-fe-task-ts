import styles from './Footer.module.scss';

interface Props {
    title: string;
    items: string[];
}

function FooterRow({title, items}: Props) {
  return (
    <div className={`${styles.footerRow} ${title == 'COMPANY' ? styles.companyRow : ''}`}>
        <h6 className={styles.footerRowTitle}>{title}</h6>
        { items.map((item) => (
            <a className={styles.footerRowItem} key={item}>{item}</a>
        ))}
    </div>
  )
}

export default FooterRow