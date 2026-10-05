import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantitySelector.module.css';

export default function QuantitySelector({ onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleDecrease}>−</button>
      <span className={styles.value}>{quantity}</span>
      <button className={styles.btn} onClick={handleIncrease}>+</button>
    </div>
  );
}

QuantitySelector.propTypes = {
  onQuantityChange: PropTypes.func.isRequired,
};
