import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() =>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div>
            <h1>Recipes: {recipes.length}</h1>
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

export default Recipes;