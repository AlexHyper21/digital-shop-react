import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import starIcon from '../../assets/star.svg';
import starEmptyIcon from '../../assets/star-empty.svg';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const stars = [1, 2, 3, 4, 5].map((n) => n <= Math.round(product.rating));

  const handleAdd = () => {
    onAddToCart(product, quantity);
  };

  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <img src={product.imageUrl} alt={product.name} width="320" height="220" />
        {discount > 0 && <span className={styles.badge}>−{discount} %</span>}
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {product.formats.map((format) => (
            <span key={format} className={styles.tag}>{format}</span>
          ))}
        </div>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.seller}>{product.seller}</p>
        <div className={styles.rating}>
          {stars.map((filled, i) => (
            <img key={i} src={filled ? starIcon : starEmptyIcon} alt="" width="14" height="14" />
          ))}
          <span className={styles.ratingText}>{product.rating} · {product.reviews} отзывов</span>
        </div>
        <div className={styles.price}>
          <span className={styles.current}>{product.price} BYN</span>
          {product.oldPrice && <span className={styles.old}>{product.oldPrice} BYN</span>}
        </div>
        <div className={styles.actions}>
          <QuantitySelector onChange={setQuantity} disabled={!product.inStock} />
          <Button onClick={handleAdd} disabled={!product.inStock}>
            {product.inStock ? 'В корзину' : 'Нет в наличии'}
          </Button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    seller: PropTypes.string,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number,
    formats: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    inStock: PropTypes.bool,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
