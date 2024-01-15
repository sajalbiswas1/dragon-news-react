import { Link } from "react-router-dom";


const ForgetPassword = () => {
    return (
        <div>
            <div className="w-1/2 m-auto border p-16 bg-[#FFF]">
            <h3 className="text-4xl font-semibold text-center mb-12">Register your account</h3>
            <hr />
            <form onChange className="px-6 mt-12 mb-7">
                <p className="text-xl mt-6 font-semibold mb-4">Email address</p>
                <input className="border w-full  text-base font-normal p-5 mb-5 bg-[#F3F3F3]" type="email" name="email" placeholder="Enter your email address" id="10003" /><br />
                
                <input className="bg-[#403F3F] text-white text-xl font-semibold p-5 w-full" type="submit" name="submit" value="Change Password" id="" />
            </form>
            <p className="text-base font-semibold text-center">Do not Have An Account? <Link className="text-[#F75B5F]" to={'/userForm/'}> Login</Link></p>
        </div>
        </div>
    );
};

export default ForgetPassword;