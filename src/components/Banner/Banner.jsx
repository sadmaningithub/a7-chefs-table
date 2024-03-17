import banner from '../../assets/images/banner.jpeg'

const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center bg-cover bg-no-repeat bg-center bg-gradient-to-r from-[#150B2BE5] to-[#150B2B00] p-10  min-h-96 rounded-3xl' style={{ backgroundImage: `url(${banner})` }} >
            <div className='text-[#FFFFFF]' >
                <div className='space-y-6'>
                    <h1 className='text-6xl	font-bold '>
                        Discover an exceptional cooking class tailored for you!
                    </h1>
                    <div className='flex justify-center'>
                        <h4 className='text-lg font-normal max-w-4xl'>
                            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
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