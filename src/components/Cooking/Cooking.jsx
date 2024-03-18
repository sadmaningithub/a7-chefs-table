import PropTypes from 'prop-types'
import Cook from '../Cook/Cook'

const Cooking = ({ cooking, handleCook }) => {

    return (
        <div className="text-center text-2xl font-semibold min-h-min w-1/3 space-y-8 border rounded-xl border-sky-100">
            <div className='text-center space-y-8'>
                <h1>Want to cook: {cooking.length}</h1>
                <hr />
                <div className='flex flex-row justify-between items-center my-4 text-xl'>
                    <h3>Recipe <br /> Name</h3>
                    <h3>Preparing Time</h3>
                    <h3>Calories</h3>
                </div>
                {
                    cooking.map(cook => <Cook handleCook={handleCook} key={cook.recipe_id} cook={cook}></Cook>)
                }
            </div>
            <h1>Currently Cooking: </h1>
            <hr />
            <div className='flex flex-row justify-between items-center my-4 text-xl'>
                <h3>Recipe <br /> Name</h3>
                <h3>Preparing Time</h3>
                <h3>Calories</h3>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cooking: PropTypes.array,
    handleCook: PropTypes.func
}

export default Cooking;