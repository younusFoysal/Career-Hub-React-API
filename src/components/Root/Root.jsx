import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";


const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;