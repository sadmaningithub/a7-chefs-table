const Recipe = ({recipe}) => {
    const {recipe_name} = recipe
    
    return (
        <div>
            <h3>Title: {recipe_name} </h3>
        </div>
    );
};

export default Recipe;