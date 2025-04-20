import React from "react";

import {  CardContent } from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  console.log(recipeList);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Recipies</h1>
        <Link href={'/'}>Go to Home</Link>
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
           <Link href={`/recepi-list/${recipe.id}`} key={recipe.id}>
                 
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full ">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full object-cover rounded-md"
                        />
                     
                      </div>
                      <div>
                            <h1 className="text-xl font-bold p-3 ">{recipe.name}</h1>
                        </div>
                        <div className="flex items-center p-2 gap-3 text-gray-600 font-semibold ">
                            <p>rating:</p>
                            <p>{recipe.rating}</p>
                           <div className="ml-[150px]"> <h1>{recipe.cuisine}</h1></div>
                        </div>
                    </CardContent>
               
                    </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
