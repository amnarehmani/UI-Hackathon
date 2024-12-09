import React from 'react'
import Image from 'next/image'

const join = () => {
  return (
   <>
   <div className='flex justify-center items-center'>
   <Image
          src="/images/nike.png"
          alt="logo"
          width={100}
          height={100}
          className="w-[78px] h-[78px]"
        />
   </div>
   </>
  )
}

export default join
