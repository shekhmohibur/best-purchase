import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="py-8"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;