// src/services/products.ts
export async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  }
  
  export async function getProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }
  