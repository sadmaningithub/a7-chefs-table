import banner from '../../assets/images/banner.jpeg'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center bg-gradient-to-r from-[#150B2BE5] to-[#150B2B00] p-10  min-h-96 rounded-3xl' style={{ backgroundImage: `url(${banner})` }} >
            <div className='text-[#FFFFFF]' >
                <div className='space-y-6'>
                    <h1 className='text-6xl	font-bold '>
                        Discover all the exceptional cooking recipes tailored for you!
                    </h1>
                    <div className='flex justify-center'>
                        <h4 className='text-lg font-normal max-w-4xl'>
                            Here you will learn how to cook like best chefs around the world and make restaurant like tasty food.
                        </h4>
                    </div>

                </div>
                <div className='mt-10'>
                    <button className="btn btn-success bg-[#0BE58A] rounded-full">Explore Now</button>

                    <button className="ml-6 btn btn-outline text-white rounded-full">Our Feedback</button>

                </div>

            </div>
        </div>
    );
};

export default Banner;