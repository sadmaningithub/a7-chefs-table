import PropTypes from 'prop-types'

const Cooking = ({cooking}) => {
    console.log(cooking)
    return (
        <div className="text-2xl font-semibold w-1/3">
            <div>
                <h1>Want to cook: {cooking.length}</h1>
            </div>
        </div>
    );
};

Cooking.propTypes = {
    cooking: PropTypes.object.isRequired
}

export default Cooking;