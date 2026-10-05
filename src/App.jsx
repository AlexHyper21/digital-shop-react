import { useState } from 'react';
import Button from './components/Button/Button';
import ProductCard from './components/ProductCard/ProductCard';
import QuantitySelector from './components/QuantitySelector/QuantitySelector';
import CartIcon from './components/CartIcon/CartIcon';
import styles from './App.module.css';

export default function App() {
    const [cart, setCart] = useState([]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const products = [
        {
            id: 1,
            name: 'Design System Bundle',
            price: 49.99,
            oldPrice: 99.99,
            rating: 4.8,
            reviews: 127,
            image: '📦',
            format: 'SVG, PNG, WebP',
            seller: 'Studio Karts'
        },
        {
            id: 2,
            name: 'Icon Pack - Contour',
            price: 29.99,
            oldPrice: 59.99,
            rating: 4.5,
            reviews: 89,
            image: '🎨',
            format: 'SVG, PDF',
            seller: 'Digital Assets'
        }
    ];

    const handleAddToCart = (product) => {
        setCart([...cart, { ...product, quantity: selectedQuantity }]);
        alert(`Added ${selectedQuantity} copies to cart`);
        setSelectedQuantity(1);
    };

    const handleBuyNow = (product) => {
        alert(`Purchasing ${selectedQuantity} copies`);
        setSelectedQuantity(1);
    };

    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.logo}>PixelMarket</div>
                <CartIcon itemCount={cart.length} />
            </header>

            <main className={styles.catalog}>
                <h1>Digital Products Catalog</h1>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={() => handleAddToCart(product)}
                            onBuyNow={() => handleBuyNow(product)}
                            quantitySelector={
                                <QuantitySelector
                                    value={selectedQuantity}
                                    onChange={setSelectedQuantity}
                                />
                            }
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}