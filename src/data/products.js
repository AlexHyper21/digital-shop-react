import product1 from '../assets/product-1.webp';
import product2 from '../assets/product-2.webp';
import product3 from '../assets/product-3.webp';
import product4 from '../assets/product-4.webp';

export const products = [
  { id: 1, name: 'Набор иконок «Контур» · 640 штук', seller: 'Студия Кегль', price: 29, oldPrice: 45, rating: 4.8, reviews: 127, formats: ['SVG', 'FIGMA', 'PNG'], imageUrl: product1, inStock: true },
  { id: 2, name: 'Шрифт «Гротеск Норд» · 4 начертания', seller: 'Типобюро Север', price: 59, oldPrice: null, rating: 4.6, reviews: 84, formats: ['OTF', 'WOFF2'], imageUrl: product2, inStock: true },
  { id: 3, name: 'UI-кит «Пульт» для дашбордов', seller: 'Студия Кегль', price: 89, oldPrice: 120, rating: 4.9, reviews: 212, formats: ['FIGMA'], imageUrl: product3, inStock: true },
  { id: 4, name: 'Мокапы смартфонов · 24 сцены', seller: 'Фото Лаб', price: 35, oldPrice: null, rating: 4.3, reviews: 56, formats: ['PSD', 'PNG'], imageUrl: product4, inStock: false },
];
