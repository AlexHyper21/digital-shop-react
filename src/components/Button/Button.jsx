import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ variant = 'primary', disabled = false, children, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
