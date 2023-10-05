import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const LoginFrom = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        userLogin(email, password)
            .then(result => {
                console.log(123,result)
                navigate('/')
                
            })
            .catch(error => {
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
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" id="" /><br />
                <p className="mt-6 text-xl font-semibold mb-4">Password</p>
                <input className=" border w-full text-base font-normal p-5 mb-7 bg-[#F3F3F3]" type="password" name="password" placeholder="Enter your password" id="" /><br />
                <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Login " id="" />
            </form>
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#F75B5F]" to={'/userForm/register/'}> Register</Link></p>
        </div>
    );
};

export default LoginFrom;