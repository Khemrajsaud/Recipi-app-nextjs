import RecipeDetailsItem from '@/components/recipe-details'
import React from 'react'
async function fetchRecipeDetails(currentRecipeId) {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecipeId}`)
        const data = await apiResponse.json()
        return data
        
    } catch (error) {
        throw new Error(error)
        
    }
    
}

const RecipeDetails = async({params}) => {

    const getRecipeDetails = await fetchRecipeDetails(params?.details)
  return (
    <div>
      <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
      
    </div>
  )
}

export default RecipeDetails




