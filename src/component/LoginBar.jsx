import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LoginBar = () => {
    const {handleSignOut,user}=useContext(AuthContext)
    const handleClickSignOut=()=>{
        handleSignOut()
    }
    return (
        <div className='grid grid-cols-3 pt-5'>
            <div>

            </div>
            <div className='flex justify-center gap-3'>
                <Link to={'/'}><h5 className='text-lg font-normal hover:underline text-[#706F6F]'>Home</h5></Link>
                <h5 className='text-lg font-normal text-[#706F6F]'>About</h5>
                <h5 className='text-lg font-normal text-[#706F6F]'>Career</h5>
            </div>
            <div className='flex gap-2 items-center justify-end'>
                <img className='w-10 rounded-full' src={user?user.photoURL:userIcon} alt="User photo" />
                {
                    user?<NavLink><button onClick={handleClickSignOut} className='text-xl font-semibold text-white px-10 py-2 bg-[#403F3F] hover:bg-gray-500'>SignOut</button></NavLink>
                    :
                    <NavLink to={'/userForm/'}><button className='text-xl font-semibold text-white px-10 py-2 bg-[#403F3F] hover:bg-gray-500'>LogIn</button></NavLink>
                    
                    
                }
            </div>
        </div>
    );
};

export default LoginBar;