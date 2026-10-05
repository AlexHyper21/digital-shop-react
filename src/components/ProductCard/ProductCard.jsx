import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart, onBuyNow }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.format}>{product.format}</p>
        <div className={styles.rating}>
          <span className={styles.stars}>★★★★☆</span>
          <span className={styles.ratingText}>4.8 (127 отзывов)</span>
        </div>
        <div className={styles.priceSection}>
          <span className={styles.currentPrice}>${product.price}</span>
          <span className={styles.oldPrice}>${product.price * 1.2}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.btnCart} onClick={onAddToCart}>Add to Cart</button>
        <button className={styles.btnBuy} onClick={onBuyNow}>Buy Now</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    format: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onBuyNow: PropTypes.func.isRequired,
};
