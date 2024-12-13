import React, {useState} from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Section = () => {
    
interface Product {
    image: string;
    title: string;
    description: string;
    price: string;
  }

  const menProducts: Product[] = [
    {
      image: '/images/cloth01.png',
      title: 'Nike Dri-FIT ADV TechKnit Ultra',
      description: "Men's Short-Sleeve",
      price: '₹ 3,895',
    },
    {
      image: '/images/cloth02.png',
      title: 'Nike Dri-FIT Challenger',
      description: "Men's 18cm 2-in-1 Shorts",
      price: '₹ 2,495',
    },
    {
      image: '/images/cloth05.png', 
      title: 'Nike Flex Stride',
      description: "Men's Running Shorts",
      price: '₹ 2,195',
    },
    {
      image: '/images/cloth06.png', 
      title: 'Nike Sportswear Club',
      description: "Men's Joggers",
      price: '₹ 3,999',
    },
  ];
  const womenProducts: Product[] = [
    {
      image: '/images/cloth03.png',
      title: 'Nike Dri-FIT ADV Run Division',
      description: "Women's Long-Sleeve",
      price: '₹ 5,295',
    },
    {
      image: '/images/cloth04.png',
      title: 'Nike Fast',
      description: "Women's Mid-Rise 7/8 Running Leggings",
      price: '₹ 3,795',
    },
    {
      image: '/images/cloth07.png', // New image
      title: 'Nike Pro Tank',
      description: "Women's Training Tank",
      price: '₹ 1,795',
    },
    {
      image: '/images/cloth08.png', // New image
      title: 'Nike One Luxe',
      description: "Women's Tights",
      price: '₹ 4,195',
    },
  ];


const Section: React.FC = () => {
  const [menIndex, setMenIndex] = useState<number>(0);
  const [womenIndex, setWomenIndex] = useState<number>(0);

  const slide = (
    direction: 'left' | 'right',
    indexSetter: React.Dispatch<React.SetStateAction<number>>,
    currentIndex: number,
    itemsLength: number
  ) => {
    if (direction === 'left') {
      indexSetter((currentIndex - 1 + itemsLength) % itemsLength);
    } else {
      indexSetter((currentIndex + 1) % itemsLength);
    }
  };


  return (
    <>
    <div><h2 className="text-center text-black font-semibold text-xl sm:text-2xl lg:text-3xl mb-8 mt-20">
          Gear Up
        </h2></div>
        <div>
           <div>
             <button
                  
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <FiChevronLeft className="text-gray-700 text-lg" />
                      </button>
                      <button
                    
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <FiChevronRight className="text-gray-700 text-lg" />
                      </button>
            </div> 
        </div>
    </>
  )
}
}

export default Section
