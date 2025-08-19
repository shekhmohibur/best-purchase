import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'
const Welcome = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center text-center h-[calc(100vh-200px)]">
                <img className="w-32 md:w-40" src={logo} alt="best purchase logo" />
                <h1 className="font-bold text-lg uppercase md:text-4xl">Welcome to Best Purchase</h1>
                <button className="text-cyan-500 py-3 px-8 border-2 border-cyan-500 uppercase rounded-3xl hover:bg-cyan-500 hover:text-white font-semibold transition-all ease-in-out"><NavLink to={'/products'}>Purchase a product</NavLink></button>
            </div>
        </div>
    );
};

export default Welcome;