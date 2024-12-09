
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const GearUpSection = () => {
 
  return (

    <>
  
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 mt-20">
    <h2  className="text-center text-black font-semibold text-xl sm:text-2xl lg:text-3xl mb-8">
  Gear Up
</h2>
      <div className="max-w-7xl mx-auto">
      
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
      
          <div className="flex items-center space-x-2 sm:space-x-4 mb-4 sm:mb-0">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Men</h2>
            <button
            
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <FiChevronLeft className="text-gray-700 text-lg" />
            </button>
            <button
          
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <FiChevronRight className="text-gray-700 text-lg" />
            </button>
          </div>

          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Women</h2>
            <button
      
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <FiChevronLeft className="text-gray-700 text-lg" />
            </button>
            <button
          
              className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <FiChevronRight className="text-gray-700 text-lg" />
            </button>
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/cloth01.png"
              alt="Men's Top"
              width={300}
              height={300}
            
            />
            <div>
            <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV TechKnit Ultra</p>
            
            </div>
          </div>
        
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/cloth02.png"
              alt="Men's Shorts"
              width={300}
              height={300}
              
            />
            <div>
            <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT Challenger</p>
            
            </div>
          </div>

    
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/cloth03.png"
              alt="Women's Top"
              width={300}
              height={300}
            
            />
            <div>
            <p className="text-gray-700 font-medium mt-4">Nike Dri-FIT ADV Run Division</p>
            
            </div>
          </div>

    
          <div className="text-center flex flex-col items-center">
            <Image
              src="/images/cloth04.png"
              alt="Women's Leggings"
              width={300}
              height={300}
            
            />
           <div>
            <p className="text-gray-700 font-medium mt-4">Nike Fast</p>
        
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
  )
}

export default GearUpSection
