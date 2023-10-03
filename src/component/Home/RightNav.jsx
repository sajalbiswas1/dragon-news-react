import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai';

const RightNav = () => {
    return (
        <div className="col-span-1 border">
            <h3 className="text-xl font-semibold mb-5">With LogIn</h3>
            <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4'>
            <AiOutlineGoogle></AiOutlineGoogle>
            <p>LogIn with google</p>
            
            </div>
            <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2'>
            <AiOutlineGithub></AiOutlineGithub>
            <p>LogIn with google</p>
            </div>
        </div>
    );
};

export default RightNav;