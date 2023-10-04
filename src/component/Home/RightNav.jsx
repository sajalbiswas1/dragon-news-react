import { AiOutlineGithub, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

const RightNav = () => {
    return (
        <div>
            <div className="col-span-1">
                <h3 className="text-xl font-semibold mb-5">With LogIn</h3>
                <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4 border-black'>
                    <AiOutlineGoogle></AiOutlineGoogle>
                    <p>LogIn with google</p>

                </div>
                <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 border-black'>
                    <AiOutlineGithub></AiOutlineGithub>
                    <p>LogIn with google</p>
                </div>
            </div>
            <h1 className='text-xl font-semibold text-[#403F3F] mb-5 mt-9'>Find Us Zone</h1>
            <div className='flex border rounded-t-lg gap-2 p-4 items-center'>
                <div className='bg-slate-100 rounded-full p-2'><GrFacebookOption className='text-blue-800 w-5 h-5'></GrFacebookOption></div>
                <p>FaceBook</p>
            </div>
            <div className='flex border-x gap-2 p-4 items-center'>
                <div className='bg-slate-100 rounded-full p-2'><AiOutlineTwitter className='text-blue-400 w-5 h-5'></AiOutlineTwitter></div>
                <p>Twitter</p>
            </div>
            <div className='flex border rounded-b-lg gap-2 p-4 items-center'>
                <div className='bg-slate-100 rounded-full p-2'><AiOutlineInstagram className='text-rose-500 w-5 h-5'></AiOutlineInstagram></div>
                <p>Instagram</p>
            </div>
        </div>
    );
};

export default RightNav;