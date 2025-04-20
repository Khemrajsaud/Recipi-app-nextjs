import RecipeList from '@/components/recepi-list'
import React from 'react'

async function fetchListofRecipes(){
    try {
        const apiRecipes = await fetch ("https://dummyjson.com/recipes");
        const data = await apiRecipes.json()
        return data?.recipes;
    } catch (error) {
        throw new Error(error)
        
    }
}

const  Recipes = async() => {

    const recipeList = await fetchListofRecipes()
  return (
    <div>
        <RecipeList recipeList = {recipeList}/>   
    </div>
  )
}

export default Recipes



