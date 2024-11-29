// src/state/products.ts
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };
  
  export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  };
  
  export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    return response.json();
  };
  