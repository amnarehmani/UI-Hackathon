"use client"
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GearUpSection = () => {
  const clothes = [
    {
      id: 1,
      name: "Nike Air Max Pulse",
      type: "Women's Shoes",
      price: "₹ 13 995",
      image: "/images/cloth01.png",
    },
    {
      id: 2,
      name: "Nike Air Max Pulse",
      type: "Men's Shoes",
      price: "₹ 13 995",
      image: "/images/cloth02.png",
    },
    {
      id: 3,
      name: "Nike Air Max 97 SE",
      type: "Men's Shoes",
      price: "₹ 16 995",
      image: "/images/cloth03.png",
    },
    {
      id: 4,
      name: "Nike Blazer Low '77 Jumbo",
      type: "Women's Shoes",
      price: "MRP : ₹ 8 595.00",
      image: "/images/cloth04.png",
    },
    {
      id: 5,
      name: "Nike Air Zoom Pegasus 39",
      type: "Men's Shoes",
      price: "₹ 12 295",
      image: "/images/cloth05.png",
    },
    {
      id: 6,
      name: "Nike React Infinity Run Flyknit",
      type: "Women's Shoes",
      price: "₹ 15 295",
      image: "/images/cloth06.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4); // Display 4 items per slide
    }
  };

  const nextSlide = () => {
    if (currentIndex < clothes.length - 4) {
      setCurrentIndex(currentIndex + 4); // Display 4 items per slide
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Gear Up</h2>
        <div className="flex items-center gap-2">
          <p className="text-black font-[600]">Men</p>
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronLeft className="text-gray-700 text-lg" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronRight className="text-gray-700 text-lg" />
          </button>
          <p className="text-black font-[600]">Women</p>
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronLeft className="text-gray-700 text-lg" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiChevronRight className="text-gray-700 text-lg" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {clothes.slice(currentIndex, currentIndex + 4).map((cloth) => (
          <div
            key={cloth.id}
            className="flex flex-col justify-center items-center p-4 rounded-md"
          >
            <img
              src={cloth.image}
              alt={cloth.name}
              className="w-full h-auto object-contain mb-4"
            />
            <div className="w-full text-left">
              <h3 className="text-lg font-medium text-gray-900">{cloth.name}</h3>
              <p className="text-sm text-gray-600">{cloth.type}</p>
              <p className="text-lg font-semibold text-gray-900 mt-2">
                {cloth.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearUpSection;
