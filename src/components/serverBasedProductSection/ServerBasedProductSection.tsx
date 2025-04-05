import { useContext } from 'react';
import styles from './ServerBasedProductSection.module.scss';
import { ThemeContext } from '../../context/ThemeContext';
import { useJsonData } from '../../hooks/useJson';

function ServerBasedProductSection() {
    const { theme } = useContext(ThemeContext);
    const { data }  = useJsonData('serverBasedProduct');
    const serverBasedProductData = data ?? {}

    return (
        <section className={`section ${styles.serverBasedProductSection} ${theme} ${styles[theme]}`}>
            <div className={`container`}>
                <h2 className={styles.productTitle}>Our Global Server Based Solution</h2>

                <div className={styles.serverBasedProduct}>
                    <img src={serverBasedProductData.image} alt="Sever Based Product Solution"
                        className={styles.serverBasedProductImg}
                    />
                    <div className={styles.serverBasedProductNameBox}>
                        <div className={styles.serverBasedProductNameWrapper}>
                            <p className={styles.serverBasedProductMainName}>{serverBasedProductData.mainName}</p>
                            <p className={styles.serverBasedProductSubName}>{serverBasedProductData.subName}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServerBasedProductSection