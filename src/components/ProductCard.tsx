// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">${price}</span>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
