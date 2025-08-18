import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>It's our homepage</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;