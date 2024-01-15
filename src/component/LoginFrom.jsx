import { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

const LoginFrom = () => {
    const { userLogin,changePassword } = useContext(AuthContext);
    const [show, setShow]=useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);
    const navigate = useNavigate()
    const location = useLocation();
    

    const handleForget=()=>{
        setErrorLogin('')
        const emailRf = emailRef.current.value
        if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailRf)){
            setErrorLogin('Invalid Email')
            return;
        }
        changePassword(emailRf)
        .then(result=>{
            setSuccess('SuccesFully Sent email, check email')
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        //clear errorLogin
        setErrorLogin('') 

        userLogin(email, password)
            .then(result => {
                result
                //go to home
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                //set error
                setErrorLogin(error.message)
                console.log(error)
            })

        e.target.reset()
    }
    return (
        <div className="w-1/2 m-auto border p-16 bg-[#FFF]">
            <h3 className="text-4xl font-semibold text-center mb-12">Login your account</h3>
            <hr />
            <form className="px-6 mt-12 mb-7" onSubmit={handleLogin}>
                <p className="text-xl font-semibold mb-4">Email address</p>
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="email" required ref={emailRef} name="email" placeholder="Enter your email address" id="" /><br />
                <p className="mt-6 text-xl font-semibold mb-4">Password</p>
                <div className="relative">
                    {
                        show ?<span onClick={()=>setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeFill></BsFillEyeFill> </span>
                        :<span onClick={()=>setShow(!show)} className="absolute text-xl right-4 bottom-1/2"><BsFillEyeSlashFill></BsFillEyeSlashFill> </span>
                    }
                <input className=" border w-full text-base font-normal p-5 mb-7 bg-[#F3F3F3]" type={show ? 'text':'password'} name="password" placeholder="Enter your password" required id="10004" /><br />
                </div>
                <Link><p onClick={handleForget} className="text-base font-semibold text-left mb-3">Forgotten password? </p></Link>
                <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Login " id="" />
            </form>
            {
                errorLogin && <p className="text-base font-semibold text-center mb-7 text-red-500">{errorLogin}</p>
            }
            {
                success && <p className="text-base font-semibold text-center mb-7 text-green-400">{success}</p>
            }
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#5b66e0]" to={'/userForm/register/'}> Register</Link></p>
        </div>
    );
};

export default LoginFrom;