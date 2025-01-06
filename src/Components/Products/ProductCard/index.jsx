import React, { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import Badge from './Badge/index';
import ProductImage from './ProductImage/index';
import Rating from './Rating/index';
import Specifications from './Specifications/index';
import Features from './Features/index';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm relative">
      <Badge badge={product.badge} />
      <ProductImage image={product.image} name={product.name} />
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-[#6E260E]">₹{product.price}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2 text-pretty">{product.description}</p>

        <Rating rating={product.rating} reviewCount={product.reviewCount} />

        <Specifications specifications={product.specifications} />

        <Features features={product.features} />

        <button className="mt-5 w-full bg-[#6E260E] text-white py-3 px-4 rounded-lg hover:bg-[#5A1F0B] transition-all flex items-center justify-center group">
          View Details
          <Suspense fallback={<div>Loading...</div>}>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Suspense>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
