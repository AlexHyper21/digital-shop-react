import { useState } from 'react';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';
import { products } from './data/products';
import styles from './App.module.css';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header cartCount={cartCount} />
      <main className={styles.page}>
        <h1 className={styles.title}>Каталог цифровых товаров</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
    </>
  );
}
