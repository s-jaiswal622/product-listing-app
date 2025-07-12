# Product Listing App

A responsive, filterable product listing application built with **React**, **Redux Toolkit**, and **TypeScript**.

## 🚀 Features

- 🛍️ Display products with image, title, price, category, and rating
- 🔍 Filter by category and minimum rating
- ↕️ Sort products by price (asc/desc)
- ❤️ Mark/unmark favorites with visual icon
- 📄 Pagination with numbered page controls
- 📱 Responsive grid layout
- 📌 Sticky sidebar filters
- ⚙️ State managed with Redux
- 🔄 Product data fetched from [DummyJSON](https://dummyjson.com/)

## 📦 Tech Stack

- React + TypeScript
- Redux Toolkit
- CSS (custom styling)
- Vite (for fast dev server & build)

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

✅ Client-side pagination

✅ LocalStorage-based favorites persistence

✅ Clean modular Redux store

✅ Responsive design and UX polish

