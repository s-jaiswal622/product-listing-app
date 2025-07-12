export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  export interface ProductsState {
    allProducts: Product[];
    filteredProducts: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    filterStats: {
        categories: string[];
        ratings: number[];
    };
  }
  