# ЛР 2 — пиксельмаркет на React

Интернет-магазин цифровых товаров (вариант 3): функциональные React-компоненты, JSX, props и локальное состояние `useState`. Сборка — Vite, стили — CSS Modules, проверка props — PropTypes.

| Компонент | Props | Состояние |
|---|---|---|
| `Button` | `variant`, `disabled`, `children`, `onClick` | — |
| `QuantitySelector` | `initial`, `min`, `max`, `disabled`, `onChange` | `quantity` (кнопки «+» и «−») |
| `ProductCard` | `product`, `onAddToCart` | `quantity` выбранного количества |
| `CartIcon` | `count` | — |
| `Header` | `cartCount` | — |
| `App` | — | `cart` — массив товаров в корзине |

## Запуск

```bash
npm install
npm run dev
```

http://localhost:5173

## Сборка

```bash
npm run build
npm run preview
```
