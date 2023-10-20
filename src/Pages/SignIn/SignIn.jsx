import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import facebook from "../../assets/facebook(1).png"
import twitter from "../../assets/twitter.png"
import google from "../../assets/google.png"
import { useState } from "react";
import { Link } from 'react-router-dom';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className='mb-20'>
            <div className="max-w-screen-xl mx-auto">
                <form className="w-2/5 mx-auto rounded-t-xl rounded-b-xl shadow-xl pb-10 my-10">
                    <h1 className="py-6 rounded-t-xl  bg-[#6FB554] text-center text-white font-bold text-3xl">Sign In</h1>
                    <div className="px-7">
                        <div className="mt-10 bg-gradient-to-r from-green-400 to-red-500 duration-500 hover:from-red-500 hover:to-green-400 rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                            <img className="w-8 p-1 h-8 rounded bg-white " src={google} alt="" />
                            <p className="text-lg font-semibold text-white">Sign In With Google</p>
                        </div>
                        <div className="mt-5 bg-[#476cc1] hover:bg-[#2b437b] duration-200 rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                            <img className="w-8 h-8 rounded bg-white " src={facebook} alt="" />
                            <p className="text-lg font-semibold text-white">Sign In With Facebook</p>
                        </div>
                        <div className="mt-5 bg-[#64b7ff] duration-200 hover:bg-[#2778c0] rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                            <img className="w-8 h-8 rounded-lg bg-white " src={twitter} alt="" />
                            <p className="text-lg font-semibold text-white">Sign In With Twitter</p>
                        </div>
                        <p className="text-lg font-medium text-center mt-5">Sign In With Email & Password</p>
                        <div className="mt-5 form-control">
                            <input type="email" name="email" placeholder="Enter Your Email" className="input rounded-3xl input-bordered" required />
                        </div>
                        <div className="relative">
                            <input className="input  rounded-3xl mt-5 input-bordered w-full" type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="Enter Your Password" required />
                            <span className="absolute right-4 bottom-4 cursor-pointer text-lg" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                        <label className="label justify-center">
                            <a href="#" className="label-text-alt link  link-hover">Forgot password?</a>
                        </label>
                        <div className="mt-2 bg-[#476cc1] hover:bg-[#2b437b] duration-200 rounded-3xl flex justify-center items-center gap-1 py-2 cursor-pointer">
                            <p className="text-lg font-semibold text-white">Sign In</p>
                        </div>
                        <p className='text-center mt-2'>New to this website? Please <Link to="/signUp" className="text-blue-400">Sign Up Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignIn;