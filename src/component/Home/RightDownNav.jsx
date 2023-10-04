import bg from "../../assets/bg.png"

const RightDownNav = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})` }} className='max-h-full text-white px-10 py-16 mt-5'>
                <h1 className='text-3xl font-bold text-center'>Create an Amazing Newspaper</h1>
                <p className='mt-5 mb-7 text-base font-normal text-center'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className='flex justify-center'>
                    <button className=' text-xl font-semibold bg-[#D72050] p-4'>Learn More</button>

                </div>
            </div>
        </div>
    );
};

export default RightDownNav;