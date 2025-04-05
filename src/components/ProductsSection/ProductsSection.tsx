import { useContext } from 'react'
import styles from './ProductsSection.module.scss'
import { ThemeContext } from '../../context/ThemeContext'
import { useJsonData } from '../../hooks/useJson';

interface Product {
    image: string,
    text: string,
}

type Products = Product[];

function ProductsSection() {
    const { theme } = useContext(ThemeContext);
    const { data } = useJsonData<Products | []>('products');
    const products = data ?? [];
    return (
        <section className={`section highlighed ${theme} ${styles.productsSection} ${styles[theme]}`}>
            <div className="container">
                <h2 className={styles.productsTitle}>Our Products</h2>
                <div className={styles.productsList}>
                    {products.map(({ image, text }) => (
                        <div key={text} className={styles.productBox}>
                            <div>
                                <img src={image} alt="product type" className={styles.productImg} />
                            </div>
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