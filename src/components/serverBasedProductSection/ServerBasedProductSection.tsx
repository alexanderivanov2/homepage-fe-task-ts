import styles from './ServerBasedProductSection.module.scss';
import { useJsonData } from '../../hooks/useJson';
import { ServerBasedProduct } from './types';

function ServerBasedProductSection() {
    const { data: serverBasedProductData }  = useJsonData<ServerBasedProduct | null>('serverBasedProduct');

    return ( !!serverBasedProductData &&
        <section className={`section ${styles.serverBasedProductSection}`}>
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