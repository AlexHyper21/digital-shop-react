import PropTypes from 'prop-types';
import CartIcon from '../CartIcon/CartIcon';
import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/search.svg';
import userIcon from '../../assets/user.svg';
import styles from './Header.module.css';

export default function Header({ cartCount }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logo} alt="пиксельмаркет" width="168" height="32" />
        <nav className={styles.nav}>
          <button type="button" className={styles.navItem}>
            <img src={searchIcon} alt="" width="24" height="24" />
            <span>Поиск</span>
          </button>
          <button type="button" className={styles.navItem}>
            <img src={userIcon} alt="" width="24" height="24" />
            <span>Профиль</span>
          </button>
          <CartIcon count={cartCount} />
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartCount: PropTypes.number.isRequired,
};
