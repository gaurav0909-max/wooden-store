import React from "react";
import { Star, ArrowRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm relative">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 bg-[#6E260E] text-white text-xs font-medium px-3 py-1 rounded-lg z-10">
          {product.badge}
        </div>
      )}
      {/* Image Section */}
      <div className="relative">
        <img
          src={
            product.image ||
            "https://www.applewudindia.com/wp-content/uploads/2024/01/Applewud-Premium-Graphic-for-website-1024x1024.png"
          }
          alt={product.name}
          className="object-cover w-full h-56"
        />
      </div>
      {/* Content Section */}
      <div className="p-6">
        {/* Product Title and Price */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-[#6E260E]">
            ₹{product.price}
          </span>
        </div>
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>
        {/* Rating */}
        <div className="flex items-center mt-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">
            ({product.reviewCount} reviews)
          </span>
        </div>
        {/* Specifications */}
        <ul className="mt-4 space-y-1">
          {product.specifications?.slice(0, 3).map((spec, index) => (
            <li
              key={index}
              className="text-sm text-gray-500 flex items-center"
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
              {spec}
            </li>
          ))}
          {product.specifications?.length > 3 && (
            <li className="text-sm text-gray-400 italic">+ more</li>
          )}
        </ul>
        {/* Features */}
        {product.features && (
          <ul className="mt-3 space-y-1 text-sm text-gray-500">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        {/* Button */}
        <button className="mt-5 w-full bg-[#6E260E] text-white py-3 px-4 rounded-lg hover:bg-[#5A1F0B] transition-all flex items-center justify-center group">
          View Details
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
