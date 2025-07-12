# Product Listing App

A responsive, filterable product listing application built with **React**, **Redux Toolkit**, and **TypeScript**.


## 🚀 Features

- 🖼️ Display products with image, title, price, category, and rating
- 🔍 Filter products by **category** and **minimum rating**
- ↕️ Sort products by **price** (asc/desc)
- ❤️ Add/remove products to a **favorites list**
- ⭐ Highlight favorited products visually
- 📄 **Client-side pagination** with numbered buttons
- 📱 Responsive grid layout with sticky filter sidebar
- ⚙️ State management with **Redux Toolkit**
- 🔄 Product data fetched from [DummyJSON](https://dummyjson.com/)


## 📁 Folder Structure


```bash
src/
├── components/       # Reusable UI components (Dropdown, Shimmer)
├── features/         # Filter sidebar and related logic
├── pages/            # ProductListingPage.tsx
├── slices/           # Redux slices (products, filters, favorites)
├── types/            # TypeScript type definitions
├── styles/           # CSS files
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

💡 Bonus Features (Implemented)

- ✨ **Shimmer UI** for better user experience  
- 📄 **Client-side pagination**  
- 💾 **Favorites persistence** using LocalStorage  
- 📱 **Responsive design** with modern UX polish 


## 🌐 Live Demo

Deployed on **Vercel**:

🔗 [View App](https://product-listing-app-lac.vercel.app/)
