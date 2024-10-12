import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;