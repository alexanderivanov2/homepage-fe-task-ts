import { useContext } from 'react';

import { useJsonData } from '../../hooks/useJson';
import { ThemeContext } from '../../context/ThemeContext';

import { Product } from './types';

import styles from './ProductsSection.module.scss';

function ProductsSection() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData<Product[] | null>('products');
    const products = data ?? [];
    
    return ( products.length &&
        <section className={`section highlighed ${theme} ${styles.productsSection} ${styles[theme]}`}>
            <div className="container">
                <h2 className={styles.productsTitle}>Our Products</h2>
                <div className={styles.productsList}>
                    {products.map(({ image, text }) => (
                        <div key={text} className={styles.productBox}>
                            <img src={image} alt="product type" className={styles.productImg} />
                            <div className={styles.productNameBox}>
                                <p className={styles.productName}>{text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductsSection