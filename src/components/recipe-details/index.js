import Link from 'next/link'
import React from 'react'

const RecipeDetailsItem = ({getRecipeDetails}) => {
  

    
  return (
    <div className='mt-5'>
      <Link href={'/recepi-list'} className='ml-[120px] '>Go to recipe list</Link>
    <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
        <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-6'>
            <div className='w-[400px]'>
                <img src={getRecipeDetails?.image} alt="" name={getRecipeDetails?.name} className='w-4/5 rounded object-cover'/>
               

            </div>
            <div className=' gap-4 mt-5'>
              <h2 className='text-3xl font-extrabold text-gray-950'>{getRecipeDetails?.name}</h2>
              <div>
                <p className='text-2xl text-gray-700 '>{getRecipeDetails?.mealType[0]}</p>
              </div>
              <div className=' mt-5 '>
                <p className='text-xl text-gray-800'>{getRecipeDetails?.cuisine}</p>
              </div>
              <div className='mt-5'>
                <h3 className='text-lg font-bold text-gray-700'>Ingredints</h3>
                <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>{getRecipeDetails?.ingredients.map((item) =>(
                  <li key={item}>{item}</li>
                ))}
                  </ul>
              </div>
            </div>
        </div>

      
    </div>
    </div>
  )
}

export default RecipeDetailsItem



