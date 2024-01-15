import { AiOutlineGithub, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const GoogleSocial = () => {
    const { googleLogin, facebookLogin } = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleLogin()
    }
    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div>
                <div className="col-span-1">
                    <h3 className="text-xl font-semibold mb-5">With LogIn</h3>
                    <div onClick={handleGoogleLogin} className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4 border-black'>
                        <AiOutlineGoogle></AiOutlineGoogle>
                        <Link>LogIn with google</Link>
                    </div>
                    <div className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 mb-4 border-black'>
                        <AiOutlineGithub></AiOutlineGithub>
                        <p>LogIn with github</p>
                    </div>
                    <div onClick={handleFacebookLogin} className='flex items-center hover:text-blue-700  mx-2 py-2 justify-center gap-3 hover:border-blue-700 rounded-md border-2 border-black'>
                        <GrFacebookOption></GrFacebookOption>
                        <Link>LogIn with Facebook</Link>
                    </div>
                </div>
                <h1 className='text-xl font-semibold text-[#403F3F] mb-5 mt-9'>Find Us Zone</h1>
                <a href="https://www.facebook.com/sajal.biswas.71868">
                    <div className='flex border rounded-t-lg gap-2 p-4 items-center'>
                        <div className='bg-slate-100 rounded-full p-2'><GrFacebookOption className='text-blue-800 w-5 h-5'></GrFacebookOption></div>
                        <p>FaceBook</p>
                    </div>
                </a>
                <a href="https://twitter.com/">
                    <div className='flex border-x gap-2 p-4 items-center'>
                        <div className='bg-slate-100 rounded-full p-2'><AiOutlineTwitter className='text-blue-400 w-5 h-5'></AiOutlineTwitter></div>
                        <p>Twitter</p>
                    </div>
                </a>
                <a href="https://www.instagram.com/sajalbiswas1234/">
                    <div className='flex border rounded-b-lg gap-2 p-4 items-center'>
                        <div className='bg-slate-100 rounded-full p-2'><AiOutlineInstagram className='text-rose-500 w-5 h-5'></AiOutlineInstagram></div>
                        <p>Instagram</p>
                    </div>
                </a>
                <div className='bg-[#F3F3F3] pb-3 mt-5'>
                    <h3 className='p-4 mb-8'>Q-Zone</h3>
                    <div className='px-2'>
                        <img src={qZone1} alt="" />
                        <img src={qZone2} alt="" />
                        <img src={qZone3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleSocial;