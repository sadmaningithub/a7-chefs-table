import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({handleCooking}) => {

    const [recipes, setRecipes] = useState([])

    useEffect(() =>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-2/3">
            {
                recipes.map(recipe => <Recipe handleCooking={handleCooking} key={recipe.id} recipe={recipe}></Recipe>)
            }
        </div>
    );
};


Recipes.propTypes = {
    handleCooking: PropTypes.func
}
export default Recipes;