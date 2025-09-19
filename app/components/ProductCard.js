import React from "react";
import { toast, Slide } from "react-toastify";
import Image from "next/image";


function ProductCard({ image, name, price, description, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart({ image, name, price, description });
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 2000,   // will disappear after 2s
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={200}   // adjust as needed
          height={200}  // adjust as needed
          className="max-h-48 object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-xl font-semibold text-blue-600 mt-3">Rs {price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
