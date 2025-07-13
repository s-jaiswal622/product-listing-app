# Product Listing App

A responsive, filterable product listing application built with **React**, **Redux Toolkit**, and **TypeScript**.


## 🚀 Features

- 🖼️ Display products with image, title, price, category, and rating  
- 🔍 Filter products by **category** and **minimum rating**  
- ↕️ Sort products by **price** (asc/desc)  
- ❤️ Add/remove products to a **favorites list**  
- ⭐ Highlight favorited products visually  
- 🔎 **Debounced search** for product titles  
- 📄 **Client-side pagination** with numbered buttons  
- 📱 Responsive grid layout with sticky filter sidebar  
- ⚙️ State management with **Redux Toolkit**  
- 🔄 Product data fetched from [DummyJSON](https://dummyjson.com/)  
- ✨ Shimmer UI for better loading experience  
- 💾 Favorites support (can extend with LocalStorage)  
- 📦 Clean, scalable folder structure with **custom hooks**  
- 🧼 Optimized for performance using `useMemo` and `useDebounce`  


## 📁 Folder Structure

```bash
src/
├── components/
│   ├── Card.tsx
│   ├── Dropdown.tsx
│   ├── SearchBar.tsx
│   └── Shimmer.tsx
├── config/
│   └── constants.ts
├── features/
│   ├── ProductFilters.tsx
│   └── index.ts
├── hooks/
│   ├── useDebounce.ts
│   └── useProducts.ts
├── pages/
│   └── productListingPage/
│       ├── ProductCard.tsx
│       ├── ProductListingPage.tsx
│       ├── ProductListingPagination.tsx
│       └── Styles.css
├── slices/
│   ├── favoritesSlice.ts
│   ├── filtersSlice.ts
│   └── productsSlice.ts
├── store/
│   └── Store.ts
├── types/
│   ├── favoritesTypes.ts
│   ├── filterTypes.ts
│   ├── index.ts
│   ├── productTypes.ts
│   └── status.ts
├── App.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```


## 🧩 Getting Started

### Install dependencies
```bash
npm install
```


Run the development server
```bash
npm run dev
```

## 💡 Bonus Features (Implemented)

- ✨ **Shimmer UI** for better user experience  
- 📄 **Client-side pagination**  
- 💾 **Favorites persistence** using LocalStorage  
- 🔎 **Debounced search bar** for smoother search experience  
- 📱 **Responsive design** with modern UX polish 


## 🌐 Live Demo

Deployed on **Vercel**:

🔗 [View App](https://product-listing-app-lac.vercel.app/)
