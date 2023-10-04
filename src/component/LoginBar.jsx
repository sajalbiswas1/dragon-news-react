import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'

const LoginBar = () => {
    return (
        <div className='grid grid-cols-3 mt-5'>
            <div>
                
            </div>
            <div className='flex justify-center gap-3'>
                <h5 className='text-lg font-normal text-[#706F6F]'>Home</h5>
                <h5 className='text-lg font-normal text-[#706F6F]'>About</h5>
                <h5 className='text-lg font-normal text-[#706F6F]'>Career</h5>
            </div>
            <div className='flex gap-1 items-center justify-end'>
                <img className='w-10 rounded-full' src={userIcon} alt="User photo" />
                <NavLink><button className='text-xl font-semibold text-white px-10 py-2 bg-[#403F3F] hover:bg-gray-500'>LogIn</button></NavLink>
            </div>
        </div>
    );
};

export default LoginBar;