import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantitySelector.module.css';

export default function QuantitySelector({ initial = 1, min = 1, max = 99, disabled = false, onChange }) {
  const [quantity, setQuantity] = useState(initial);

  const update = (value) => {
    const next = Math.min(max, Math.max(min, value));
    setQuantity(next);
    if (onChange) {
      onChange(next);
    }
  };

  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.btn}
        onClick={() => update(quantity - 1)}
        disabled={disabled || quantity <= min}
      >
        −
      </button>
      <span className={styles.value}>{quantity}</span>
      <button
        type="button"
        className={styles.btn}
        onClick={() => update(quantity + 1)}
        disabled={disabled || quantity >= max}
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  initial: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
