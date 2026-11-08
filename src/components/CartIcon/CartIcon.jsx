import PropTypes from 'prop-types';
import cartIcon from '../../assets/cart.svg';
import styles from './CartIcon.module.css';

export default function CartIcon({ count }) {
  return (
    <button type="button" className={styles.cartIcon}>
      <span className={styles.iconBox}>
        <img src={cartIcon} alt="" width="24" height="24" />
        {count > 0 && <span className={styles.badge}>{count}</span>}
      </span>
      <span>Корзина</span>
    </button>
  );
}

CartIcon.propTypes = {
  count: PropTypes.number.isRequired,
};
