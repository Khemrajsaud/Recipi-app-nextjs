import Link from 'next/link'
import React from 'react'
import Image from 'next/image';



const page = () => {
  return (
    <div>
      <h1 className='bg-amber-400 text-3xl font-bold text-center'>Recipi App </h1>
      <Link  href={"/recepi-list"}>
      <Image src="/recipe.jpg" alt="Recipe" width={300} height={200} className='lg:ml-[500px] ml-[20px] rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all' />
      </Link>
      
    </div>
  )
}

export default page

