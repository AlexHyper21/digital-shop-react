import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ variant = 'default', disabled = false, children, onClick }) {
  let className = styles.btn;
  if (variant === 'default') {
    className += ' ' + styles.btnDefault;
  } else if (variant === 'disabled') {
    className += ' ' + styles.btnDisabled;
  }
  if (disabled) {
    className += ' ' + styles.disabled;
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'disabled']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
