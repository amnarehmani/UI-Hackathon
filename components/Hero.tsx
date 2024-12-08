import React from 'react'
import Image from 'next/image'
import ShoeSection from './ShoeSection'
import GearUpSection from './GearUpSection'

const Hero = () => {
  return (
    <>
   <div className='bg-[#F5F5F5] w-full h-[58px] shadow-[0px_-1px_0px_0px_#E5E5E5_inset]'>
  <h1 className='text-center text-black font-medium text-[17px] py-1'>Hello Nike App</h1>
  <p className='text-center text-[12px]'>Download the app to access everything Nike. <span className='font-[600] underline'>Get Your Great</span></p>
</div>

<div className="flex justify-center items-center">
  <Image
    src="/images/hero-image.png"
    alt="hero"
    width={1000}
    height={1000}
    className="w-full h-auto max-w-[1344px] object-cover"
  />
</div>

<div className="mt-8 py-8 px-4 md:px-8">

  <h1 className="text-center text-black font-semibold text-[17px] pb-2">
    First Look
  </h1>
  <h1 className="text-center text-black font-semibold text-[40px] md:text-[50px] leading-[50px] md:leading-[60px] pb-4">
    NIKE AIR MAX PULSE
  </h1>

  
  <p className="text-center text-gray-700 text-sm md:text-base px-2 leading-6 md:leading-7">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
    <br className="hidden md:block" />
    designed to push you past your limits and help you go to the max.
  </p>


  <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
    <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
      Notify Me
    </button>
    <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
      Shop Air Max
    </button>
  </div>
</div>
<ShoeSection/>

   <div>
   <h1 className="text-left text-black font-[500] text-[20px] p-6 sm:p-8 md:p-10 lg:p-8 ml-4 sm:ml-8 md:ml-12 lg:ml-16">
  Featured
</h1>

   <div className="flex justify-center items-center">
  <Image
    src="/images/runner.jpg"
    alt="hero"
    width={1000}
    height={1000}
    className="w-full h-auto max-w-[1344px] object-cover"
  />
</div>
<div className="mt-8 py-8 px-4 md:px-8">

  <h1 className="text-center text-black font-semibold text-[40px] md:text-[50px] leading-[50px] md:leading-[60px] pb-4">
  STEP INTO WHAT FEELS GOOD
  </h1>

  
  <p className="text-center text-gray-700 text-sm md:text-base px-2 leading-6 md:leading-7">
  Cause everyone should know the feeling of running in that perfect pair.
  </p>


  <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-6">
    <button className="bg-black text-white text-sm font-medium py-3 px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-800 transition duration-300">
      Find Your Shoe
    </button>
   
  </div>
</div>
   </div>


<GearUpSection />
    </>

  )
}

export default Hero


