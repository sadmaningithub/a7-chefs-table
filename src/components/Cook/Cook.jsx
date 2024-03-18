import PropTypes from 'prop-types'

const Cook = ({cook, handleCook}) => {
    const {recipe_name,preparing_time,calories} = cook
    return (
        <div className='flex flex-row justify-between items-center my-4 text-base bg-[#28282808] p-4'>
            <h3 className='w-14 '>{recipe_name} </h3>
            <h3>{preparing_time} min</h3>
            <h3>{calories} calories</h3>
            <button onClick={() => handleCook(cook)} className='btn bg-[#0BE58A] m-0'>Preparing</button>
        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object,
    handleCook: PropTypes.func
}
export default Cook;