import { FaGithub, FaX, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const LoginSignup = () => {
    return (
        <div className="lg:h-screen flex flex-col justify-center items-center">
            <div className="container md:flex justify-between mx-auto rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-white flex flex-col items-center md:w-1/2 gap-5 py-8">
                    <h2 className="text-4xl font-semibold uppercase">Sign In</h2>
                    <div className="flex gap-3">
                        <Link className="p-2 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"><FaGithub /></Link>
                        <Link className="p-2 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"><FaX /></Link>
                        <Link className="p-2 border-2 border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white"><FaGoogle /></Link>
                    </div>
                    <p>or</p>
                    <div>
                        <form className="flex flex-col gap-6 justify-center items-center">
                            <input type="email" name="email" placeholder="Enter your email" className="border-2 py-3 px-4 rounded-2xl outline-none md:w-72 bg-gray-100 border-cyan-500 placeholder-cyan-500 text-cyan-500"/>
                            <input type="password" name="password" placeholder="Enter your password" className="border-2 py-3 px-4 rounded-2xl outline-none md:w-72 bg-gray-100 border-cyan-500 placeholder-cyan-500 text-cyan-500"/>
                            <a href="">Forgot your password !</a>
                            <button className="text-cyan-500 py-3 px-8 border-2 border-cyan-500 uppercase rounded-3xl hover:bg-cyan-500 hover:text-white font-semibold transition-all ease-in-out" type="submit">Sign In</button>
                        </form>
                    </div>
                </div>
                <div className="bg-cyan-500 md:w-1/2 flex flex-col justify-center items-center gap-5 py-8 text-center">
                    <h1 className="text-3xl font-semibold text-white">Create Account</h1>
                    <p className="text-gray-200">Sign up if you don't have an account</p>
                    <button className="text-white py-3 px-8 border-2 border-white uppercase rounded-3xl hover:bg-white hover:text-cyan-500 font-semibold transition-all ease-in-out"><Link>Sign up</Link></button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;