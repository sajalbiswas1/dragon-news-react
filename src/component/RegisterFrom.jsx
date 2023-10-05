import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const RegisterFrom = () => {
    const { handleRegister } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password)
        handleRegister(email, password)
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
            e.target.reset()
    }
    return (
        <div className="w-1/2 m-auto border p-16 bg-[#FFF]">
            <h3 className="text-4xl font-semibold text-center mb-12">Register your account</h3>
            <hr />
            <form onChange={handleSubmit} className="px-6 mt-12 mb-7">
                <p className="text-xl font-semibold mb-4">Your name</p>
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="text" name="name" placeholder="Enter your name" id="10001" /><br />
                <p className="text-xl mt-6 font-semibold mb-4">Photo URL</p>
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="link" name="link" placeholder="Enter your password" id="10002" /><br />
                <p className="text-xl mt-6 font-semibold mb-4">Email address</p>
                <input className="border w-full  text-base font-normal p-5 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" id="10003" /><br />
                <p className="mt-6 text-xl font-semibold mb-4">Password</p>
                <input className=" border w-full text-base font-normal p-5 mb-7 bg-[#F3F3F3]" type="password" name="password" placeholder="Enter your password" id="10004" /><br />
                <div>
                </div>
                <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Register" id="" />
            </form>
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#F75B5F]" to={'/userForm/'}> Login</Link></p>
        </div>
    );
};

export default RegisterFrom;